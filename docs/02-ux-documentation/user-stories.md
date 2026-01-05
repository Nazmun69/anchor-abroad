# User Stories

## Project: AnchorAbroad - Visa Counseling Platform

---

## Epic 1: User Authentication & Account Management

### US-AUTH-001: User Registration
**As a** prospective visa applicant  
**I want to** create an account with my email and password  
**So that** I can access the visa counseling services

**Acceptance Criteria:**
- User can enter email and password on registration form
- Password must be minimum 8 characters
- Email must be valid format
- System sends verification email within 30 seconds
- User sees confirmation message after registration
- Duplicate emails are rejected with clear error message

**Priority:** High  
**Story Points:** 5

---

### US-AUTH-002: Email Verification
**As a** newly registered user  
**I want to** verify my email address  
**So that** I can confirm my identity and access the platform

**Acceptance Criteria:**
- Verification email contains clickable link
- Link redirects to platform with success message
- Unverified users cannot access protected features
- Verification link expires after 24 hours
- User can request new verification email

**Priority:** High  
**Story Points:** 3

---

### US-AUTH-003: User Login
**As a** registered user  
**I want to** login with my credentials  
**So that** I can access my account and applications

**Acceptance Criteria:**
- User can enter email and password
- Invalid credentials show clear error message
- Successful login redirects to dashboard or intended page
- Session persists across browser refresh
- "Remember me" option available

**Priority:** High  
**Story Points:** 5

---

### US-AUTH-004: User Logout
**As an** authenticated user  
**I want to** logout of my account  
**So that** I can secure my information on shared devices

**Acceptance Criteria:**
- Logout button is visible in header/dashboard
- Clicking logout clears session
- User is redirected to home page
- Logged out user cannot access protected pages
- Success message confirms logout

**Priority:** Medium  
**Story Points:** 2

---

### US-AUTH-005: Password Reset
**As a** user who forgot password  
**I want to** reset my password via email  
**So that** I can regain access to my account

**Acceptance Criteria:**
- "Forgot Password" link on login page
- User enters email to receive reset link
- Reset email sent within 1 minute
- Reset link expires after 1 hour
- User can set new password
- Success message confirms password change

**Priority:** Medium  
**Story Points:** 5

---

## Epic 2: Visa Application Form

### US-VISA-001: Access Application Form
**As an** authenticated user  
**I want to** access the visa application form  
**So that** I can start my visa application process

**Acceptance Criteria:**
- Unauthenticated users redirected to login
- After login, user returns to application form
- Form loads within 2 seconds
- Mobile responsive design
- Clear instructions at top of form

**Priority:** High  
**Story Points:** 3

---

### US-VISA-002: Fill Personal Information
**As an** applicant  
**I want to** enter my personal information  
**So that** I can provide required details for my visa application

**Acceptance Criteria:**
- Fields include: first name, last name, date of birth, nationality, passport number
- Date picker for date of birth
- Dropdown for nationality selection
- All fields have appropriate validation
- Required fields are marked with asterisk
- Inline validation errors display immediately

**Priority:** High  
**Story Points:** 5

---

### US-VISA-003: Fill Contact Information
**As an** applicant  
**I want to** enter my contact information  
**So that** counselors can reach me

**Acceptance Criteria:**
- Fields include: email, phone, address, city, state, zip, country
- Email format validated
- Phone format validated
- Address fields support international formats
- Auto-fill from user profile if available

**Priority:** High  
**Story Points:** 3

---

### US-VISA-004: Fill Education Background
**As an** applicant  
**I want to** enter my education details  
**So that** I can demonstrate my qualifications

**Acceptance Criteria:**
- Fields include: highest degree, field of study, institution, country, graduation year
- Dropdown for degree level selection
- Year picker for graduation
- Support for "currently enrolled" status
- Option to add multiple education entries (future enhancement)

**Priority:** High  
**Story Points:** 5

---

