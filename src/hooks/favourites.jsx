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
        console.log(data);
        
        const favourites = await data[0].FavouriteMovies;


        return favourites

    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function AddFavouriteMovie(movie) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  try {
    await fetch(
      `https://mymovies-api-d8738180d851.herokuapp.com/users/${userId}/${movie}`,
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

async function DeleteFavouriteMovie(movie) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  try {
    await fetch(
      `https://mymovies-api-d8738180d851.herokuapp.com/users/${userId}/${movie}`,
      {
        method: "DELETE",
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

module.exports = {
  AddFavouriteMovie, GetUserFavourites, DeleteFavouriteMovie
};
