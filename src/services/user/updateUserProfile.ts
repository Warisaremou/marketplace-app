import { AUTH_URL } from "../config";
import axiosInstance from "../axiosInstance";
import { userType } from "../../types/entities";

type userTypeProps = {
  userData: userType;
  photoId: any;
};

export const updateUserProfile = ({photoId, userData }: userTypeProps) => {
  const { firstName, lastName, username, address, phone, description, photo } = userData;

  return axiosInstance.patch(`${AUTH_URL}me`, {
    firstName,
    lastName,
    username,
    address,
    phone,
    description,
    photo: {
      id: photoId,
    },
  });
};
