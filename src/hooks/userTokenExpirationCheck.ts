import { useLocalStorage } from "./useLocalStorage";

export const userTokenExpirationCheck = () => {
  const { getItem, removeFromLocalStorage } = useLocalStorage();
  const userToken = getItem("accessToken");

  const userTokenHasExpired = () => {
    if (userToken) {
      const tokenExpiration = JSON.parse(atob(userToken.split(".")[1])).exp;
      const currentTime = Math.floor(Date.now() / 1000);

      if (currentTime > tokenExpiration) {
        removeFromLocalStorage("accessToken");
        window.location.reload();
      }
    }
  };
  return userTokenHasExpired;
};
