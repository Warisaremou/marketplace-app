import { PRODUCTS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getAllProducts = () => {
  return axiosInstance.get(PRODUCTS_URL);
};
