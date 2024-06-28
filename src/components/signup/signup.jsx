import { useState } from "react";
import "./signup.scss";

export const SignUp = () => {
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
    }).then((response) => {
      if (response.ok) {
            window.location.reload();
      } else {
        console.log(response.payload)
        alert("Signup failed" + response);
      }
    });
  };


return (
  <form className="login-form-container" onSubmit={handleSignup}>
    <label>Username:</label>
    <input
      type="text"
      value={username}
      onChange={(e) => {
        setUsername(e.target.value);
      }}
      required
    />
    <label></label>

    <label>Email:</label>
    <input
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      required
    />
    <label>Password:</label>
    <input
      type="text"
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      required
    />
    <button type="submit">Submit</button>
  </form>
);
}