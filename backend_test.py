#!/usr/bin/env python3
"""
Backend API Testing Suite for Smriti Jha Portfolio
Tests all backend endpoints with comprehensive validation
"""

import requests
import json
import sys
import os
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://job-ready-portfolio-1.preview.com/api"

class PortfolioAPITester:
    def __init__(self):
        self.base_url = BACKEND_URL
        self.session = requests.Session()
        self.test_results = []
        
    def log_test(self, test_name, success, message, details=None):
        """Log test results"""
        result = {
            "test": test_name,
            "success": success,
            "message": message,
            "timestamp": datetime.now().isoformat(),
            "details": details
        }
        self.test_results.append(result)
        status = "✅ PASS" if success else "❌ FAIL"
        print(f"{status}: {test_name} - {message}")
        if details and not success:
            print(f"   Details: {details}")
    
    def test_health_check(self):
        """Test GET /api/ endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/")
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "status" in data:
                    self.log_test("Health Check", True, "API is running and healthy")
                    return True
                else:
                    self.log_test("Health Check", False, "Response missing required fields", data)
                    return False
            else:
                self.log_test("Health Check", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Health Check", False, f"Connection error: {str(e)}")
            return False
    
    def test_contact_form_valid(self):
        """Test POST /api/contact with valid data"""
        valid_data = {
            "name": "Sarah Johnson",
            "email": "sarah.johnson@example.com",
            "subject": "Collaboration Opportunity",
            "message": "Hi Smriti, I came across your portfolio and I'm impressed with your work. I'd love to discuss a potential collaboration opportunity on a data science project."
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=valid_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "id" in data:
                    self.log_test("Contact Form - Valid Data", True, "Contact form submitted successfully")
                    return data.get("id")  # Return ID for later tests
                else:
                    self.log_test("Contact Form - Valid Data", False, "Invalid response format", data)
                    return None
            else:
                self.log_test("Contact Form - Valid Data", False, f"HTTP {response.status_code}", response.text)
                return None
                
        except Exception as e:
            self.log_test("Contact Form - Valid Data", False, f"Request error: {str(e)}")
            return None
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact with invalid email"""
        invalid_data = {
            "name": "John Doe",
            "email": "invalid-email",
            "subject": "Test Subject",
            "message": "Test message"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=invalid_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact Form - Invalid Email", True, "Validation correctly rejected invalid email")
                return True
            else:
                self.log_test("Contact Form - Invalid Email", False, f"Expected 422, got {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Form - Invalid Email", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        incomplete_data = {
            "name": "Jane Doe",
            "email": "jane@example.com"
            # Missing subject and message
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=incomplete_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact Form - Missing Fields", True, "Validation correctly rejected incomplete data")
                return True
            else:
                self.log_test("Contact Form - Missing Fields", False, f"Expected 422, got {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Form - Missing Fields", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_form_empty_fields(self):
        """Test POST /api/contact with empty required fields"""
        empty_data = {
            "name": "",
            "email": "test@example.com",
            "subject": "",
            "message": ""
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=empty_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 422:  # Validation error expected
                self.log_test("Contact Form - Empty Fields", True, "Validation correctly rejected empty fields")
                return True
            else:
                self.log_test("Contact Form - Empty Fields", False, f"Expected 422, got {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Form - Empty Fields", False, f"Request error: {str(e)}")
            return False
    
    def test_resume_download(self):
        """Test GET /api/resume/download endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/resume/download")
            
            if response.status_code == 200:
                # Check if it's a PDF file or JSON response
                content_type = response.headers.get('content-type', '')
                
                if 'application/pdf' in content_type:
                    self.log_test("Resume Download", True, "PDF file served successfully")
                    return True
                elif 'application/json' in content_type:
                    # Mock response case
                    data = response.json()
                    if "message" in data and "filename" in data:
                        self.log_test("Resume Download", True, "Mock resume download response received")
                        return True
                    else:
                        self.log_test("Resume Download", False, "Invalid JSON response format", data)
                        return False
                else:
                    self.log_test("Resume Download", False, f"Unexpected content type: {content_type}")
                    return False
            else:
                self.log_test("Resume Download", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Resume Download", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_messages_admin(self):
        """Test GET /api/contact/messages endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/contact/messages")
            
            if response.status_code == 200:
                data = response.json()
                if "messages" in data and "count" in data:
                    message_count = data.get("count", 0)
                    self.log_test("Contact Messages Admin", True, f"Retrieved {message_count} contact messages")
                    return True
                else:
                    self.log_test("Contact Messages Admin", False, "Invalid response format", data)
                    return False
            else:
                self.log_test("Contact Messages Admin", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Messages Admin", False, f"Request error: {str(e)}")
            return False
    
    def test_portfolio_data(self):
        """Test GET /api/portfolio endpoint"""
        try:
            response = self.session.get(f"{self.base_url}/portfolio")
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_test("Portfolio Data", True, "Portfolio endpoint accessible")
                    return True
                else:
                    self.log_test("Portfolio Data", False, "Invalid response format", data)
                    return False
            else:
                self.log_test("Portfolio Data", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Portfolio Data", False, f"Request error: {str(e)}")
            return False
    
    def test_contact_form_additional_valid(self):
        """Test another valid contact form submission to verify data storage"""
        valid_data = {
            "name": "Michael Chen",
            "email": "michael.chen@techcorp.com",
            "subject": "Job Opportunity - Senior Data Scientist",
            "message": "Hello Smriti, We have an exciting opportunity for a Senior Data Scientist position at our company. Your background in machine learning and data analysis is exactly what we're looking for. Would you be interested in discussing this further?"
        }
        
        try:
            response = self.session.post(
                f"{self.base_url}/contact",
                json=valid_data,
                headers={"Content-Type": "application/json"}
            )
            
            if response.status_code == 200:
                data = response.json()
                if data.get("success") and "id" in data:
                    self.log_test("Contact Form - Additional Valid", True, "Second contact form submitted successfully")
                    return True
                else:
                    self.log_test("Contact Form - Additional Valid", False, "Invalid response format", data)
                    return False
            else:
                self.log_test("Contact Form - Additional Valid", False, f"HTTP {response.status_code}", response.text)
                return False
                
        except Exception as e:
            self.log_test("Contact Form - Additional Valid", False, f"Request error: {str(e)}")
            return False
    
    def run_all_tests(self):
        """Run all backend tests"""
        print(f"🚀 Starting Backend API Tests for Smriti Jha Portfolio")
        print(f"📍 Testing against: {self.base_url}")
        print("=" * 60)
        
        # Test sequence
        tests = [
            ("Health Check", self.test_health_check),
            ("Contact Form - Valid Data", self.test_contact_form_valid),
            ("Contact Form - Invalid Email", self.test_contact_form_invalid_email),
            ("Contact Form - Missing Fields", self.test_contact_form_missing_fields),
            ("Contact Form - Empty Fields", self.test_contact_form_empty_fields),
            ("Contact Form - Additional Valid", self.test_contact_form_additional_valid),
            ("Resume Download", self.test_resume_download),
            ("Contact Messages Admin", self.test_contact_messages_admin),
            ("Portfolio Data", self.test_portfolio_data),
        ]
        
        passed = 0
        total = len(tests)
        
        for test_name, test_func in tests:
            try:
                result = test_func()
                if result:
                    passed += 1
            except Exception as e:
                self.log_test(test_name, False, f"Test execution error: {str(e)}")
        
        print("=" * 60)
        print(f"📊 Test Results: {passed}/{total} tests passed")
        
        if passed == total:
            print("🎉 All tests passed! Backend API is working correctly.")
            return True
        else:
            print(f"⚠️  {total - passed} tests failed. Check the details above.")
            return False
    
    def get_summary(self):
        """Get test summary"""
        passed = sum(1 for result in self.test_results if result["success"])
        total = len(self.test_results)
        
        return {
            "total_tests": total,
            "passed": passed,
            "failed": total - passed,
            "success_rate": f"{(passed/total)*100:.1f}%" if total > 0 else "0%",
            "results": self.test_results
        }

def main():
    """Main test execution"""
    tester = PortfolioAPITester()
    
    print("Testing Smriti Jha Portfolio Backend API")
    print(f"Backend URL: {BACKEND_URL}")
    print()
    
    success = tester.run_all_tests()
    
    # Print summary
    summary = tester.get_summary()
    print(f"\n📈 Final Summary:")
    print(f"   Total Tests: {summary['total_tests']}")
    print(f"   Passed: {summary['passed']}")
    print(f"   Failed: {summary['failed']}")
    print(f"   Success Rate: {summary['success_rate']}")
    
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())