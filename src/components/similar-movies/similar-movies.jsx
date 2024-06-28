import React, { useEffect, useState } from "react";
import './similar-movies.scss';

export const SimilarMovies = ({ genre, token }) => {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    fetch("https://mymovies-api-d8738180d851.herokuapp.com/movies/" + genre, {
      headers: {
        Authorization: `Bearer ${token}`
      }
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
              Description: movie.Genre.Description
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              HeadShots: movie.Director.HeadShots
            }
          };
        });
        setSimilarMovies(movies);
      });
  }, [genre]); // Adding genre as a dependency to useEffect

  if (!similarMovies.length) {
    return <p>No similar movies</p>;
  }

  return (
    <div>
      <h3>Similar Movies</h3>
    <div className="similar-movies-container">
      
      {similarMovies.map((movie) => (
        <div key={movie.Id}>
            <div className="similar-movie-image-container">
                <img className="similar-movie-image" src={movie.ImagePath} alt={movie.Title} />
            </div>
        </div>
      ))}
    </div>
    </div>
  );
};

