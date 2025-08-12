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
In my second TableFinder wireframe I went for a more experimental/alternate design which used bold typographic styles to match vibrant coral/teal colour pallete. I used font-black headings mixed with italics and oversized text to create personality. 

