export const HeaderBar = () => {
    return (<div className="header-bar">
        <h1>MyMovies</h1>
        <div className="header-search-container">
            <label for="search-input">Search:</label>
            <input type="text" name="search-input" id="search-input" placeholder="Search" />
        </div>
    </div>
)}