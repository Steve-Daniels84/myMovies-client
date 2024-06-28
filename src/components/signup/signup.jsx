import "./signup.scss";

export const SignUp = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

return (
    
    <form className="login-form-container">
    <label >
        Email:
    </label>
    <input 
        type="email" 
        required
        />
    <label>
        Password:
    </label>
    <input 
        type="text"
        required 
        />
    <button type="submit">
        Submit
    </button>
</form>
)
    
}
