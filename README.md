## Components

### App.js
- Main component that sets up routing
- Uses React Router to navigate between different pages
- Routes include: Login, Register, and Account

### Register.js
- Allows new users to create an account
- Captures username and password
- Stores user information in local storage
- Redirects to login page after successful registration

### Login.js
- Handles user authentication
- Checks entered credentials against stored user data
- Redirects to account page upon successful login
- Displays error message for invalid credentials

### Account.js
- Displays and allows updating of user account information
- Retrieves user data from local storage
- Allows users to modify their username and password
- Updates local storage with new account information
