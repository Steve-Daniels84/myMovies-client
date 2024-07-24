import { useState, useEffect } from "react";

async function AddFavouriteMovie(movie, token) {
  const userId = localStorage.getItem("userId");
  try {
    await fetch(
      "https://mymovies-api-d8738180d851.herokuapp.com/users/" +
        userId +
        "/" +
        movie.Id,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    (error) => {
      console.log(error);
    };
  }
}

async function GetUserFavourites() {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");

    try {
        const response = await fetch("https://mymovies-api-d8738180d851.herokuapp.com/users/" + userId, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        const favourites = await data[0].FavouriteMovies;

        return favourites

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

module.exports = {
  AddFavouriteMovie, GetUserFavourites
};
