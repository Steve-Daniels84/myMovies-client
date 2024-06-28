import "./side-bar.scss"

export const SideBar = (() => {
    return (
        <div className = "sidebar-container">
            <div className="sidbar-header">
            </div>
            <div className="sidebar-filter-container">
                <h2>Filters</h2>
                <button onClick={() => {setUser("");}}>logout</button>
            </div>
        </div>
    )
})