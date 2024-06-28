import { useState, useEffect } from "react";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";
import "./signup-login.scss";
import LoginImage from "../../../public/img/loginImage.png"

export const SignupLogin = ({setUser}) => {

    const [isSignup, setIsSignup] = useState(false);



    return (
        isSignup ? (
            <div className="signup-login-container">
                <div className="login-image-container">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="form-container">
                    <div>
                        <button onClick={() => { setIsSignup(!isSignup) }}>Login</button>
                    </div>
                    <SignUp />
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
                    </div>
                    <Login onLoggedIn={(user) => setUser(user)} />
                </div>
            </div>
        )
    );
}    

