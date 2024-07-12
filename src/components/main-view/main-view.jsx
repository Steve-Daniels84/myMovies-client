import { useState, useEffect } from "react";
import { HeaderBar } from "../header-bar/header-bar";
import { SideBar } from "../side-bar/side-bar";
import { MovieCard } from "../movie-card/movie-card";
import { SignupLogin } from "../signup-login/signup-login";
import spinner from "../../../public/img/spinner.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const storedUser = localStorage.getItem(user);
  const storedToken = localStorage.getItem(token);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (user) {
      fetch("https://mymovies-api-d8738180d851.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
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
                Description: movie.Genre.Description,
              },
              Director: {
                Name: movie.Director.Name,
                Bio: movie.Director.Bio,
                Birth: movie.Director.Birth,
                HeadShots: movie.Director.HeadShots,
              },
            };
          });
          setMovies(movies);
        });
    }
  }, [user]);

  const handleOpenModal = (movie) => {
    console.log("Clicked");
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    setToken(null);
    localStorage.clear();
  };

  //   return (
  //     <Row>
  //       {!user ? (
  //         <>
  //         <SignupLogin
  //           setUser={setUser}
  //           setToken={setToken}
  //           />;
  //         </>
  //       ) : movies.length === 0 ? (
  //         <div className="loading-spinner-container"><img className="loading-spinner" src={spinner} alt="loading spinner"/></div>
  //       ) : (
  //         <>
  //             <HeaderBar />
  //       <Row >
  //         <Col>
  //         <Row style={{height:"100vh"}}>
  //             {movies.map((movie) => (
  //               <MovieCard
  //                 key={movie.Id}
  //                 movie={movie}
  //                 onMovieClick={() => handleOpenModal(movie)}
  //               />
  //             ))}
  //             </Row>
  //         </Col>
  //     </Row>
  //     {showModal && (
  //             <MovieViewModal
  //         show={showModal}
  //         movie={selectedMovie}
  //         onClose={handleCloseModal}
  //         token={token}
  //       />
  //     )}
  //         </>
  //       )}
  // </Row>
  //   );

  return (
    <BrowserRouter>
      <Row>
        <Routes>
          <Route
            //path affected
            path="/signup"
            element={
              <>
                {user ? ( //condition
                  <Navigate to="/movies" /> // render if true
                ) : (
                  <SignupLogin
                    setUser={setUser}
                    setToken={setToken}
                    Signup={true}
                  /> //render if false
                )}
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/movies" />
                ) : (
                  <SignupLogin
                    setUser={setUser}
                    setToken={setToken}
                    Signup={false}
                  />
                )}
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                {!user ? (
                  <SignupLogin
                    setUser={setUser}
                    setToken={setToken}
                    Signup={false}
                  />
                ) : movies.length === 0 ? (
                  <div className="loading-spinner-container">
                    <img
                      className="loading-spinner"
                      src={spinner}
                      alt="loading spinner"
                    />
                  </div>
                ) : (
                  <>
                    <HeaderBar />
                    <Row>
                      <Col>
                        <Row style={{ height: "100vh" }}>
                          {movies.map((movie) => (
                            <MovieCard
                              key={movie.Id}
                              movie={movie}
                              onMovieClick={() => handleOpenModal(movie)}
                            />
                          ))}
                        </Row>
                      </Col>
                    </Row>
                    {showModal && (
                      <MovieViewModal
                        show={showModal}
                        movie={selectedMovie}
                        onClose={handleCloseModal}
                        token={token}
                      />
                    )}
                  </>
                ) }
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {!user ? (
                  <SignupLogin
                    setUser={setUser}
                    setToken={setToken}
                    Signup={false}
                  />
                ) : movies.length === 0 ? (
                  <div className="loading-spinner-container">
                    <img
                      className="loading-spinner"
                      src={spinner}
                      alt="loading spinner"
                    />
                  </div>
                ) : (
                  <>
                    <HeaderBar />
                    <Row>
                      <Col>
                        <Row style={{ height: "100vh" }}>
                          {movies.map((movie) => (
                            <MovieCard
                              key={movie.Id}
                              movie={movie}
                              onMovieClick={() => handleOpenModal(movie)}
                            />
                          ))}
                        </Row>
                      </Col>
                    </Row>
                    {showModal && (
                      <MovieViewModal
                        show={showModal}
                        movie={selectedMovie}
                        onClose={handleCloseModal}
                        token={token}
                      />
                    )}
                  </>
                ) }
              </>
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
};
