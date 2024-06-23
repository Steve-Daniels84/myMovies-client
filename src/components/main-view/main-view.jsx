import { useState } from "react";
import { HeaderBar } from "../header-bar/header-bar";
import { SideBar } from "../side-bar/side-bar";
import { MovieCard } from "../movie-card/movie-card";
import { MovieViewModal } from "../movie-view-modal/movie-view-modal";

export const MainView = () => {
  const [movies, setMovies] = useState([
  {
    "id": "666f359593c7c89956dc00ed",
    "Title": "The Dark Knight",
    "Description": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    "Plot": "Batman, Gordon, and Harvey Dent successfully begin to round up the criminals that plague Gotham, until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to confront everything he believes in and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.",
    "Genre": {
      "Name": "Action",
      "Description": "Action films are characterized by a lot of excitement, including high-energy scenes, chases, and combat sequences."
    },
    "Director": {
      "Name": "Christopher Nolan",
      "Bio": "Christopher Nolan is a British-American film director, producer, and screenwriter known for his complex narratives and innovative visuals.",
      "Birth": "1970",
      "HeadShots":["https://www.hollywoodreporter.com/wp-content/uploads/2023/07/GettyImages-1542858165-H-2023.jpg?w=1296&h=730&crop=1&resize=1000%2C563"]
    },
    "ImagePath": "https://xl.movieposterdb.com/08_05/2008/468569/xl_468569_f0e2cd63.jpg?v=2024-06-14%2013:00:59",
    "Featured": true,
    "ReleaseYear": 2008
  },
  {
    "id": "666f359f93c7c89956dc00ee",
    "Title": "The Godfather",
    "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "Plot": "In 1945 New York City, at his daughter Connie's wedding, Vito Corleone hears requests in his role as the godfather, the Don of a crime family. Vito's youngest son, Michael, who was a Marine during World War II, introduces his girlfriend, Kay Adams, to his family at the wedding. Vito is a powerful man, and he is kind to all those who give him respect but ruthless against those who do not. With Michael reluctant to take over, the future of the family becomes uncertain.",
    "Genre": {
      "Name": "Crime",
      "Description": "Crime films focus on the criminal underworld, often involving law enforcement and criminal activities."
    },
    "Director": {
      "Name": "Francis Ford Coppola",
      "Bio": "Francis Ford Coppola is an American film director, producer, and screenwriter known for his work on classic films like The Godfather.",
      "Birth": "1939",
      "HeadShots":["https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQN04piug2dAL5PE3AZW5ALirB1ouF0ZwfcnXimjDCO3k2hZYoIMlS0VMsyGf8f4WvPc8IomGOuojBZiv0"]    },
    "ImagePath": "https://xl.movieposterdb.com/22_07/1972/68646/xl_68646_8c811dec.jpg?v=2024-06-03%2013:09:13",
    "Featured": true,
    "ReleaseYear": 1972
  },
  {
    "id": "666f35a493c7c89956dc00ef",
    "Title": "Pulp Fiction",
    "Description": "The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "Plot": "The lives of two mob hitmen, Vincent Vega and Jules Winnfield, intertwine with those of their boss, Marsellus Wallace, his actress wife, Mia, a struggling boxer named Butch Coolidge, and a pair of petty criminals. The narrative structure is non-linear, with the story unfolding in a series of interrelated and out-of-sequence scenes. Each story builds on the others to create a tapestry of violence, redemption, and dark humor.",
    "Genre": {
      "Name": "Crime",
      "Description": "Crime films focus on the criminal underworld, often involving law enforcement and criminal activities."
    },
    "Director": {
      "Name": "Quentin Tarantino",
      "Bio": "Quentin Tarantino is an American filmmaker known for his unique style and eclectic use of violence and dark humor.",
      "Birth": "1963",
      "HeadShots":["https://hips.hearstapps.com/hmg-prod/images/quentin-tarantino-attends-the-ee-british-academy-film-news-photo-1624744542.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"]    
    },
    "ImagePath": "https://xl.movieposterdb.com/07_10/1994/110912/xl_110912_55345443.jpg?v=2024-06-20%2005:24:20",
    "Featured": true,
    "ReleaseYear": 1994
  },
  {
    "id": "666f35ab93c7c89956dc00f0",
    "Title": "Forrest Gump",
    "Description": "A man with a low IQ has accomplished great things in his life and been present during significant historical events in the 20th century United States.",
    "Plot": "Forrest Gump, a man with a low IQ, recounts his extraordinary life to strangers while waiting at a bus stop. Despite his limited intellectual abilities, Forrest's life is a series of astonishing events: he becomes a college football star, serves with distinction in Vietnam, captains a shrimp boat, and even inspires people to run across the country. Throughout these adventures, Forrest remains devoted to his childhood sweetheart, Jenny, whose life follows a more troubled path.",
    "Genre": {
      "Name": "Drama",
      "Description": "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives."
    },
    "Director": {
      "Name": "Robert Zemeckis",
      "Bio": "Robert Zemeckis is an American filmmaker known for his work on innovative and acclaimed films, including Back to the Future series.",
      "Birth": "1952",
      "HeadShots":["https://resizing.flixster.com/uHVTxKoX4pzTO2Q8uGWgK-z4GU8=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/1983_v9_bc.jpg"]
    },
    "ImagePath": "https://xl.movieposterdb.com/12_04/1994/109830/xl_109830_58524cd6.jpg?v=2024-05-16%2006:45:49",
    "Featured": true,
    "ReleaseYear": 1994
  },
  {
    "id": "666f35cc93c7c89956dc00f1",
    "Title": "The Shawshank Redemption",
    "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "Plot": "Andy Dufresne, a banker wrongly convicted of murdering his wife and her lover, is sentenced to life in Shawshank State Penitentiary. Despite the harsh realities of prison life, Andy befriends fellow inmate Ellis 'Red' Redding and earns the respect of the prison staff by leveraging his financial expertise. Over the years, Andy's unbreakable spirit and quiet tenacity inspire hope and camaraderie among the inmates, culminating in a daring escape plan.",
    "Genre": {
      "Name": "Drama",
      "Description": "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives."
    },
    "Director": {
      "Name": "Frank Darabont",
      "Bio": "Frank Darabont is an American filmmaker and screenwriter known for his work on horror and drama films.",
      "Birth": "1959",
      "HeadShots":["https://images.squarespace-cdn.com/content/v1/5bbcad0f2727be3646b9fee1/d6e0f272-3dc3-4908-9fdd-528b62add484/A63F0CCB-DE64-4FAB-BC96-D9D20990217E.jpeg?format=2500w"]
    },
    "ImagePath": "https://xl.movieposterdb.com/05_03/1994/0111161/xl_8494_0111161_3bb8e662.jpg?v=2024-05-30%2020:55:56",
    "Featured": true,
    "ReleaseYear": 1994
  },
  {
    "id": "666f35d393c7c89956dc00f2",
    "Title": "Inception",
    "Description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "Plot": "Dom Cobb is a skilled thief, the best in the dangerous art of extraction: stealing valuable secrets from deep within the subconscious during the dream state. Cobb's rare ability has made him a coveted player in industrial espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Cobb is offered a chance at redemption when he is given a seemingly impossible task: to plant an idea in someone's mind. If he succeeds, it will be the perfect crime.",
    "Genre": {
      "Name": "Science Fiction",
      "Description": "Science fiction is a genre that explores futuristic concepts, often involving advanced science and technology."
    },
    "Director": {
      "Name": "Christopher Nolan",
      "Bio": "Christopher Nolan is a British-American film director, producer, and screenwriter known for his complex narratives and innovative visuals.",
      "Birth": "1970",
      "HeadShots":["https://www.hollywoodreporter.com/wp-content/uploads/2023/07/GettyImages-1542858165-H-2023.jpg?w=1296&h=730&crop=1&resize=1000%2C563"]
    },
    "ImagePath": "https://xl.movieposterdb.com/10_06/2010/1375666/xl_1375666_07030c72.jpg?v=2024-06-14%2019:23:46",
    "Featured": true,
    "ReleaseYear": 2010
  },
  {
    "id": "666f35d693c7c89956dc00f3",
    "Title": "The Lion King",
    "Description": "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    "Plot": "In the Pride Lands of Africa, a young lion prince named Simba is born. His father, King Mufasa, teaches him about the circle of life and his responsibilities as future king. However, Simba's uncle Scar covets the throne and conspires to kill Mufasa and Simba, making it appear as an accident. Believing he is responsible for his father's death, Simba flees the kingdom, only to return years later to reclaim his rightful place as king.",
    "Genre": {
      "Name": "Animation",
      "Description": "Animation film is a genre in which the images are primarily created through animation techniques."
    },
    "Director": {
      "Name": "Roger Allers and Rob Minkoff",
      "Bio": "Roger Allers is an American film director, screenwriter, and animator. Rob Minkoff is an American filmmaker.",
      "Birth": "1949 (Allers), 1962 (Minkoff)",
      "HeadShots":["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoq60ua7sA8jddDHBQAYkHirb4lEtXHbGQ0Q&s"]
    },
    "ImagePath": "https://xl.movieposterdb.com/22_11/1994/323073/xl_the-lion-king-movie-poster_07016269.jpg?v=2024-05-23%2005:28:23",
    "Featured": true,
    "ReleaseYear": 1994
  },
  {
    "id": "666f35fb93c7c89956dc00f4",
    "Title": "Fight Club",
    "Description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    "Plot": "An unnamed narrator, disillusioned with his white-collar job, suffers from chronic insomnia. He finds relief by attending support groups for various afflictions, posing as a sufferer. His life changes radically when he meets Tyler Durden, a charismatic soap salesman. Together, they start an underground fight club as a form of male bonding. However, as the club evolves, it becomes something much more sinister, leading the narrator to discover shocking truths about himself and Tyler.",
    "Genre": {
      "Name": "Drama",
      "Description": "Drama is a genre that focuses on realistic storytelling, often depicting emotional themes and character-driven narratives."
    },
    "Director": {
      "Name": "David Fincher",
      "Bio": "David Fincher is an American film director, known for his meticulous and darkly stylized films, including Se7en and Gone Girl.",
      "Birth": "1962",
      "HeadShots":["https://m.media-amazon.com/images/M/MV5BMTc1NDkwMTQ2MF5BMl5BanBnXkFtZTcwMzY0ODkyMg@@._V1_.jpg"]    
    },
    "ImagePath": "https://xl.movieposterdb.com/05_02/1999/0137523/xl_7868_0137523_d46e33b9.jpg?v=2024-06-10%2019:55:53",
    "Featured": true,
    "ReleaseYear": 1999
  },
  {
    "id": "666f360193c7c89956dc00f5",
    "Title": "The Matrix",
    "Description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    "Plot": "Thomas Anderson, a computer hacker known by his alias 'Neo,' discovers that the reality he knows is a simulated reality called 'The Matrix,' created by intelligent machines to subdue the human population. With the help of Morpheus and Trinity, Neo learns about his role as 'The One,' destined to liberate humanity from the machine oppression. As he explores his powers, Neo must confront the powerful agents that stand in his way, particularly the relentless Agent Smith.",
    "Genre": {
      "Name": "Science Fiction",
      "Description": "Science fiction is a genre that explores futuristic concepts, often involving advanced science and technology."
    },
    "Director": {
      "Name": "Lana and Lilly Wachowski",
      "Bio": "Lana and Lilly Wachowski are American filmmakers known for their groundbreaking work in science fiction and fantasy films.",
      "Birth": "1965 (Lana), 1967 (Lilly)",
      "HeadShots":["https://d.newsweek.com/en/full/435085/gettyimages-185781732.jpg"]
    },
    "ImagePath": "https://xl.movieposterdb.com/05_05/1999/0133093/xl_18427_0133093_b67474af.jpg",
    "Featured": true,
    "ReleaseYear": 1999
  },
  {
    "id": "666f360593c7c89956dc00f6",
    "Title": "Gladiator",
    "Description": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    "Plot": "Maximus Decimus Meridius, a powerful Roman general, is betrayed when the emperor's ambitious son, Commodus, murders his father and seizes the throne. Reduced to slavery, Maximus becomes a gladiator and rises through the ranks of the arena to avenge the murders of his family and his emperor. His journey takes him from the blood-soaked sands of the Colosseum to the heart of the Roman Empire, where he faces Commodus in a final confrontation.",
    "Genre": {
      "Name": "Action",
      "Description": "Action films are characterized by a lot of excitement, including high-energy scenes, chases, and combat sequences."
    },
    "Director": {
      "Name": "Ridley Scott",
      "Bio": "Ridley Scott is a British filmmaker known for his work on iconic films such as Alien and Blade Runner.",
      "Birth": "1937",
      "HeadShots":["https://hips.hearstapps.com/hmg-prod/images/ridley-scott-gettyimages-1339598287.jpg?crop=0.9994444444444445xw:1xh;center,top&resize=640:*"]
    },
    "ImagePath": "https://xl.movieposterdb.com/08_12/2000/172495/xl_172495_93f99923.jpg?v=2024-05-16%2006:53:31",
    "Featured": true,
    "ReleaseYear": 2000
  }
]
);

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
