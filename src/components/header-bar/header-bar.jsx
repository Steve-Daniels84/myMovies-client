import logo from "../../../public/img/logo.svg"
export const HeaderBar = () => {
    return (<div className="header-bar">
        <img src={logo} alt="Logo" height="60px"/>
        <h1>MyMovies</h1>
        <div className="header-search-container">
            <input type="text" name="search-input" id="search-input" placeholder="Search for a movie..." />
            <button className="button-search">Search</button>
        </div>
    </div>
)}