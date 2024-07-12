import { useState, useEffect } from "react";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";
import { LoginMessage } from "../login-message/login-message";
import "./signup-login.scss";
import LoginImage from "../../../public/img/loginImage.png"
export const SignupLogin = ({setUser, setToken, Signup}) => {

    const [isSignup, setIsSignup] = useState(Signup);
    const [message, setMessage] = useState("");


    return (
        isSignup ? (
            <div className="signup-login-container">
                <div className="login-image-container">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="form-container">
                    <div>
                        <button onClick={() => { setIsSignup(!isSignup) }}>Login</button>
                        <div className="login-message-container">
                            <LoginMessage message={message} />
                        </div>
                    </div>
                    <SignUp 
                        setMessage={setMessage}
                    />
                </div>
            </div>
        ) : (
            <div className="signup-login-container">
                <div className="login-image-container">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="form-container">
                    <div>
                        <button onClick={() => { setIsSignup(!isSignup) }}>SignUp</button>
                        <div className="login-message-container">
                            <LoginMessage message={message} />
                        </div>
                    </div>
                    <Login 
                        onLoggedIn={(user, token) => {setUser(user); setToken(token);}}
                        setMessage={setMessage}
                    />
                </div>
            </div>
        )
    );
}    

