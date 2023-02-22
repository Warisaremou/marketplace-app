import axios from "axios";
import { useLocalStorage } from "../hooks/useLocalStorage";

const { getItem } = useLocalStorage();

const userToken = getItem("accessToken");

const pastUserToken = userToken ? JSON.parse(userToken) : "";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  // timeout: 1000,
  headers: {
    authorization: "Bearer " + pastUserToken,
  },
});

export default axiosInstance;
