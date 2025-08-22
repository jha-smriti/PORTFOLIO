from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import FileResponse, JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from models import ContactMessageCreate, ContactMessage, ContactMessageResponse
from datetime import datetime
import uuid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="Smriti Jha Portfolio API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Basic health check endpoint
@api_router.get("/")
async def root():
    return {"message": "Smriti Jha Portfolio API is running!", "status": "healthy"}

# Contact form endpoint
@api_router.post("/contact", response_model=ContactMessageResponse)
async def submit_contact_form(contact_data: ContactMessageCreate, request: Request):
    try:
        # Create contact message document
        contact_message = ContactMessage(
            name=contact_data.name,
            email=contact_data.email,
            subject=contact_data.subject,
            message=contact_data.message,
            ip_address=request.client.host if request.client else None,
            user_agent=request.headers.get("user-agent", "")
        )
        
        # Convert to dict for MongoDB insertion
        message_dict = contact_message.model_dump()
        
        # Insert into database
        result = await db.contact_messages.insert_one(message_dict)
        
        if result.inserted_id:
            logger.info(f"Contact message received from {contact_data.email} - Subject: {contact_data.subject}")
            
            return ContactMessageResponse(
                success=True,
                message="Thank you for your message! I'll get back to you soon.",
                id=contact_message.id
            )
        else:
            raise HTTPException(status_code=500, detail="Failed to save message")
            
    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Get all contact messages (for admin use)
@api_router.get("/contact/messages")
async def get_contact_messages(limit: int = 50):
    try:
        messages = await db.contact_messages.find().sort("timestamp", -1).limit(limit).to_list(length=limit)
        
        # Convert ObjectId to string for JSON serialization
        for message in messages:
            message["_id"] = str(message["_id"])
            
        return {"messages": messages, "count": len(messages)}
        
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to fetch messages")

# Resume download endpoint
@api_router.get("/resume/download")
async def download_resume():
    try:
        # For now, we'll return a JSON response indicating the resume would be downloaded
        # In a real implementation, you would serve the actual PDF file
        resume_path = ROOT_DIR / "static" / "RESUME_SDE.pdf"
        
        if resume_path.exists():
            return FileResponse(
                path=resume_path,
                filename="RESUME_SDE.pdf",
                media_type="application/pdf"
            )
        else:
            # Mock response for now - you'll need to add the actual resume file
            return JSONResponse(
                content={
                    "message": "Resume download initiated",
                    "filename": "RESUME_SDE.pdf",
                    "note": "In production, this would serve the actual PDF file"
                },
                headers={
                    "Content-Disposition": "attachment; filename=RESUME_SDE.pdf"
                }
            )
            
    except Exception as e:
        logger.error(f"Error serving resume: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to serve resume")

# Portfolio data endpoint (future enhancement)
@api_router.get("/portfolio")
async def get_portfolio_data():
    return {
        "message": "Portfolio data endpoint",
        "note": "Currently using frontend mock data. This endpoint can be enhanced to serve dynamic data from database."
    }

# Update contact message status (for admin use)
@api_router.patch("/contact/messages/{message_id}/status")
async def update_message_status(message_id: str, status: str):
    try:
        if status not in ["new", "read", "responded"]:
            raise HTTPException(status_code=400, detail="Invalid status")
            
        result = await db.contact_messages.update_one(
            {"id": message_id},
            {"$set": {"status": status}}
        )
        
        if result.modified_count > 0:
            return {"success": True, "message": f"Status updated to {status}"}
        else:
            raise HTTPException(status_code=404, detail="Message not found")
            
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error updating message status: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to update status")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)