import axios from "axios";

const BASE_URL = import.meta.env.VITE_MY_BASE_URL;

const api = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUserData = async () => {
  try {
    const response = await api.get("/user", {
      headers: { "content-type": "application/json" },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "Failed to fetch user data"
      );
    }
    throw new Error("An unexpected error occurred");
  }
};

export const handleClick = async () => {
  try {
    const response = await api.post(
      "/click",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response Headers:", response.headers);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Request Headers:", error.config?.headers);
      throw new Error(
        error.response?.data?.message ||
          `Failed to handle click: ${error.message}`
      );
    }
    throw new Error("An unexpected error occurred");
  }
};
