import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopratedMovies();
  }, []);
};

export default useTopRatedMovies;
