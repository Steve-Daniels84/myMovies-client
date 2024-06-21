import { useState } from "react";
import { HeaderBar } from "../header-bar/header-bar";
import { SideBar } from "../side-bar/side-bar";
import { MovieCard } from "../movie-card/movie-card";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: "666f359593c7c89956dc00ed",
      Title: "The Dark Knight",
      Description:
        "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
      Genre: {
        Name: "Action",
        Description:
          "Action films are characterized by a lot of excitement, including high-energy scenes, chases, and combat sequences.",
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter known for his complex narratives and innovative visuals.",
        Birth: "1970",
      },
      ImagePath:
        "https://xl.movieposterdb.com/08_05/2008/468569/xl_468569_f0e2cd63.jpg?v=2024-06-14%2013:00:59",
      Featured: true,
    },
    {
      id: "666f359f93c7c89956dc00ee",
      Title: "The Godfather",
      Description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      Genre: {
        Name: "Crime",
        Description:
          "Crime films focus on the criminal underworld, often involving law enforcement and criminal activities.",
      },
      Director: {
        Name: "Francis Ford Coppola",
        Bio: "Francis Ford Coppola is an American film director, producer, and screenwriter known for his work on classic films like The Godfather.",
        Birth: "1939",
      },
      ImagePath:
        "https://xl.movieposterdb.com/22_07/1972/68646/xl_68646_8c811dec.jpg?v=2024-06-03%2013:09:13",
      Featured: true,
    },
    {
      id: "666f35a493c7c89956dc00ef",
      Title: "Pulp Fiction",
      Description:
        "The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      Genre: {
        Name: "Crime",
        Description:
          "Crime films focus on the criminal underworld, often involving law enforcement and criminal activities.",
      },
      Director: {
        Name: "Quentin Tarantino",
        Bio: "Quentin Tarantino is an American filmmaker known for his unique style and eclectic use of violence and dark humor.",
        Birth: "1963",
      },
      ImagePath:
        "https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-06-20%2005:24:20",
      Featured: true,
    },
    {
      id: "666f35ab93c7c89956dc00f0",
      Title: "Forrest Gump",
      Description:
        "A man with a low IQ has accomplished great things in his life and been present during significant historical events in the 20th century United States.",
      Genre: {
        Name: "Drama",
        Description:
          "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives.",
      },
      Director: {
        Name: "Robert Zemeckis",
        Bio: "Robert Zemeckis is an American filmmaker known for his work on innovative and acclaimed films, including Back to the Future series.",
        Birth: "1952",
      },
      ImagePath:
        "https://xl.movieposterdb.com/12_04/1994/109830/xl_109830_58524cd6.jpg?v=2024-05-16%2006:45:49",
      Featured: true,
    },
    {
      id: "666f35cc93c7c89956dc00f1",
      Title: "The Shawshank Redemption",
      Description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      Genre: {
        Name: "Drama",
        Description:
          "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives.",
      },
      Director: {
        Name: "Frank Darabont",
        Bio: "Frank Darabont is an American filmmaker and screenwriter known for his work on horror and drama films.",
        Birth: "1959",
      },
      ImagePath:
        "https://xl.movieposterdb.com/05_03/1994/0111161/xl_8494_0111161_3bb8e662.jpg?v=2024-05-30%2020:55:56",
      Featured: true,
    },
    {
      id: "666f35d393c7c89956dc00f2",
      Title: "Inception",
      Description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      Genre: {
        Name: "Science Fiction",
        Description:
          "Science fiction is a genre that explores futuristic concepts, often involving advanced science and technology.",
      },
      Director: {
        Name: "Christopher Nolan",
        Bio: "Christopher Nolan is a British-American film director, producer, and screenwriter known for his complex narratives and innovative visuals.",
        Birth: "1970",
      },
      ImagePath:
        "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg?v=2024-06-14%2019:23:46",
      Featured: true,
    },
    {
      id: "666f35d693c7c89956dc00f3",
      Title: "The Lion King",
      Description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      Genre: {
        Name: "Animation",
        Description:
          "Animation film is a genre in which the images are primarily created through animation techniques.",
      },
      Director: {
        Name: "Roger Allers and Rob Minkoff",
        Bio: "Roger Allers is an American film director, screenwriter, and animator. Rob Minkoff is an American filmmaker.",
        Birth: "1949 (Allers), 1962 (Minkoff)",
      },
      ImagePath:
        "https://xl.movieposterdb.com/22_11/1994/323073/xl_the-lion-king-movie-poster_07016269.jpg?v=2024-05-23%2005:28:23",
      Featured: true,
    },
    {
      id: "666f35fb93c7c89956dc00f4",
      Title: "Fight Club",
      Description:
        "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
      Genre: {
        Name: "Drama",
        Description:
          "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives.",
      },
      Director: {
        Name: "David Fincher",
        Bio: "David Fincher is an American film director, known for his meticulous and darkly stylized films, including Se7en and Gone Girl.",
        Birth: "1962",
      },
      ImagePath:
        "https://xl.movieposterdb.com/05_02/1999/0137523/xl_7868_0137523_d46e33b9.jpg?v=2024-06-10%2019:55:53",
      Featured: true,
    },
    {
      id: "666f360193c7c89956dc00f5",
      Title: "The Matrix",
      Description:
        "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      Genre: {
        Name: "Science Fiction",
        Description:
          "Science fiction is a genre that explores futuristic concepts, often involving advanced science and technology.",
      },
      Director: {
        Name: "Lana and Lilly Wachowski",
        Bio: "Lana and Lilly Wachowski are American filmmakers known for their groundbreaking work in science fiction and fantasy films.",
        Birth: "1965 (Lana), 1967 (Lilly)",
      },
      ImagePath:
        "https://xl.movieposterdb.com/05_05/1999/0133093/xl_18427_0133093_b67474af.jpg",
      Featured: true,
    },
    {
      id: "666f360593c7c89956dc00f6",
      Title: "Gladiator",
      Description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      Genre: {
        Name: "Action",
        Description:
          "Action films are characterized by a lot of excitement, including high-energy scenes, chases, and combat sequences.",
      },
      Director: {
        Name: "Ridley Scott",
        Bio: "Ridley Scott is a British filmmaker known for his work on iconic films such as Alien and Blade Runner.",
        Birth: "1937",
      },
      ImagePath:
        "https://xl.movieposterdb.com/08_12/2000/172495/xl_172495_93f99923.jpg?v=2024-05-16%2006:53:31",
      Featured: true,
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  if (movies.length === 0) {
    return <div>No movies found!</div>;
  }
  console.log(showModal);
  return (
    <div className="main-view">
      <HeaderBar />
      <div className="main-content">
        <div>
          <SideBar />
        </div>
        <div className="movie-card-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieClick={() => handleOpenModal(movie)}
            />
          ))}
        </div>
      </div>
      <MovieViewModal
        show={showModal}
        movie={selectedMovie}
        onClose={handleCloseModal}
      />
    </div>
  );
};
