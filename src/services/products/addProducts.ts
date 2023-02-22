import axios from "axios";
import axiosInstance from "../axiosInstance";
import { PRODUCTS_URL } from "../config";

type productProps = {
  name: string;
  mark: string;
  price: number;
  quantity: number;
  categoryId: number;
  statusId: number;
  description: string;
  sellerId: number;
};

export const addProducts = (
  name: string,
  description: string,
  price: number,
  quantity: number,
  mark: string,
  sellerId: number,
  categoryId: number,
  statusId: number
) => {
  return axiosInstance.post(PRODUCTS_URL, {
    name,
    description,
    price,
    quantity,
    mark,
    seller: {
      id: sellerId,
    },
    category: {
      id: categoryId,
    },
    status: {
      id: statusId,
    },
  });
};
