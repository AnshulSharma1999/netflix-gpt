import React from "react";
import { IMG_CDN_LINK } from "../Utils/constant";

const MovieCard = ({ movie_name, poster_path }) => {
  if(!poster_path) return null;
  return (
    <div className="w-52 pr-4">
      <img alt={movie_name} src={IMG_CDN_LINK + poster_path}></img>
    </div>
  );
};

export default MovieCard;
