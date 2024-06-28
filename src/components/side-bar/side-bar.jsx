import  {useState} from "react";
import "./side-bar.scss"

export const SideBar = ({handleLogout}) => {
    return (
        <div className = "sidebar-container">
            <div className="sidbar-header">
            </div>
            <div className="sidebar-filter-container">
                <h2>Filters</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}