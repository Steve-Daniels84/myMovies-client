import React from "react";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import "./movie-card.scss";
import PropTypes from "prop-types";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";


export const MovieCard = ({ movie, onMovieClick }) => {
  return (

    <Col md={4} sm={4} xs={6} >
      
      <Card className="movie-card" onClick={() => onMovieClick(movie)} style={{maxHeight: "100%", margin: "2rem"}} fluid>
      <Container style={{maxHeight: "30rem"}} fluid>
        <Card.Img variant="top" src={movie.ImagePath} />
        </Container>
        <Card.Body>

          <Card.Title>{movie.Title}</Card.Title>
          <card-text style={{overflow: "hide"}}>{movie.Genre.Name}</card-text>
        </Card.Body>
      </Card>
      </Col>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ReleaseYear: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }),
  }),
};
