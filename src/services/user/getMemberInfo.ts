import { USERS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getMemberInfo = (id: number | any) => {
  return axiosInstance.get(`${USERS_URL}/${id}`);
};
