import PropTypes from "prop-types";

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="flex justify-center gap-2 ">
      <button
        className="px-4 py-2 bg-gray-600 text-white rounded-md cursor-pointer"
        type="submit"
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-md cursor-pointer"
        type="submit"
        onClick={() => setFilter("watch")}
      >
        Watched
      </button>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
        type="submit"
        onClick={() => setFilter("unwatch")}
      >
        Unwatched
      </button>
    </div>
  );
};

export default FilterButtons;
