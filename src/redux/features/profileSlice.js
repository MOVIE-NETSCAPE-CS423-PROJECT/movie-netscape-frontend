import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../../config";

export const userProfile = createAsyncThunk(
  "profiles",
  async (_, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const url = `${API_BASE_URL}/api/v1/accounts/${user?.userId}`;

      console.log(url);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": 69420,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profiles: JSON.parse(localStorage.getItem("profiles")) || null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(userProfile.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.user = action.payload;
        state.loading = false;
        localStorage.setItem("profiles", JSON.stringify(action.payload));
        state.error = null;
      })
      .addCase(userProfile.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default profileSlice.reducer;
