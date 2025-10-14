# CPTAssesmentTask
# Project Definition and Requirements

## Project Definition

This project aims to develop a web-based application that allows users to browse restaurants, view their availability, and make reservations. It will provide a simplified interface for restaurant owners to manage their reservations and availability. The focus is on demonstrating core web development concepts (front-end, back-end, database interaction) within a practical application context.

## Requirements 

### Functional Requirements

1. **User Management**
- FR1.1 User Registration: Users must be able to create an account with a unique username/email and password.

- FR1.2 User Login: Registered users must be able to log in to their accounts.

- FR1.3 User Logout: Users must be able to log out of their accounts.

- FR1.4 User Profile: Users must be able to view their profile information.

- FR1.5 Password Hashing: User passwords must be stored securely using a hashing algorithm.

2. **Restaurant Browsing & Details**

- FR2.1 Browse Restaurants: Users must be able to view a list of available restaurants.

- FR2.2 View Restaurant Details: Users must be able to click on a restaurant to view its details.

- FR2.3 Search/Filter Restaurants: Users should ideally be able to search for restaurants by name or filter by basic criteria.

3. **Reservation Management (Customer Side)**

- FR3.1 Check Availability: Users must be able to select a date, time, and number of guests to check a restaurant's availability.

- FR3.2 Make Reservation: Users must be able to submit a reservation request for an available slot.

- FR3.3 View My Reservations: Users must be able to view a list of their upcoming and past reservations.

- FR3.4 Cancel Reservation: Users must be able to cancel their own upcoming reservations.

4. **Restaurant Administration (Resteraunt/Admin Side)**

- FR4.1 Restaurant Login: Restaurant staff must be able to log in to their specific restaurant's management interface.

- FR4.2 View Incoming Reservations: Restaurant staff must be able to view a list of all pending and confirmed reservations for their restaurant.

- FR4.3 Accept/Decline Reservation: Restaurant staff must be able to accept or decline pending reservation requests.

- FR4.4 Manage Availability: Restaurant staff must be able to set basic availability.

- FR4.5 Basic Menu/Info Management: Restaurant staff must be able to edit their restaurant's description or contact info.

## Non-Functional Requirements

1. **Performance**

- NFR1.1 Response Time: The application should load pages and process reservation requests within a reasonable time.

- NFR1.2 Concurrent Users: The system should be able to handle a small number of concurrent users without significant degradation in performance.

2. **Usability**

- NFR2.1 Intuitive Interface: The user interface for both customers and restaurants should be easy to navigate and understand.

- NFR2.2 Clear Feedback: The system should provide clear feedback to the user on the success or failure of actions.

- NFR2.3 Mobile Responsiveness: The customer-facing interface should be usable on various screen sizes.

3. **Reliability**

- NFR3.1 Error Handling: The system should gracefully handle common errors and display user-friendly error messages.

- NFR3.2 Data Integrity: Reservations should not be double-booked for the same slot. Data stored in the database should be consistent.

4. **Maintainability**

- NFR4.1 Code Structure: The codebase should be well-organized with clear separation of concerns.

- NFR4.2 Code Comments: Important sections of code, complex logic, and functions should be adequately commented.

- NFR4.3 Readability: The code should be easy for client to read and understand.

5. **Security**

- NFR5.1 Basic Authentication: User login credentials should be validated against stored hashed passwords.

- NFR5.2 Authorization: Users should only be able to access data and perform actions relevant to their role.

- NFR5.3 No Sensitive Data: The application will not handle real financial transactions or highly sensitive personal data.

*Written by Magnus Eadie, formatted by Gemini 2.5 Flash.*

# UI Wireframing & Design

## First Wireframe

### Homepage Wireframe
![Homepage](<Screen Shot 2025-08-12 at 10.03.43.png>)

### Browse Resteraunts Wireframe
![Browse Resteraunt Page](<Screen Shot 2025-08-12 at 10.03.51.png>)

### Manage Bookings Wireframe
![Manage Bookings Page](<Screen Shot 2025-08-12 at 10.04.03.png>)

### Colour Pallete 
![Colour Pallete 1](<Screen Shot 2025-08-12 at 10.16.17.png>)

### Typography 
In my original TableFinder wireframe I used a conservative 14px base font size which prioritizes functional clarity to help users to easily scan restaurant information, booking details, and navigation elements across the darker color scheme.

## Alternate Wireframe

### Homepage
![Homepage](<Screen Shot 2025-08-12 at 10.02.56.png>)

### Browse Resteraunts
![Browse Resteraunts](<Screen Shot 2025-08-12 at 10.03.03.png>)

### Manage Bookings
![Manage Bookings](<Screen Shot 2025-08-12 at 10.03.15.png>)

### Colour Pallete
![Colour Pallete 2](<Screen Shot 2025-08-12 at 10.13.53.png>)

### Typography
In my second TableFinder wireframe I went for a more experimental/alternate design which used bold typographic styles to match vibrant coral/teal colour pallete. I also combined font-black headings, with italics and oversized text to create personality. 

# Algorithm & Test Cases

## Login Algorithm
![Login Algorithm](<Screen Shot 2025-08-13 at 13.44.30.png>)

## Test Cases

### Test Case 1

**Test Case ID:** TC001
**Test Case Name:** Successful Login Test Case
**Preconditions:** User must have a registered account.
**Test Steps:**
1. Open the login page.
2. Click "login" icon.
3. Enter user credentials.
4. Click "login" button.
**Expected Result:** The user is directed to the homepage, logged in.
**Actual Result:** To be filled after execution.
**Pass/Fail:** To be filled after execution.
**Priority:** High

### Test Case 2

**Test Case ID:** TC002
**Test Case Name:** Unsuccessful Login Test Case (No Password Reset)
**Preconditions:** User must input a invalid account details.
**Test Steps:**
1. Open the login page.
2. Click "login" icon.
3. Enter user credentials.
4. Click "login" button
5. Click "no" in response to reset password option.
**Expected Result:** The user is re-directed  to the homepage.
**Actual Result:** To be filled after execution.
**Pass/Fail:** To be filled after execution.
**Priority:** High

# Logbook Notes

## Week 5 
- Set up the project folder structure and installed Flask and required dependencies.  
- Created the SQLite database and defined tables for customers, restaurants, and categories.  
- Added initial entries to the database and tested queries using SQLite editor.  

## Week 6 
- Connected Flask backend to the database and retrieved data for testing.  
- Implemented basic Jinja2 template layout and included navigation menu.  
- Designed and optimized logo and favicon images for the site.  

## Week 7 
- Styled main page and navigation using CSS and Google Fonts.  
- Created card layouts for restaurant listings and tested grid display.  
- Worked on linking pages together: home, browse, booking, and login.  

## Week 8
- Added additional CSS styling and responsive layout improvements.  
- Started adding restaurant category filters on the browse page.  

## Week 9
- Began adding interactivity using JavaScript for booking form validation.  
- Connected booking form inputs to backend to store reservations in database.  
- Tested form submissions and updated confirmation messages for users.  

## Week 10 
- Worked on login page functionality and authentication logic.  
- Integrated user login with customer data to display personalized bookings.  
- Implemented error handling and improved user feedback on failed actions.