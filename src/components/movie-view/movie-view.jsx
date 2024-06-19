export const MovieView = ({movie, onBackClick}) => {

    return (
        <div className="movie-detail-container">
            <div>
                <img src={movie.ImagePath} alt={movie.Title + " poster image."} />
            </div>
            <br></br>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <br></br>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <br></br>
            <button onClick={onBackClick}>Go back..</button>
        </div>
    )
} 