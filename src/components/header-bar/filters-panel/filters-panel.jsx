import "./filters-panel.scss";

export const FiltersPanel = ({ movies, setMovies, originalMovies }) => {
    const handleSelect = (event) => {
        const selectedGenre = event.target.innerText;
    
        if (selectedGenre === "All") {
            setMovies(originalMovies); // Reset to the original list
        } else {
            setMovies(originalMovies.filter(movie => movie.Genre.Name === selectedGenre));
        }
    }

    return (
        <div>
            <span className="reset">Filters:</span>
            <span onClick={handleSelect}>All</span>
            <span onClick={handleSelect}>Action</span>
            <span onClick={handleSelect}>Animation</span>
            <span onClick={handleSelect}>Crime</span>
            <span onClick={handleSelect}>Drama</span>
            <span onClick={handleSelect}>Science Fiction</span>
        </div>
    )
}
