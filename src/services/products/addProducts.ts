import { sellProductType } from "../../types/entities";
import axiosInstance from "../axiosInstance";
import { PRODUCTS_URL } from "../config";

type productProps = {
  productData: sellProductType;
  pictureId: string;
  sellerId: number;
};

export const addProducts = ({ productData, pictureId, sellerId }: productProps) => {
  const { name, description, mark, price, quantity, statusId, categoryId } = productData;
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
    pictures: {
      id: pictureId,
    },
    status: {
      id: statusId,
    },
  });
};
