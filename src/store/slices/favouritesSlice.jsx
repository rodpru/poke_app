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
      /*       let newArr = [...state.value];
      let index = newArr.indexOf(action.payload);
      newArr.splice(index, 1);
      state.value = newArr;
      console.log(newArr, "removed");
      localStorage.removeItem("favourites");
      localStorage.setItem("favourites", JSON.stringify(state.value)); */
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFavourites, removeFromFavourites } = favouritesSlice.actions;

export default favouritesSlice.reducer;