### US-VISA-005: Fill Financial Information
**As an** applicant  
**I want to** provide financial information  
**So that** I can prove my ability to support my stay

**Acceptance Criteria:**
- Fields include: funding source, funding amount, sponsor if applicable
- Dropdown for funding source (personal, family, scholarship, employer)
- Numeric validation for amount
- Currency selector
- Help text explains what's needed

**Priority:** High  
**Story Points:** 3

---

### US-VISA-006: Fill Visa Requirements
**As an** applicant  
**I want to** specify my visa needs  
**So that** counselors understand my requirements

**Acceptance Criteria:**
- Fields include: visa type, purpose, intended stay duration
- Dropdown for common visa types (F-1, H-1B, B-1, etc.)
- Radio buttons for purpose categories
- Date picker for intended travel date
- Help icons explain each visa type

**Priority:** High  
**Story Points:** 5

---

### US-VISA-007: Save Draft Application
**As an** applicant  
**I want to** save my progress without submitting  
**So that** I can complete the application over multiple sessions

**Acceptance Criteria:**
- Auto-save occurs every 30 seconds
- Manual "Save Draft" button available
- Toast notification confirms save
- Saved data persists across logout/login
- User can see last saved timestamp

**Priority:** High  
**Story Points:** 8

---

### US-VISA-008: Submit Application
**As an** applicant  
**I want to** submit my completed application  
**So that** counselors can review it

**Acceptance Criteria:**
- Submit button disabled until all required fields valid
- Validation errors shown before submission
- Confirmation dialog before final submission
- Success message after submission
- Application appears in dashboard immediately
- Email confirmation sent to user

**Priority:** High  
**Story Points:** 5

---

### US-VISA-009: Form Validation
**As an** applicant  
**I want to** receive clear validation feedback  
**So that** I can correct errors before submission

**Acceptance Criteria:**
- Required fields marked clearly
- Inline validation on field blur
- Error messages in red below fields
- Summary of errors at top before submission
- Accessible error announcements for screen readers

**Priority:** High  
**Story Points:** 5

---

## Epic 3: User Dashboard

### US-DASH-001: View Dashboard
**As an** authenticated user  
**I want to** see my dashboard  
**So that** I can access my applications and profile

**Acceptance Criteria:**
- Dashboard accessible from header link
- Protected route (requires authentication)
- Loads within 2 seconds
- Shows user name/email
- Displays logout button
- Mobile responsive

**Priority:** High  
**Story Points:** 5

---

### US-DASH-002: View Submissions List
**As a** user  
**I want to** see all my form submissions  
**So that** I can track my applications

**Acceptance Criteria:**
- Submissions displayed in table format
- Columns: ID (truncated), Type, Status, Date
- Sorted by most recent first
- Status badge color-coded (pending=yellow, approved=green, rejected=red)
- Empty state if no submissions
- "Create New" button visible

**Priority:** High  
**Story Points:** 5

---

### US-DASH-003: View Submission Details
**As a** user  
**I want to** view full details of a submission  
**So that** I can review what I submitted

**Acceptance Criteria:**
- Click on submission row opens detail modal
- Modal shows all form fields and values
- Personal, contact, education, financial, visa sections clearly separated
- Close button to return to list
- Readable formatting of data

**Priority:** Medium  
**Story Points:** 5

---

### US-DASH-004: Delete Submission
**As a** user  
**I want to** delete a submission  
**So that** I can remove incorrect or duplicate applications

**Acceptance Criteria:**
- Delete button/icon on each submission row
- Confirmation dialog before deletion
- Deletion removes from database
- Success toast message
- Submission removed from list immediately
- Cannot delete after counselor review starts (future enhancement)

**Priority:** Medium  
**Story Points:** 3

---

### US-DASH-005: Create New Application
**As a** user  
**I want to** start a new visa application from dashboard  
**So that** I can quickly access the form

**Acceptance Criteria:**
- "New Application" or "Apply for Visa" button prominent
- Clicking redirects to visa application form
- Button visible even if submissions exist
- Tooltip/help text explains purpose

