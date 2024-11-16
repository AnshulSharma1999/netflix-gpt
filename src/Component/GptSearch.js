import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { Netflix_Login_Background } from "../Utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={Netflix_Login_Background}
          alt="netflix_Login_background_img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
