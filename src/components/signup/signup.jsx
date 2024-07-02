import { useState } from "react";
import "./signup.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SignUp = ({ setMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    const data = {
      Email: email,
      Username: username,
      Password: password,
    };

    fetch("https://mymovies-api-d8738180d851.herokuapp.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          setMessage("Successfully signed up!");
          window.location.reload();
        } else {
          return response.json().then((data) => {
            const errors = data.errors;
            let errorMessage = "Signup failed: ";

            if (Array.isArray(errors)) {
              errors.forEach((e) => {
                errorMessage += `${e.msg}`;
              });
            } else {
              errorMessage += data.message || "An unknown error occurred.";
            }

            setMessage(errorMessage);
          });
        }
      })
      .catch((err) => {
        setMessage(`Error: ${err.message || err}`);
      });
  };

  return (
    <Form onSubmit={handleSignup}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username:</Form.Label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          placeholder="example@example.com"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          minLength={12}
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
