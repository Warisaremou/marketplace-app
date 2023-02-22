import axiosInstance from "../axiosInstance";
import { CATEGORIES_URL } from "../config";

export const getAllCategories = () => {
  return axiosInstance.get(CATEGORIES_URL);
};
