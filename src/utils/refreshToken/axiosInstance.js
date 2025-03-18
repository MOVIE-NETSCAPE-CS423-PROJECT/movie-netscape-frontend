import axios from "axios";
import { API_BASE_URL } from "../../../config";
import { isTokenExpired, refreshAccessToken } from "./auth";
const user = JSON.parse(localStorage.getItem("user"));

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = user?.accessToken;
    if (accessToken && isTokenExpired()) {
      try {
        const newAccessToken = await refreshAccessToken();
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } catch (error) {
        console.error("Failed to refresh token:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("profiles");
        localStorage.removeItem("favorites");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    } else {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
