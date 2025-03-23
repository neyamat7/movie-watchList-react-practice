import PropTypes from "prop-types";
import { useState } from "react";
PropTypes;

const MovieForm = ({ addMovie }) => {
  const [movieData, setMovieData] = useState({
    title: "",
    ott: "",
  });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({ ...movieData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addMovie(movieData);
    setMovieData({
      title: "",
      ott: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-2 mb-8 w-full px-5"
    >
      <input
        value={movieData?.title}
        type="text"
        name="title"
        placeholder="Enter Movie Name"
        className="flex-1 p-2 border border-gray-700 bg-gray-800 rounded-lg text-white"
        onChange={handleChange}
      />
      <select
        name="ott"
        value={movieData?.ott}
        id=""
        className="border border-gray-300 rounded-md"
        onChange={handleChange}
      >
        <option value="">Select an OTT</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Hotstar">Hotstar</option>
        <option value="SonyLIV">SonyLIV</option>
        <option value="Hoichoi">Hoichoi</option>
        <option value="Others">Others</option>
      </select>

      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

MovieForm.propTypes = {
  addMovie: PropTypes.func.isRequired,
};

export default MovieForm;
