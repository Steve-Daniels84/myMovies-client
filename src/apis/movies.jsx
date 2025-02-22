export const GetMovie = async (movieId) => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    
    try {
      const response = await fetch(
        `http://18.130.251.219/movies/id/${movieId}`,
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

    const data = await response.json();

      return data[0]
      
    } catch (error) {
      console.error("Add favourite error:", error);
      throw error;
    }
  };