import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const pokeListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    setAllPokemons: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPokemons } = pokeListSlice.actions;

export default pokeListSlice.reducer;
