import { useState } from "react";
import "./signup.scss";

export const SignUp = ({setMessage}) => {
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
        setMessage("Successfully signed up!")
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
        placeholder="example@example.com"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        required
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        minLength={12}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};
