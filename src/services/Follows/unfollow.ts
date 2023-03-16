import { USERS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const unfollow = ({ followerId, followingId }: number | any) => {
  const UNFOLLOW_URL = USERS_URL + "/unfollow";

  return axiosInstance.delete(UNFOLLOW_URL, {
    
  });
};
