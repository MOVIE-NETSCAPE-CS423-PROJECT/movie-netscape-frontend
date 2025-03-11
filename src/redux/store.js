import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import moviveReducer from "./moviesSlice";
import favoriteReducer from "./favSlice";
import profileReducer from "./features/profileSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviveReducer,
    favorites: favoriteReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: true }),
});

store.subscribe(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.getState().favorites.favorites)
  );
});
