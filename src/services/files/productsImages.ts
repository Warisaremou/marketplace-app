import axiosInstance from "../axiosInstance";
import { PRODUCT_IMAGES_URL } from "../config";

export const productImages = (imagesData: any) => {
  return axiosInstance.post(PRODUCT_IMAGES_URL, imagesData);
};
