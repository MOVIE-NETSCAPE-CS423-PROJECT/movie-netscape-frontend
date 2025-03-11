import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  reducers: {
    addFavRemoveFav(state, action) {
      let favoriteMovies = state.favorites;
      const existingIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.movie.id
      );
      if (existingIndex === -1) {
        favoriteMovies.push(action.payload.movie);
      } else {
        state.favorites = state.favorites.filter(
          (movie) => movie.id !== action.payload.movie.id
        );
      }
    },
  },
});

export const { addFavRemoveFav } = favSlice.actions;
export default favSlice.reducer;
