import axios from "axios";
import { AUTH_URL } from "../config";

const FORGOT_PASSWORD_URL = AUTH_URL + "forgot/password";

export const forgotPassword = (email: string) => {
  return axios
    .post(FORGOT_PASSWORD_URL, { email })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
