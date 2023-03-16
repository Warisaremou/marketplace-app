import { USERS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getFollowers = (id: number | any) => {
  return axiosInstance.get(`${USERS_URL}/followers/${id}`);
};
