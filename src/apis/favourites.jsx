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
  AddFavouriteMovie, DeleteFavouriteMovie
};
