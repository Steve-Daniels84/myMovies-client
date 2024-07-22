import { useState, useEffect } from "react";




async function AddFavouriteMovie (movie, token) {
    const userId = localStorage.getItem('userId');
    try{
        await fetch("https://mymovies-api-d8738180d851.herokuapp.com/users/" + userId + "/" + movie.Id, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )   
    } catch (error) {
        (error) =>{
            console.log(error)
        }
    }

    }

module.exports = {
    AddFavouriteMovie
}