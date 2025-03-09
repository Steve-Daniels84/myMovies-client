async function AddFavouriteMovie(movie) {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  try {
    await fetch(
      `http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/users/${userId}/${movie}`,
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
      `http://3-tier-web-app-alb-1684509236.us-east-1.elb.amazonaws.com/users/${userId}/${movie}`,
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
