import { useState } from "react";
import "./signup.scss";

export const SignUp = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

        const data = {
            Email: email,
            Username: email,
            Password: password
        }
    }

return (
    
    <form className="login-form-container">
    <label >
        Email:
    </label>
    <input 
        type="email"
        value = {email}
        onChange={(e) => {setEmail(e.target.value)}}
        required
        />
    <label>
        Password:
    </label>
    <input 
        type="text"
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        required 
        />
    <button type="submit">
        Submit
    </button>
</form>
)
    
}
