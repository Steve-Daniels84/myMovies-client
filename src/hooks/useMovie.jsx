
import { useState, useEffect, useCallback } from "react";
import { GetMovie } from "../apis/movies";

export const useMovie = (movieId) => {
  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovie = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const movieData = await GetMovie(movieId);
      setMovie(movieData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    if (movieId) {
      fetchMovie();
    }
  }, [movieId, fetchMovie]);

  return { movie, loading, error };
};
