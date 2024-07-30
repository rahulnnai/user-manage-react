import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hook to programmatically navigate between pages
  const navigate = useNavigate();

  // Function to handle the registration process
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (username && password) {
      // Store user information in local storage
      localStorage.setItem("user", JSON.stringify({ username, password }));
      navigate("/login"); // Navigate to the login page after registration
    } else {
      setError("Please fill in all fields");
    }
  };

  // Render the registration form
  return (
    <div className="container mt-5">
      <h2>Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleRegister}>
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
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
