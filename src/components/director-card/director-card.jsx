import "./director-card.scss"

export const DirectorCard = ({movie}) => {
    return ( 
    <div className="director-card-container">
        <div className="director-card-headshot-container">
            <img className="director-card-image" src={movie.Director.HeadShots[0]} alt=""/>
        </div>
        <div className="director-card-details">
            <h3>Bio</h3>
            <p>{movie.Director.Bio}</p>
            <span>Born: </span>
            <span>{movie.Director.Birth}</span>
        </div>
    </div>
)}