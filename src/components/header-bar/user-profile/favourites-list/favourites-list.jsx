import { useState, useEffect } from "react";
import { useMovie } from "../../../../hooks/useMovie";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";

export const FavouritesList = ({movieId}) => {
    
    const {movie, loading, error} = useMovie(movieId);

    if(loading) {
        console.log("loading");
    }

    if (error) {
        console.log("error")
    }

    if (!movie) {
        console.log("No movie found")
    }
   
 console.log(movie)
 
  return (
    <Row className="d-flex  justify-content-center align-items-center" style={{width: "100%", textAlign: "center"}}>
     <Col> {movie}</Col>
        <Button className="d-flex  justify-content-center align-items-center" variant="primary" style={{width: "10px", height: "20px"}}>-</Button>
    </Row>
  );
};
