import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    setFavourites: (state, action) => {
      state.value = action.payload;
    },
    removeFromFavourites: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
