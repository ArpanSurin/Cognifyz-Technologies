# Task 4 : Form Styling and Validation 

This project is a part of my internship at **Cognifyz Technloogy.**\
A simple user registration form that validates user inputs such as name, phone number, email, and password using JavaScript.

## 🔍 Project Objective 

Improve usability and data integrity by designing visually appealing forms and implementing client-side validation for user input.

## 🎯 Features

- User-friendly form for collecting user information.
- Client-side form validation using JavaScript.
- Ensures the following:
  - Name field is not empty.
  - Phone number must be exactly 10 digits.
  - Valid email format.
  - Password must be at least 6 characters long.
- Displays error messages if validation fails.
- Displays a success message upon successful validation.

## 🛠️ Technologies Used

- **HTML**: For the structure of the form.
- **CSS**: For styling the form.
- **JavaScript**: For validating the form inputs.

## 📄 Form Fields

- **Name**: A text field to input the user's name (required).
- **Phone Number**: A number field that accepts a 10-digit phone number (required).
- **Email**: An email field that accepts a valid email address (required).
- **Password**: A password field that requires a minimum of 6 characters (required).

## ✅ Validation Logic

1. **Name**: The form will show an error if the name field is empty.
2. **Phone Number**: Only 10 digits are allowed. An error message will be displayed if the input is not exactly 10 digits.
3. **Email**: Must follow a valid email format (e.g., user@example.com). Invalid emails will trigger an error.
4. **Password**: Password should be at least 6 characters long.

## 📦 File Structure

```plaintext
form-validation-project/
|
├── index.html    # HTML structure of the form
├── style.css     # CSS for styling the form
├── script.js     # JavaScript for form validation
└── Readme.md     # Project documentation 
```