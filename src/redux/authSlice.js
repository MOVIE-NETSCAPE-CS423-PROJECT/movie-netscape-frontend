import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_BASE_URL } from "../../config";

export const loginUser = createAsyncThunk(
  "/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/auth/login`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/users/register`,
        credentials
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "/refreshtoken",
  async (refreshToken) => {
    const response = await axios.post(`/api/v1/auth/refresh-token`, {
      refreshToken,
    });
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
    status: "idle",
  },
  reducers: {
    logoutUser(state) {
      state.user = null;
      localStorage.removeItem("user");
      localStorage.removeItem("profiles");
      localStorage.removeItem("favorites");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error =
          action.payload.message ||
          "Not able to login right now, please try again later";
        state.loading = false;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        // state.user = action.payload.user;
        state.loading = false;
        // localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload.response.message;
        state.loading = false;
      })

      // refresh
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        console.log("Action refresh token: ", action);
        state.accessToken = action.payload;
        state.loading = false;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.error = null;
      })
      .addCase(refreshAccessToken.rejected, (state, action) => {
        console.log(state);
      });
  },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
