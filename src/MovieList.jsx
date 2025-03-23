import PropTypes from "prop-types";
import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, rateMovie, toggleWatched, deleteMovie }) => {
  return (
    <div className="mt-4 px-5">
      <ul>
        {movies.map((movie) => (
          <MovieItem
            key={movie.id}
            movie={movie}
            rateMovie={rateMovie}
            toggleWatched={toggleWatched}
            deleteMovie={deleteMovie}
          />
        ))}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ott: PropTypes.string.isRequired,
    watched: PropTypes.bool.isRequired,
    rating: PropTypes.number,
  }).isRequired,

  rateMovie: PropTypes.func.isRequired,
  toggleWatched: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
};

export default MovieList;
