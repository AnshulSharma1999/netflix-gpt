import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestion = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if(!movieNames) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieNames.map((movie, index) => (
        <MovieList title={movie} movies={movieResults[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
