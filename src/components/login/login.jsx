import { useState, useEffect } from "react";
import "./login.scss";
import { LoginMessage } from "../login-message/login-message";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = ({ onLoggedIn , setMessage}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
    };

    fetch("https://mymovies-api-d8738180d851.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("user", username);
          localStorage.setItem("token", data.token);
          localStorage.setItem("userId", data.userId)
          onLoggedIn(username, data.token);
        } else {
          setMessage(data.message)
        }
      })
      
  };

  return (
    <div>
        <LoginMessage />

    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formUsername">
      <Form.Label>Username:</Form.Label>

      <Form.Control
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      </Form.Group>
      <Form.Group controlId="formPassword"></Form.Group>
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
      />
      <Button type="submit">Submit</Button>
    </Form>
    </div>
  );
};
