import { USERS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getFollowings = (id: number | any) => {
  return axiosInstance.get(`${USERS_URL}/followings/${id}`);
};
