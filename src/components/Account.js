import React, { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Account = () => {
  // State variables to store username, password, and success message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      // If user data exists, update the state
      setUsername(storedUser.username);
      setPassword(storedUser.password);
    }
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    localStorage.setItem("user", JSON.stringify({ username, password }));
    setSuccess("Account updated successfully");
  };

  // Render the component
  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      {success && <Alert variant="success">{success}</Alert>}
      <Form onSubmit={handleUpdate}>
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Account;
