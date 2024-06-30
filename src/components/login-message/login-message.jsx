import {useState} from "react";
import "./login-message.scss";

export const LoginMessage = ({message}) => {

    if (!message) {
        return null;
    }

    return <div className="login-message">{message}</div>
    
} 