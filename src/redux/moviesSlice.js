import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movies } from "../assets/movies";
import axiosInstance from "../utils/refreshToken/axiosInstance";

export const fetchMovies = createAsyncThunk("/", async () => {
  try {
    const response = await axiosInstance.get(`/movies`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movieList = action.payload;
    });
  },
});
export default moviesSlice.reducer;
