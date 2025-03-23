import Heading from "./Heading"; //
import MovieForm from "./MovieForm"; //
import { useState } from "react"; //
import MovieList from "./MovieList"; //
import FilterButtons from "./FilterButtons"; //

const MovieWatch = () => {
  const prevMovie = localStorage.getItem("movies") || [];
  let prevMovieObj = prevMovie;
  if (prevMovie.length > 0) {
    prevMovieObj = JSON.parse(prevMovie);
  }

  const [movies, setMovies] = useState(prevMovieObj);
  const [filter, setFilter] = useState("all");

  function addMovie({ title, ott }) {
    const newMovie = {
      id: crypto.randomUUID(),
      title,
      ott,
      rating: null,
      watched: false,
    };

    const allmovies = localStorage.getItem("movies");
    let allmoviesObj = [];
    if (allmovies) {
      allmoviesObj = JSON.parse(allmovies);
    }
    const newConvertedMovie = [...allmoviesObj, newMovie];

    const finalMovie = JSON.stringify(newConvertedMovie);

    localStorage.setItem("movies", finalMovie);

    setMovies(newConvertedMovie);
  }

  function rateMovie(movieId, newRating) {
    const allmovies = localStorage.getItem("movies");
    const allmoviesObj = JSON.parse(allmovies);
    let ratedMovie = allmoviesObj.map((movie) =>
      movie.id === movieId ? { ...movie, rating: newRating } : movie
    );
    setMovies(ratedMovie);
    const movieStrings = JSON.stringify(ratedMovie);
    localStorage.setItem("movies", movieStrings);
  }

  function toggleWatched(id) {
    const allmovies = localStorage.getItem("movies");
    const allmoviesObj = JSON.parse(allmovies);
    let ratedMovie = allmoviesObj.map((movie) =>
      movie.id === id ? { ...movie, watched: !movie.watched } : movie
    );
    setMovies(ratedMovie);
    const movieStrings = JSON.stringify(ratedMovie);
    localStorage.setItem("movies", movieStrings);
  }

  function deleteMovie(id) {
    const allmovies = localStorage.getItem("movies");
    const allmoviesObj = JSON.parse(allmovies);
    let ratedMovie = allmoviesObj.filter((movie) => movie.id !== id);
    setMovies(ratedMovie);
    const movieStrings = JSON.stringify(ratedMovie);
    localStorage.setItem("movies", movieStrings);
  }

  const filteredMovies = movies.filter((movie) => {
    if (filter === "watch") return movie.watched;
    if (filter === "unwatch") return !movie.watched;
    return true;
  });

  return (
    <div className="text-center">
      <Heading />
      <MovieForm addMovie={addMovie} />
      <FilterButtons setFilter={setFilter} />
      <MovieList
        movies={filteredMovies}
        rateMovie={rateMovie}
        toggleWatched={toggleWatched}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};

export default MovieWatch;
