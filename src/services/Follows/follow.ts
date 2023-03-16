import { USERS_URL } from "../config";
import axiosInstance from "../axiosInstance";

export const follow = ({ followerId, followingId }: number | any) => {
  const FOLLOW_URL = USERS_URL + "/follow";

  return axiosInstance.post(FOLLOW_URL, {
    follower: {
      id: followerId,
    },
    following: {
      id: followingId,
    },
  });
};
