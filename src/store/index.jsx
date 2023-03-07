import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./slices/favouritesSlice";

export const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
});
