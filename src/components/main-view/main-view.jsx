import { useState, useEffect } from "react";
import { HeaderBar } from "../header-bar/header-bar";
import { SideBar } from "../side-bar/side-bar";
import { MovieCard } from "../movie-card/movie-card";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import { SignupLogin } from "../signup-login/signup-login";
import spinner from "../../../public/img/spinner.gif"

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

useEffect(() => {
  if (user) {
    fetch("https://mymovies-api-d8738180d851.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        const movies = data.map((movie) => {
          return {
            Id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            ReleaseYear: movie.ReleaseYear,
            Description: movie.Description,
            Plot: movie.Plot,
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              HeadShots: movie.Director.HeadShots
            }
          }
        })
        setMovies(movies);
      })
  }
}, [user]);

if (!user) {
  return <SignupLogin setUser={setUser}/>;
}

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  if (movies.length === 0) {
    return <div className="loading-spinner-container"><img className="loading-spinner" src={spinner} alt="loading spinner"/></div>;
  }
  return (
    <div className="main-view">
      <HeaderBar />
      <div className="main-content">
        <div>
          <SideBar setUser={setUser}/>
        </div>
        <div className="movie-card-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.Id}
              movie={movie}
              onMovieClick={() => handleOpenModal(movie)}
            />
          ))}
        </div>
      </div>
      <MovieViewModal
        show={showModal}
        movie={selectedMovie}
        onClose={handleCloseModal}
      />
    </div>
  );
};
