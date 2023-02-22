import { REVIEWS_URL } from "../config";
import { reviewsType } from "../../types/entities";
import axiosInstance from "../axiosInstance";

type commentProps = {
  rating: number;
  review: reviewsType;
};

export const addReview = (id: number, rating: number, review: string) => {
  return axiosInstance.post(REVIEWS_URL, {
    rating,
    review,
    product: {
      id: id,
    },
  });
};
