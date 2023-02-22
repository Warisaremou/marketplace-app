import axios from "axios";
import { AUTH_URL } from "../config";

const CONFIRM_PASSWORD_URL = AUTH_URL + "email/confirm";

export const confirmEmail = (hash: string) => {
  return axios
    .post(CONFIRM_PASSWORD_URL, { hash })
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
