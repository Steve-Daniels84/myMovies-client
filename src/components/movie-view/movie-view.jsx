export const MovieView = ({movie, onBackClick}) => {

    return (
    <div>
        <div className="movie-detail-container">
            <div className="detail-image-container">
                <img src={movie.ImagePath} alt={movie.Title + " poster image."} />
            </div>
        <div>
            <h1>{movie.Title}</h1>


            <div>
                <span><h2>Genre: </h2></span>
                <span>{movie.Genre.Name}</span>

            <br></br>

                <span>Director: </span>
                <span>{movie.Director.Name}</span>

            <br></br>

                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            </div>
            
            <br></br>
           
        </div>
        <div>
            <button className="backButton" onClick={onBackClick}>Go back..</button>
        </div>
    </div>
    )
} 