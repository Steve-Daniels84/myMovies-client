# myMovies Client

## Project Overview
The myMovies Client is a modern frontend application designed for the myMovies movie database, which I developed recently. This application provides users with an intuitive interface to explore a vast collection of movies, access detailed information about each title, manage their personal profiles, and curate a list of favorite films. Built using React and React Bootstrap, the application leverages React Router for seamless client-side navigation.

## Features
- **User Authentication:** Register, log in, and log out of your account with ease.
- **Movie Browsing:** Explore a wide selection of movies retrieved from the backend API.
- **Movie Details:** Access comprehensive details about any selected movie.
- **User Profile Management:** View and update your personal profile information.
- **Favorite Movies:** Easily add or remove movies from your favorites list.
- **Search Functionality:** Quickly find movies by title using the search bar in the navigation.

## Dependencies
- React
- React Router
- React Bootstrap
- Bootstrap
- Fetch API (for HTTP requests)

## File Structure
src/
│
├── components/
│ ├── movie-card/
│ │ └── movie-card.jsx
│ ├── movie-view/
│ │ └── movie-view.jsx
│ ├── login-view/
│ │ └── login-view.jsx
│ ├── signup-view/
│ │ └── signup-view.jsx
│ ├── navigation-bar/
│ │ └── navigation-bar.jsx
│ ├── profile-view/
│ │ ├── profile-view.jsx
│ │ ├── profile-view.scss
│ │ ├── user-info.jsx
│ │ └── favorite-mov-page.jsx
│ └── main-view/
│ ├── main-view.jsx
│ └── main-view.scss
│
├── index.jsx
├── index.html
└── index.scss

## Component Overview
- **MainView:** The application's central component, responsible for managing state and routing.
- **NavigationBar:** The top navigation bar offering quick access to different routes and a search function.
- **MovieCard:** Displays individual movie information, with options to add or remove films from favorites.

## Usage Guide
- **Sign Up:** Create a new account by navigating to the sign-up page.
- **Log In:** Access your account by logging in.
- **Browse Movies:** Explore the collection of movies available.
- **View Movie Details:** Click on a movie card for detailed information.
- **Manage Favorites:** Add or remove movies from your favorites list.
- **Update Profile:** Modify your profile information from the profile page.
- **Search:** Filter movies by title using the navigation bar's search function.

## Deployment
To build the application for production, run:

npm run build

Deploy the contents of the build directory to your preferred web server or hosting service.
