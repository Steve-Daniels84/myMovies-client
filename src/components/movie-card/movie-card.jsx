import React from "react";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import "./movie-card.scss";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      className="movie-card"
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      <Card onClick={() => onMovieClick(movie)}>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <card-text>{movie.Genre.Name}</card-text>
          <Card.Text>{movie.Director.Name}</Card.Text>
        </Card.Body>
      </Card>
    </div>
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
