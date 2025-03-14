import axios from "axios";
import { API_BASE_URL } from "../../../config";

export const refreshToken = async () => {
  try {
    let user = JSON.parse(localStorage.getItem("user"));
    let refreshToken = user.refreshToken;
    const response = await axios.post(`${API_BASE_URL}/auth/refreshtoken`, {
      refreshToken,
    });

    const { accessToken } = response.data;
    user.accessToken = accessToken;
    localStorage.setItem("user", user); // Save new access token
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};
