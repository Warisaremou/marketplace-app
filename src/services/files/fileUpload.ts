import axiosInstance from "../axiosInstance";
import { FILES_URL } from "../config";

export const fileUpload = (formData: any) => {
  return axiosInstance.post(FILES_URL, formData);
};
