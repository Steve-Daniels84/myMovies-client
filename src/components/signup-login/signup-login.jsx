import { useState, useEffect } from "react";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";
import "./signup-login.scss";
import LoginImage from "../../../public/img/loginImage.png"

export const SignupLogin = ({setUser}) => {

    const [signup, setSignup] = useState(false);
    const [login, setLogin] = useState(true);

    if (signup === true && login === false) {

    return (
        <div className="signup-login-container">
            <div className="login-image-container">
                <img src={LoginImage} alt="" />
            </div>
            <div className="form-container">
                <div> 
                    <button onClick={(e) => {setSignup(true); setLogin(false)}}>Login</button>

                </div>
                <SignUp />
            </div>
        </div>
        )
    }

    if (login === true && signup === false) {
        return (
            <div className="signup-login-container">
                <div className="login-image-container">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="form-container">
                    <div> 

                    <button onClick={(e) => {setSignup(false); setLogin(true)}}>SignUp</button>
                    </div>
                    <Login onLoggedIn={(user) => setUser(user)}/>
                </div>
            </div>
            )
    }
}