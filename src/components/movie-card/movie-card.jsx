import React from "react";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";
import "./movie-card.scss";
import PropTypes from "prop-types";
import { Button, Card, Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";


export const MovieCard = ({ movie, onMovieClick }) => {
  return (

    <Col md={4} sm={4} xs={6} style={{height:"20rem", width:"20rem"}}>
      
      <Card className="movie-card" onClick={() => onMovieClick(movie)} style={{height: "100%", margin: "2rem"}} >
      <Container style={{height: "75%", textAlign:"center"}} >
        <Card.Img variant="top" src={movie.ImagePath} style={{width:"100%", height:"100%", scale:"0.8"}} fluid/>
        </Container>
        <Card.Body style={{height: "25%"}}>
          <Card.Title style={{fontSize: "14px"}}>{movie.Title}</Card.Title>
          <card-text style={{fontSize: "12px"}}>{movie.Genre.Name}</card-text>
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
