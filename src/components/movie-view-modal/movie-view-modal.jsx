import './movie-view.scss';
import {DirectorCard} from "../director-card/director-card"

export const MovieViewModal = ( {show, movie, onClose} ) => {

    if(!show) {
        return null
    }

   return (
     <div className="movie-view-modal-backdrop" onClick={onClose}>
        <div className="movie-view-modal">
            <div className="movie-view-modal-header">
                <div>
            <h1>{movie.Title}</h1> 
            <h3 id="year" >{movie.ReleaseYear}</h3>
                </div>
                <button className="button-generic" onClick={onClose}>Close</button>
            </div>
            <div className="movie-view-modal-movie">
                <div className="modal-poster-container">
                    <img className="modal-poster-image" src={movie.ImagePath} alt="" />
                </div>
                <div className="modal-plot">
                    <h3>Genre</h3>
                    <p>{movie.Genre.Name}</p>
                    <h3>Plot</h3>
                    <p>{movie.Plot}</p>
                </div>
            </div>
            <div className="movie-view-modal-director">
                <div className="modal-headshot-container">
                    <img className="modal-headshot-image" src={movie.Director.HeadShots[0]} alt="" />
                </div>
                <div className="modal-plot">
                    <h3>Bio</h3>
                    <p>{movie.Director.Bio}</p>
                    <p>Born: {movie.Director.Birth}</p>

                </div>
            </div>

            <div className="movie-view-modal-footer">
                <span><button className="button-generic">Add to favourites</button></span>
                <span><button className="button-generic">Thumbs up</button></span>
                <span><button className="button-generic">Thumbs down</button></span>
            </div>
        </div>
    </div>
   )
}