import axios from "axios";
import { userType } from "../../types/entities";
import { AUTH_URL } from "../config";

const REGISTER_URL = AUTH_URL + "email/register";

export const registerUser = (registerData: userType) => {
  const { lastName, firstName, username, email, password } = registerData;

  return axios.post(REGISTER_URL, {
    lastName,
    firstName,
    username,
    email,
    password,
  });
};
// export const registerUser = (
//   lastName: string,
//   firstName: string,
//   username: string,
//   email: string,
//   password: string,
// ) => {
//   return axios.post(REGISTER_URL, {
//     lastName,
//     firstName,
//     username,
//     email,
//     password,
//   });
// };
