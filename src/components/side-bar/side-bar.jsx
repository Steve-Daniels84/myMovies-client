import  {useState} from "react";
import Col from "react-bootstrap/Col";
import "./side-bar.scss";

export const SideBar = ({handleLogout}, {user}) => {

console.log(user)

    return (
        <Col className = "sidebar-container">
            <div className="sidbar-header">
            </div>
            <div className="sidebar-filter-container">
                <button onClick={handleLogout}>Logout</button>
            </div>
        </Col>
    )
}