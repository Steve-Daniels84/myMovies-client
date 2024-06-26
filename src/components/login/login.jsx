import { useState, useEffect } from "react";
import "./login.scss";
import { LoginMessage } from "../login-message/login-message";

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
          onLoggedIn(username, data.token);
        } else {
          setMessage(data.message)
        }
      })
      
  };

  return (
    <div>
        <LoginMessage />

    <form className="login-form-container" onSubmit={handleSubmit}>
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};
