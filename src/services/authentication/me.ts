import axios from "axios";
import { AUTH_URL } from "../config";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const ME_URL = AUTH_URL + "me";

export const connectMe = () => {
  const { getItem } = useLocalStorage();
  const Token = getItem("accessToken");

  const pastToken = Token ? JSON.parse(Token) : "";

  return axios.get(ME_URL, {
    headers: {
      authorization: "Bearer " + pastToken,
    },
  });
};

