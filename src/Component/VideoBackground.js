import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  useMovieTrailer(movieId);
  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
