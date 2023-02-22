import { REVIEWS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getReview = (id: number) => {
  return axiosInstance.get(`${REVIEWS_URL}/${id}`);
};
