# API Contracts - Smriti Jha Portfolio

## Overview
This document outlines the API contracts for integrating the frontend portfolio with the backend services.

## Current Mock Data Location
- **File**: `/app/frontend/src/mock.js`
- **Data**: Complete portfolio information including personal details, projects, experience, skills, education

## Backend Implementation Requirements

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions from potential employers/collaborators

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "id": "contact_message_id"
}
```

**MongoDB Collection**: `contact_messages`
**Document Structure**:
```json
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string",
  "timestamp": "datetime",
  "status": "new" // new, read, responded
}
```

### 2. Portfolio Data API (Future Enhancement)
**Endpoint**: `GET /api/portfolio`
**Purpose**: Serve portfolio data dynamically (currently using mock data)

**Response**: 
```json
{
  "personal": { ... },
  "about": { ... },
  "skills": { ... },
  "projects": [ ... ],
  "experience": [ ... ],
  "education": [ ... ],
  "certifications": [ ... ]
}
```

### 3. Resume Download API
**Endpoint**: `GET /api/resume/download`
**Purpose**: Serve Smriti's resume file for download

**Response**: PDF file download

## Frontend Integration Points

### 1. Contact Form (src/components/Contact.jsx)
- **Current**: Mock form submission with setTimeout simulation
- **Update**: Replace mock API call with actual backend endpoint
- **Form Validation**: Client-side validation already implemented
- **Success/Error Handling**: Toast notifications already implemented

### 2. Hero Section (src/components/Hero.jsx)
- **Current**: Mock resume download
- **Update**: Connect to actual resume download endpoint
- **Button**: "Download Resume" should trigger actual PDF download

### 3. Data Loading (src/components/Portfolio.jsx)
- **Current**: Loading mock data from mock.js
- **Future**: Can be updated to fetch from API endpoint
- **Loading State**: Already implemented with spinner

## Implementation Priority
1. **High Priority**: Contact form functionality
2. **Medium Priority**: Resume download functionality  
3. **Low Priority**: Dynamic portfolio data API (mock data works fine for now)

## Database Schema

### Contact Messages Collection
```javascript
{
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, enum: ['new', 'read', 'responded'], default: 'new' },
  ipAddress: String,
  userAgent: String
}
```

## Error Handling
- Validation errors: 400 Bad Request
- Server errors: 500 Internal Server Error
- Success responses: 200 OK
- Rate limiting: Implement to prevent spam

## Security Considerations
- Input validation and sanitization
- Rate limiting for contact form
- CORS configuration
- Email validation
- Basic spam protection

## Integration Steps
1. Create contact message model in backend
2. Implement POST /api/contact endpoint
3. Update frontend Contact.jsx to use real API
4. Test form submission and database storage
5. Implement resume download endpoint
6. Update frontend Hero.jsx for resume download
7. Test complete workflow