export const GetMovie = async (movieId) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch(
        `https://mymovies-api-d8738180d851.herokuapp.com/movies/id/${movieId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }


      return await response.json();
    } catch (error) {
      console.error("Add favourite error:", error);
      throw error;
    }
  };