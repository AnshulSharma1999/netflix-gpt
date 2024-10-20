import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { addupcomingMovies } from "../Utils/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await movies.json();
    dispatch(addupcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpComingMovies;
