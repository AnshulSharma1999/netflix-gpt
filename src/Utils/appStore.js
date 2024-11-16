import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice";
import MoviesReducer from "./moviesSlice";
import GptReducer from "./gptSlice";
import ConfigReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    gpt: GptReducer,
    config: ConfigReducer,
  },
});

export default appStore;
