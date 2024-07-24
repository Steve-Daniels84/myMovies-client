import "./movie-view.scss";
import PropTypes from "prop-types";
import { SimilarMovies } from "../similar-movies/similar-movies";
import Modal from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { AddFavouriteMovie } from "../../hooks/favourites";
import { useState, useEffect } from "react";
import { GetUserFavourites, AddFavouriteMovie, DeleteFavouriteMovie } from "../../hooks/favourites";
import { GetUser } from "../../hooks/users";

export const MovieViewModal = ({  show, movie, onClose, token, setRefresh,}) => {
  const [favourited, setFavourited] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      const data = JSON.parse(user);
      if (data.FavouriteMovies && data.FavouriteMovies.includes(movie.Id)) {
        setFavourited(true);
      } else {
        setFavourited(false);
      }
    } else {
      console.log('No user found in localStorage');
    }
  }, [movie.Id]);

  const handleFavourites = (event) => {
    if (event.target.id === "add") {
      AddFavouriteMovie(movie.Id);
      GetUser();      
      setRefresh(prev => !prev);
      setFavourited(true);
    } else {
      DeleteFavouriteMovie(movie.Id);
      GetUser();
      setRefresh(prev => !prev);
      setFavourited(false);
    }
  }

 

  if (!show) {
    return null;
  }

  return (
    <div onClick={onClose}>
      {favourited === false ? (
        <>
          <Modal
            contentClassName={favourited}
            show={show}
            size="lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Modal.Header>
              <Col>
                <Modal.Title>{movie.Title}</Modal.Title>
              </Col>

              <CloseButton
                onClick={onClose}
                style={{ cursor: "pointer" }}
              ></CloseButton>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={5}>
                  <Image src={movie.ImagePath} fluid></Image>
                </Col>
                <Col xs={7}>
                  <p>Genre: {movie.Genre.Name}</p>
                  <p>{movie.Plot}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Image src={movie.Director.HeadShots[0]} fluid></Image>
                </Col>
                <Col xs={9}>
                  <p>{movie.Director.Name}</p>
                </Col>
              </Row>
              <Row>
                <SimilarMovies genre={movie.Genre.Name} token={token} />
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <ButtonToolbar>
                <Col>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      variant="primary"
                      onClick={handleFavourites}
                      id={"add"}
                    >
                      +
                    </Button>
                    <Button variant="primary" disabled>
                      -
                    </Button>
                  </ButtonGroup>
                </Col>
              </ButtonToolbar>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Modal
            contentClassName={favourited}
            show={show}
            size="lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Modal.Header>
              <Col>
                <Modal.Title>{movie.Title}</Modal.Title>
              </Col>

              <CloseButton
                onClick={onClose}
                style={{ cursor: "pointer" }}
              ></CloseButton>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col xs={5}>
                  <Image src={movie.ImagePath} fluid></Image>
                </Col>
                <Col xs={7}>
                  <p>Genre: {movie.Genre.Name}</p>
                  <p>{movie.Plot}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <Image src={movie.Director.HeadShots[0]} fluid></Image>
                </Col>
                <Col xs={9}>
                  <p>{movie.Director.Name}</p>
                </Col>
              </Row>
              <Row>
                <SimilarMovies genre={movie.Genre.Name} token={token} />
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Col>One of your favourites!</Col>

              <ButtonToolbar>
                <Col>
                  <ButtonGroup aria-label="Basic example">
                    <Button
                      id={"remove"}                      
                      variant="primary"
                      onClick={(event) => {
                        event.stopPropagation();
                        AddFavouriteMovie(movie, token);
                        setRefresh((prev) => !prev);
                        setFavouriteTag("One of your Favourites!");
                        setFavourited("favourite");
                      }}
                      disabled
                    >
                      +
                    </Button>
                    <Button 
                    variant="primary"
                    onClick={handleFavourites}
                      >-</Button>
                  </ButtonGroup>
                </Col>
              </ButtonToolbar>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
};

MovieViewModal.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birth: PropTypes.string,
      HeadShots: PropTypes.array.isRequired,
    }),
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }),
};
