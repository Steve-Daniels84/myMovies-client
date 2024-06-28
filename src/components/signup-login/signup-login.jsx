import { useState, useEffect } from "react";
import { SignUp } from "../signup/signup";
import { Login } from "../login/login";
import "./signup-login.scss";
import LoginImage from "../../../public/img/loginImage.png"

export const SignupLogin = ({setUser}) => {

    const [signup, setSignup] = useState(null);
    const [login, setLogin] = useState(true);

    if (signup) {

    return (
        <div className="signup-login-container">
            <div className="login-image-container">
                <img src={LoginImage} alt="" />
            </div>
            <div className="form-container">
                <div> 
                    <button>Login</button>
                    <button>SignUp</button>
                </div>
                <SignUp />
            </div>
        </div>
        )
    }

    if (login) {
        return (
            <div className="signup-login-container">
                <div className="login-image-container">
                    <img src={LoginImage} alt="" />
                </div>
                <div className="form-container">
                    <div> 
                        <button>Login</button>
                        <button>SignUp</button>
                    </div>
                    <Login onLoggedIn={(user) => setUser(user)}/>
                </div>
            </div>
            )
    }
}