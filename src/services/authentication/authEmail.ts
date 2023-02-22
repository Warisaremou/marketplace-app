import axiosInstance from "../axiosInstance";
import { AUTH_URL } from "../config";

const AUTH_URL_EMAIL = AUTH_URL + "email/login";

export const authEmail = (email: string, password: string) => {
  return axiosInstance.post(AUTH_URL_EMAIL, {
    email,
    password,
  });
};
