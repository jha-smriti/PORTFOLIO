# Static Files Directory

This directory contains static files served by the backend API.

## Resume File
- Place your resume PDF file here as `Smriti_Jha_Resume.pdf`
- The file will be served through the `/api/resume/download` endpoint
- Supported format: PDF
- Recommended size: Under 5MB for faster downloads

## Usage
1. Add your actual resume PDF file: `Smriti_Jha_Resume.pdf`
2. The download endpoint will automatically serve this file
3. If no file is present, the API returns a mock response

## File Structure
```
static/
├── README.md
└── Smriti_Jha_Resume.pdf (add your resume here)
```