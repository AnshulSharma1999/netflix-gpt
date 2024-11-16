import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topReatedMovies = useSelector((store) => store.topRateMovies);
  const getTopratedMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topReatedMovies && getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;
