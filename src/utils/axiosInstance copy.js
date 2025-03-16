import axios from "axios";
import { API_BASE_URL } from "../../config";
import { refreshAccessToken } from "./auth/refreshAccessToken";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const accessToken = user.accessToken;
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // console.log("sending refresh token 2", error);
    // Check if the error is due to an expired token
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      try {
        console.log("sending refresh token 3");
        const newAccessToken = await refreshAccessToken(); // Refresh the access token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`; // Update the header
        return axiosInstance(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Redirect to login or handle the error
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
