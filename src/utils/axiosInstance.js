// utils/axiosInstance.js
import axios from "axios";
// import { isTokenExpired, refreshAccessToken } from "./auth2";
import { API_BASE_URL } from "../../config";
import { isTokenExpired, refreshAccessToken } from "./auth2/auth2";

const user = JSON.parse(localStorage.getItem("user"));

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add a request interceptor to refresh the token if needed
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = user?.accessToken;
    console.log("This is user", accessToken, isTokenExpired());
    if (accessToken && isTokenExpired()) {
      try {
        const newAccessToken = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        console.log("new token", newAccessToken);
      } catch (error) {
        console.error("Failed to refresh token:", error);
        localStorage.removeItem("user");
        // Redirect to login or handle the error
        window.location.href = "/login";
        return Promise.reject(error);
      }
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log(config);

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