**Priority:** Medium  
**Story Points:** 2

---

### US-DASH-006: View Profile
**As a** user  
**I want to** see my profile information  
**So that** I can verify my account details

**Acceptance Criteria:**
- Profile section shows email, name, join date
- Data pulled from database profiles table
- Edit profile option (future enhancement)
- Professional, clean display

**Priority:** Low  
**Story Points:** 3

---

## Epic 4: Assessment & Recommendations

### US-ASSESS-001: Take Initial Assessment
**As a** prospective applicant  
**I want to** complete a preliminary assessment  
**So that** I can understand my visa options

**Acceptance Criteria:**
- Assessment accessible before full application
- 5-10 questions about background and goals
- Multiple choice and short answer questions
- Progress indicator shows completion percentage
- Can save and return later

**Priority:** Medium  
**Story Points:** 8

---

### US-ASSESS-002: Receive Recommendations
**As an** assessment completer  
**I want to** receive personalized recommendations  
**So that** I know which visa type to pursue

**Acceptance Criteria:**
- Recommendations based on assessment responses
- Suggests appropriate visa types
- Explains why each is recommended
- Provides timeline estimates
- Links to start full application

**Priority:** Medium  
**Story Points:** 5

---

## Epic 5: Public Website Features

### US-WEB-001: View Home Page
**As a** visitor  
**I want to** see an informative home page  
**So that** I can understand the service offering

**Acceptance Criteria:**
- Hero section with clear value proposition
- Counselor credentials displayed
- Benefits section explaining advantages
- Testimonials from previous clients
- FAQ section
- Clear call-to-action buttons
- Fast load time (<3 seconds)

**Priority:** High  
**Story Points:** 8

---

### US-WEB-002: Navigate Website
**As a** visitor  
**I want to** easily navigate the website  
**So that** I can find information I need

**Acceptance Criteria:**
- Header navigation on all pages
- Logo links to home page
- Navigation links: Home, About, Apply, Login/Dashboard
- Mobile hamburger menu on small screens
- Smooth scroll to page sections
- Footer with additional links

**Priority:** High  
**Story Points:** 5

---

### US-WEB-003: Read About Counselor
**As a** visitor  
**I want to** learn about the counselor  
**So that** I can trust their expertise

**Acceptance Criteria:**
- Professional photo of counselor
- Credentials and certifications
- Years of experience
- Success rate statistics
- Previous roles and expertise
- Personal statement

**Priority:** Medium  
**Story Points:** 3

---

### US-WEB-004: View Testimonials
**As a** visitor  
**I want to** read client testimonials  
**So that** I can see proof of service quality

**Acceptance Criteria:**
- At least 3-5 testimonials displayed
- Client photo (if available)
- Client name and occupation
- Testimonial text
- Rating or success indicator
- Carousel or grid layout

**Priority:** Medium  
**Story Points:** 3

---

### US-WEB-005: Read FAQ
**As a** visitor  
**I want to** read frequently asked questions  
**So that** I can get immediate answers

**Acceptance Criteria:**
- Accordion-style FAQ display
- At least 6-8 common questions
- Questions cover: process, cost, timeline, success rate, requirements
- Expandable answers
- Search FAQ (future enhancement)

**Priority:** Medium  
**Story Points:** 3

---

### US-WEB-006: Apply Now CTA
**As a** visitor  
**I want to** click Apply Now buttons  
**So that** I can start the application process

**Acceptance Criteria:**
- Multiple "Apply Now" CTAs throughout page
- Prominent in hero section
- Redirects to login if not authenticated
- Redirects to visa application if authenticated
- Returns to application after login

**Priority:** High  
**Story Points:** 3

---

## Epic 6: Notifications & Communication

### US-NOTIF-001: Receive Email Confirmations
**As a** user  
**I want to** receive email confirmations  
**So that** I have record of my actions

