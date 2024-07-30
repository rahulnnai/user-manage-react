import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Login component for user authentication
const Login = () => {
  // State variables to store username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle login form submission
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if entered credentials match stored user data
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/account"); // Redirect to account page if login successful
    } else {
      setError("Invalid username or password"); // Set error message if login fails
    }
  };

  // Render login form
  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
