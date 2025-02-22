async function AddFavouriteMovie(movie) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  try {
    await fetch(
      `http://18.130.251.219/users/${userId}/${movie}`,
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
      `http://18.130.251.219/users/${userId}/${movie}`,
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