**Acceptance Criteria:**
- Email sent on registration (verification)
- Email sent on successful submission
- Email sent on status changes
- Emails have professional design
- Unsubscribe option (transactional emails exempt)

**Priority:** Medium  
**Story Points:** 8

---

### US-NOTIF-002: In-App Notifications
**As a** user  
**I want to** see notifications in the app  
**So that** I'm aware of important updates

**Acceptance Criteria:**
- Toast notifications for actions (save, delete, submit)
- Success notifications are green
- Error notifications are red
- Auto-dismiss after 5 seconds
- Accessible to screen readers

**Priority:** Medium  
**Story Points:** 5

---

## Epic 7: Mobile Experience

### US-MOBILE-001: Mobile-Optimized Forms
**As a** mobile user  
**I want to** complete forms on my phone  
**So that** I can apply from anywhere

**Acceptance Criteria:**
- Form fields large enough for touch
- Appropriate keyboard types (email, number, tel)
- Auto-zoom disabled on input focus
- Vertical layout on small screens
- Submit button always accessible

**Priority:** High  
**Story Points:** 8

---

### US-MOBILE-002: Mobile Dashboard
**As a** mobile user  
**I want to** access my dashboard on phone  
**So that** I can check application status on-the-go

**Acceptance Criteria:**
- Table converts to card layout on mobile
- All information visible without horizontal scroll
- Touch-friendly buttons and links
- Modals work properly on mobile
- Navigation menu accessible

**Priority:** High  
**Story Points:** 5

---

## Epic 8: Security & Privacy

### US-SEC-001: Secure Data Storage
**As a** user  
**I want to** know my data is secure  
**So that** I trust the platform with sensitive information

**Acceptance Criteria:**
- All connections use HTTPS
- Passwords hashed before storage
- Session tokens stored securely
- Row Level Security enforced
- SQL injection protection

**Priority:** Critical  
**Story Points:** 13

---

### US-SEC-002: Data Privacy
**As a** user  
**I want to** my data to be private  
**So that** other users cannot see my information

**Acceptance Criteria:**
- Users only see their own submissions
- Profile data not shared
- Database policies prevent unauthorized access
- Audit logging for data access (future)
- Privacy policy displayed

**Priority:** Critical  
**Story Points:** 8

---

## Story Map Overview

### Now (MVP)
- US-AUTH-001, 002, 003, 004
- US-VISA-001 through 009
- US-DASH-001, 002, 003, 005
- US-WEB-001, 002, 006
- US-MOBILE-001, 002
- US-SEC-001, 002

### Next (Phase 2)
- US-AUTH-005
- US-DASH-004, 006
- US-ASSESS-001, 002
- US-WEB-003, 004, 005
- US-NOTIF-001, 002

### Later (Phase 3)
- Document upload
- Payment integration
- Consultation scheduling
- Real-time chat
- Admin panel
- Multi-language support

---

## Story Point Reference

- **1-2 points:** Simple UI changes, minor text updates
- **3-5 points:** Single feature with validation, typical CRUD operations
- **8 points:** Complex feature with multiple components
- **13 points:** Major feature affecting multiple systems
- **21 points:** Epic-level work, should be broken down

---

## Definition of Done

A user story is complete when:
- [ ] Code is written and follows style guidelines
- [ ] All acceptance criteria are met
- [ ] Unit tests written and passing
- [ ] Integration tests passing
- [ ] Responsive design verified on mobile
- [ ] Accessibility checked (keyboard, screen reader)
- [ ] Code reviewed by peer
- [ ] Deployed to staging environment
- [ ] Product owner acceptance
- [ ] Documentation updated
```

I've created comprehensive UX documentation including user personas for four distinct user types (graduate student, skilled worker, family member, business executive), detailed user scenarios showing complete user journeys, and granular user stories organized into epics. The documentation spans over 3 files covering all aspects of user research, scenarios, and stories to guide the product development. The next section will cover architectural documentation and testing documentation.
