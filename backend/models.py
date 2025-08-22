from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Contact Form Models
class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100, description="Full name")
    email: EmailStr = Field(..., description="Valid email address")
    subject: str = Field(..., min_length=1, max_length=200, description="Message subject")
    message: str = Field(..., min_length=1, max_length=2000, description="Message content")

class ContactMessage(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new", description="Status: new, read, responded")
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None

class ContactMessageResponse(BaseModel):
    success: bool
    message: str
    id: str

# Portfolio Data Models (for future use)
class PersonalInfo(BaseModel):
    name: str
    title: str
    tagline: str
    email: str
    phone: str
    location: str
    linkedin: str
    github: str
    website: str

class About(BaseModel):
    summary: str
    highlights: List[str]

class Skills(BaseModel):
    programming: List[str]
    frontend: List[str]
    backend: List[str]
    cloudDevOps: List[str]
    databases: List[str]
    dataScience: List[str]
    tools: List[str]

class ProjectMetrics(BaseModel):
    pass  # Dynamic fields

class Project(BaseModel):
    id: int
    title: str
    description: str
    technologies: List[str]
    features: List[str]
    metrics: dict
    githubUrl: str
    liveUrl: Optional[str] = None
    category: str
    duration: Optional[str] = None

class Experience(BaseModel):
    id: int
    company: str
    role: str
    duration: str
    location: str
    description: str
    achievements: List[str]
    technologies: List[str]

class Education(BaseModel):
    degree: str
    institution: str
    year: str
    location: Optional[str] = None
    gpa: Optional[str] = None
    achievements: Optional[List[str]] = None

class PortfolioData(BaseModel):
    personal: PersonalInfo
    about: About
    skills: Skills
    projects: List[Project]
    experience: List[Experience]
    education: List[Education]
    certifications: List[str]
    achievements: Optional[List[str]] = None