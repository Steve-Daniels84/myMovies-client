import { useState, useEffect } from "react";
import { HeaderBar } from "../header-bar/header-bar";
import { MovieCard } from "../movie-card/movie-card";
import { SignupLogin } from "../signup-login/signup-login";
import spinner from "../../../public/img/spinner.gif";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useRef } from "react";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [s3Contents, setS3Contents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(
      "http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/movies",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
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
        setOriginalMovies(movies);
      });
  }, [token, refresh]);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch(
      "http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/objects"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Contents && data.Contents.length > 1) {
          // Remove the first item and strip "original-images/" from the remaining ones
          const filteredKeys = data.Contents.slice(1).map((object) =>
            object.Key.replace(/^original-images\//, "")
          );

          setS3Contents(filteredKeys);
        }
      })
      .catch((error) => console.error("Error fetching S3 contents:", error));
  }, [token, refresh]);

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Opens file picker
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(file);
    console.log("Selected file:", file.name);

    // Automatically submit after selecting the file
    await handleSubmit(file);
  };

  const handleSubmit = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        "http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/objects",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("File uploaded successfully!");
        setSelectedFile(null);

        setTimeout(() => {
          setRefresh(!refresh);
        }, 2000);
        
      } else {
        alert("Upload failed. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleOpenModal = (movie) => {
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

  return (
    <Col>
      <BrowserRouter>
        <Row>
          <Routes>
            <Route
              path="/signup"
              element={
                <>
                  {user ? (
                    <Navigate to="/movies" replace />
                  ) : (
                    <SignupLogin
                      setUser={setUser}
                      setToken={setToken}
                      Signup={true}
                    />
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
                    <Navigate to="/login" />
                  ) : (
                    <>
                      <HeaderBar
                        onClick={handleLogout}
                        user={user}
                        setUser={setUser}
                        setRefresh={setRefresh}
                        movies={movies}
                        setMovies={setMovies}
                        originalMovies={originalMovies}
                      />
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
                          <Row></Row>
                        </Col>
                      </Row>
                      {showModal && (
                        <MovieViewModal
                          show={showModal}
                          movie={selectedMovie}
                          onClose={handleCloseModal}
                          token={token}
                          user={user}
                          setRefresh={setRefresh}
                        />
                      )}
                    </>
                  )}
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
                      <HeaderBar
                        onClick={handleLogout}
                        user={user}
                        setUser={setUser}
                        setRefresh={setRefresh}
                        movies={movies}
                        setMovies={setMovies}
                        originalMovies={originalMovies}
                      />
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
                            <Card
                              style={{
                                width: "75%",
                                margin: "0 auto",
                                padding: "20px",
                              }}
                            >
                              <Card.Body>
                                <Card.Title>S3 Upload</Card.Title>
                                <Card.Text>
                                  Click the button to upload a file.
                                </Card.Text>

                                <Button onClick={handleButtonClick}>
                                  {selectedFile
                                    ? "Uploading..."
                                    : "Upload File"}
                                </Button>

                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  style={{ display: "none" }}
                                  onChange={handleFileChange}
                                />
                                                                {s3Contents
                                  .filter(
                                    (content) => !content.includes("_resized")
                                  ) // Only process original images
                                  .map((content, index) => {
                                    const resizedImage = s3Contents.find(
                                      (img) =>
                                        img ===
                                        content.replace(".png", "_resized.png")
                                    ); // Find the resized version

                                    return (
                                      <div
                                        key={index}
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "10px",
                                          marginTop: "10px",
                                          marginBottom: "10px",
                                        }}
                                      >
                                        <h3>{content}</h3>
                                        <img
                                          src={`http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/objects/${content}`}
                                          alt="Original"
                                          style={{ width: "200px" }}
                                        />
                                        {resizedImage && ( // Only show resized image if found
                                          <img
                                            src={`http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/objects/${resizedImage}`}
                                            alt="Resized"
                                            style={{ width: "100px" }}
                                          />
                                        )}
                                      </div>
                                    );
                                  })}

                              </Card.Body>

                            </Card>
                          </Row>
                        </Col>
                      </Row>
                      {showModal && (
                        <MovieViewModal
                          show={showModal}
                          movie={selectedMovie}
                          onClose={handleCloseModal}
                          token={token}
                          user={user}
                          setRefresh={setRefresh}
                        />
                      )}
                    </>
                  )}
                </>
              }
            />
          </Routes>
        </Row>
      </BrowserRouter>
    </Col>
  );
};
