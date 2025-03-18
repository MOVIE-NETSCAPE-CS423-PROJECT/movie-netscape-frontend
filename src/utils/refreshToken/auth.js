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
    const oldAccessToken = user?.accessToken;

    let data = {
      refreshToken: oldRefreshToken,
    };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${API_BASE_URL}/api/v1/auth/refresh-token`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${oldAccessToken}`,
      },
      data: data,
    };

    const response = await axios.request(config);
    const { accessToken, refreshToken, tokenExpiresIn } = response.data;
    user.accessToken = accessToken;
    user.refreshToken = refreshToken;
    user.tokenExpiresIn = tokenExpiresIn;
    localStorage.setItem("user", JSON.stringify(user));
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    throw error;
  }
};
