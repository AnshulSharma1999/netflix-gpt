import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addMovieTrailer } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const movies = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );

    const json = await movies.json();
    
    const filteredData = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filteredData.length > 0 ? filteredData[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
