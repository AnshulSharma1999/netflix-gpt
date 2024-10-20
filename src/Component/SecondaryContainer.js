import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="-mt-80 relative"> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRateMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        </div>
        <MovieList title={"Up Coming"} movies={movies.upcomingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
