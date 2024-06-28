import "./login.scss";

export const Login = () => {

return (
    
    <form className="login-form-container">
    <label >
        Username:

    </label>
    <input 
        type="text" 
        required
        />
    <br />
    <label>
        Password:
        
    </label>
    <input 
        type="text"
        required 
        />
    <br />
    <button type="submit">
        Submit
    </button>
</form>
)
    
}
