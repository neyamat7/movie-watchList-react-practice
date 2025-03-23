import PropTypes from "prop-types";
import ReactStars from "react-stars";

const MovieItem = ({ movie, rateMovie, toggleWatched, deleteMovie }) => {
  function handleRatingChange(newRating) {
    rateMovie(movie.id, newRating);
  }
  function handleWatch(id) {
    toggleWatched(id);
  }

  function handleDeleteClick(id) {
    deleteMovie(id);
  }

  return (
    <li className="flex justify-between items-center p-3 bg-amber-100 rounded-lg shadow-md text-gray-900 font-medium mb-2">
      <span className={`${movie.watched ? "line-through" : ""}`}>
        {movie.title} on {movie.ott}{" "}
        {movie?.rating ? `⭐ ${movie.rating}/5` : movie.rating}
      </span>

      <div className="flex gap-2">
        <ReactStars
          count={5}
          value={movie?.rating}
          onChange={handleRatingChange}
          size={24}
          color2={"#ffd700"}
        />

        <button
          onClick={() => handleWatch(movie.id)}
          className="px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          {movie.watched ? "Unwatch" : "Watched"}
        </button>

        <button
          onClick={() => handleDeleteClick(movie.id)}
          className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
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

export default MovieItem;

// {movie.title} on {movie.ott} {movie.rating && `⭐ ${movie.rating}/5`}
