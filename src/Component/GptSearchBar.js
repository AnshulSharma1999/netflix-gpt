import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import openai from "../Utils/openai";
import { moviesType } from "../Utils/moviesTypeConstants";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResult } from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movieName) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const movieJson = await movieData.json();
    return movieJson.results;
  };
  const handleGptSearch = async () => {
    // This is GPT API LOGIC

    // const gptResult = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: searchText.current.value }],
    //     model: 'gpt-3.5-turbo',
    //   });
    const movies = moviesType[searchText.current.value].split(",");

    const promiseArray = movies.map((movie) => searchMovieTMDB(movie));
    const tmdbResult = await Promise.all(promiseArray);
    dispatch(addGptMovieResult({movieNames:movies,movieResults:tmdbResult}))
    console.log(tmdbResult);
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-6/12 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
