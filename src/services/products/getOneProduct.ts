import { PRODUCTS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const getOneProduct = (id: number | any) => {
  return axiosInstance.get(`${PRODUCTS_URL}/${id}`);
};
