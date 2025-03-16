import axios from "axios";
import { API_BASE_URL } from "../../../config";

const user = JSON.parse(localStorage.getItem("user"));
export const isTokenExpired = () => {
  const expirationTime = user?.tokenExpiresIn;
  if (!expirationTime) return true;
  const currentTime = Date.now();
  return currentTime >= expirationTime;
};

export const refreshAccessToken = async () => {
  try {
    const oldRefreshToken = user.refreshToken;
    if (!oldRefreshToken) {
      throw new Error("No refresh token found");
    }
    const response = await axios.post(
      `${API_BASE_URL}/api/auth/refresh-token`,
      {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": 69420,
        },
        oldRefreshToken,
      }
    );
    const { accessToken, refreshToken, tokenExpiresIn } = response.data;
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    user.tokenExpiresIn = tokenExpiresIn;
    localStorage.setItem("user", JSON.stringify(user));
    console.log("New token:", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};
