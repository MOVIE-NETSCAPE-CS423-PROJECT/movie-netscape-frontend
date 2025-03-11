import { createSlice } from "@reduxjs/toolkit";
import { movies } from "../assets/movies";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: movies,
  },
  reducers: {},
});
export default moviesSlice.reducer;
