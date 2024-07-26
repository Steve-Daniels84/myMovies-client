import { useMovie } from "../../../../hooks/useMovie";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";

export const FavouritesList = ({ key, index, movieId, onRefresh }) => {
  const { movie, loading, error } = useMovie(movieId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log("error");
    return <div>Error loading movie.</div>;
  }

  if (!movie) {
    console.log("No movie found");
    return <div>No movie found.</div>;
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%"}}
    >
      {movie.Title}
    </Container>
  );
};
