import axios from "axios";
import { API_BASE_URL } from "../../../config";

export const refreshAccessToken = async () => {
  console.log("sending refresh token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user?.refreshToken) {
    throw new Error("No refresh token found.");
  }
  const token = user.refreshToken;
  console.log(token);
  const response = await axios.post(
    `${API_BASE_URL}/api/v1/auth/refresh-token`,
    {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": 69420,
      },
    },
    token
  );

  const { accessToken, refreshToken, tokenExpiresIn } = response.data;
  user.accessToken = accessToken;
  user.refreshToken = refreshToken;
  user.tokenExpiresIn = tokenExpiresIn;
  localStorage.setItem("user", JSON.stringify(user));
  return accessToken;
};
