import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  return (
    <div className="px-6">
      <h1 className="text-3xl py-2 text-white">{title}</h1>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          onClick={scrollLeft}
        >
          {"<"}
        </button>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 z-10"
          onClick={scrollRight}
        >
          {">"}
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto hide-scrollbar py-4 space-x-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {movies?.map((movie) => (
            <div key={movie.id} className="flex-shrink-0">
              <MovieCard
                movie_name={movie.original_title}
                poster_path={movie.poster_path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
