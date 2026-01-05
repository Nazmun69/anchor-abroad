# Functional Requirements Document

## Project: AnchorAbroad - Visa Counseling Platform

**Version:** 1.0  
**Date:** January 2026  
**Status:** Active Development

---

## 1. Introduction

### 1.1 Purpose
This document defines the functional requirements for AnchorAbroad, a web-based visa counseling platform that connects visa applicants with professional counselors.

### 1.2 Scope
The system provides visa application guidance, user authentication, form submissions, appointment booking, and administrative dashboard capabilities.

### 1.3 Stakeholders
- Visa applicants (end users)
- Visa counselors (service providers)
- System administrators
- Marketing team

---

## 2. System Features

### 2.1 User Authentication

**FR-AUTH-001: User Registration**
- Users shall be able to register using email and password
- System shall send email verification upon registration
- Users must verify email before accessing protected features
- Registration shall create a user profile automatically

**FR-AUTH-002: User Login**
- Users shall be able to login with verified email and password
- System shall maintain user session across page refreshes
- Users shall be redirected to intended page after login
- Failed login attempts shall display appropriate error messages

**FR-AUTH-003: User Logout**
- Authenticated users shall be able to logout
- Logout shall clear all session data
- Users shall be redirected to home page after logout

**FR-AUTH-004: Session Management**
- System shall automatically refresh authentication tokens
- Sessions shall expire after period of inactivity
- Middleware shall protect authenticated routes

---

### 2.2 Visa Application Management

**FR-VISA-001: Visa Application Form**
- Users must be authenticated to access visa application form
- Form shall collect personal information (name, DOB, nationality, passport)
- Form shall collect contact information (email, phone, address)
- Form shall collect education details (degree, institution, graduation)
- Form shall collect financial information (funding sources, amount)
- Form shall collect visa-specific details (type, purpose, duration)

**FR-VISA-002: Form Validation**
- All required fields must be validated before submission
- Email format shall be validated
- Phone number format shall be validated
- Date fields shall accept valid dates only
- Numeric fields shall accept numbers only

**FR-VISA-003: Application Submission**
- Authenticated users shall submit visa applications
- Submissions shall be stored in database linked to user account
- System shall display confirmation message upon successful submission
- System shall display error message if submission fails

**FR-VISA-004: Application Assessment**
- Users shall complete preliminary assessment questionnaire
- Assessment shall provide personalized recommendations
- Results shall be displayed immediately after completion

---

### 2.3 User Dashboard

**FR-DASH-001: Dashboard Access**
- Only authenticated users shall access dashboard
- Dashboard shall display user profile information
- Dashboard shall show logout functionality

**FR-DASH-002: View Submissions**
- Users shall view all their form submissions in table format
- Each submission shall display: ID, type, status, date
- Status shall be color-coded (pending, approved, rejected)
- Submissions shall be sorted by most recent first

**FR-DASH-003: Submission Details**
- Users shall view detailed information of any submission
- Details shall display all form fields and values
- Modal dialog shall show submission details

**FR-DASH-004: Delete Submissions**
- Users shall delete their own submissions
- System shall request confirmation before deletion
- Deleted submissions shall be removed from database
- Success message shall confirm deletion

**FR-DASH-005: Create New Submission**
- Users shall create new submissions from dashboard
- System shall provide quick access to visa application form

---

### 2.4 Public Website Features

**FR-WEB-001: Home Page**
- Display hero section with main value proposition
- Show counselor information and credentials
- Display benefits of using the service
- Show testimonials from previous clients
- Display frequently asked questions
- Show call-to-action sections

**FR-WEB-002: Navigation**
- Header shall display on all pages
- Navigation links shall be clearly visible
- Authenticated users shall see Dashboard link
- Non-authenticated users shall see Login link
- Mobile-responsive navigation menu

**FR-WEB-003: Call-to-Action Buttons**
- "Apply Now" button shall redirect to visa application
- "Book Session" button shall scroll to booking section
- "Get Started" button shall scroll to booking section
- Unauthenticated users shall be redirected to login

---

### 2.5 Information Display

**FR-INFO-001: Counselor Information**
- Display counselor photo and credentials
- Show professional experience and expertise
- Display success stories and statistics

**FR-INFO-002: Service Benefits**
- Display key benefits of the service
- Show icons representing each benefit
- Provide clear descriptions

**FR-INFO-003: Testimonials**
- Display client testimonials with photos
- Show client names and occupations
- Display rating or success indicators

**FR-INFO-004: FAQ Section**
- Display frequently asked questions
- Provide expandable/collapsible answers
- Categorize questions logically

---

## 3. Data Requirements

### 3.1 User Data
- User ID (UUID, primary key)
- Email (required, unique)
- Password (hashed, required)
- Full name (optional)
- Created timestamp
- Updated timestamp

### 3.2 Visa Application Data
- Application ID (UUID, primary key)
- User ID (foreign key)
- Form type (text)
- Form data (JSON object containing):
  - Personal information
  - Contact details
  - Education background
  - Financial information
  - Visa requirements
- Status (pending/approved/rejected)
- Created timestamp
- Updated timestamp

---

## 4. Integration Requirements

**FR-INT-001: Database Integration**
- System shall integrate with Supabase database
- All data operations shall use Row Level Security (RLS)
- Database queries shall be parameterized to prevent SQL injection

**FR-INT-002: Email Service**
- System shall send verification emails upon registration
- Email service shall be configured through Supabase Auth

---

## 5. Security Requirements

**FR-SEC-001: Data Access Control**
- Users shall only access their own data
- RLS policies shall enforce data isolation
- Unauthorized access attempts shall be blocked

**FR-SEC-002: Authentication Security**
- Passwords shall be hashed before storage
- Session tokens shall be stored securely
- Authentication state shall be verified on protected routes

---

## 6. Performance Requirements

**FR-PERF-001: Page Load Time**
- Home page shall load within 3 seconds
- Dashboard shall load within 2 seconds
- Form submissions shall process within 2 seconds

**FR-PERF-002: Concurrent Users**
- System shall support minimum 100 concurrent users
- Response time shall not degrade significantly under load

---

## 7. Usability Requirements

**FR-USE-001: User Interface**
- Interface shall be intuitive and easy to navigate
- Error messages shall be clear and actionable
- Success messages shall confirm user actions
- Loading states shall indicate processing

**FR-USE-002: Responsive Design**
- Website shall be fully responsive across devices
- Mobile users shall have equivalent functionality
- Touch interactions shall work on mobile devices

---

## 8. Acceptance Criteria

Each functional requirement shall be considered complete when:
1. Feature is implemented as specified
2. All validation rules are enforced
3. Error handling is comprehensive
4. Security measures are in place
5. User testing confirms usability
6. Performance benchmarks are met

---

## 9. Future Enhancements

- Payment integration for consultation fees
- Real-time chat with counselors
- Document upload functionality
- Application status tracking
- Email notifications for status changes
- Multi-language support
- Admin panel for counselors
