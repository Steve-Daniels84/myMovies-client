export const MovieViewModal = ( {show, movie, onClose} ) => {


    if(!show) {
        return null
    }

   return (
     <div className="movie-view-modal-backdrop">
        <div className="movie-view-modal">
            <div className="movie-view-modal-header">
                <h1>{movie.Name}</h1>
                <button className="close-button" onClick={onClose}>X</button>
            </div>
            <div className="movie-view-modal-content">
                {movie.Title}
            </div>
            <div className="movie-view-modal-footer">
                Footer
            </div>
        </div>
    </div>
   )
}