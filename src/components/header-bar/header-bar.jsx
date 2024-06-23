import logo from "../../../public/img/logo.svg"
import "./header-bar.scss"

export const HeaderBar = () => {
    return (<div className="header-bar">
        <div className="logo-container">
            <img className="logo" src={logo} alt="Logo"/>
            <h1>myMovies</h1>
        </div>
       
        <div className="header-search-container">
            <input type="text" name="search-input" id="search-input" placeholder="Search for a movie..." />
            <button className="button-generic">Search</button>
        </div>
    </div>
)}