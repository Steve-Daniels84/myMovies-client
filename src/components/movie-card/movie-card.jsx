import {MovieViewModal} from "../movie-view-modal/movie-view-modal";

export const MovieCard = ({ movie, onMovieClick }) => {
    return (
            <div className="movie-card"
                onClick={() => {
                    onMovieClick(movie)
                }}
                >   <div className="movie-card-header">
                        <div className="movie-card-image-container">
                            <img className="poster-image" src={movie.ImagePath} alt="" />
                        </div>
                        <div className="movie-card-title">
                            <div className="movie-card-title-container">
                            <h3>{movie.Title}</h3>
                        </div>
                            <p>{movie.Genre.Name}</p>
                        </div>
                    </div>
                    <div className="movie-card-description">
                        {movie.Description}
                    </div>
            </div>
    );
}