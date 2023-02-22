import axios from "axios";
import { AUTH_URL } from "../config";

const REGISTER_URL = AUTH_URL + "email/register";

export const registerUser = (
  lastName: string,
  firstName: string,
  username: string,
  country: string,
  email: string,
  password: string,
) => {
  return axios.post(REGISTER_URL, {
    lastName,
    firstName,
    username,
    country,
    email,
    password,
  });
};
