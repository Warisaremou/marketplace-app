import { useLocalStorage } from "./useLocalStorage";

export const userAuth = () => {
  const { getItem } = useLocalStorage();

  const userIsLogged = () => {
    const temp = getItem("accessToken");

    return temp ? true : false;
  };
  return userIsLogged;
};
