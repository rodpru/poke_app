import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesSlice";
import pokeListReducer from "./slices/pokeListSlice";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    pokeList: pokeListReducer,
  },
});
