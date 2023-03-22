import axiosInstance from "../axiosInstance";
import { PRODUCTS_URL } from "../config";
import { sellProductType } from "../../types/entities";

export const addProducts = ({ productData }: { productData: sellProductType }) => {
  const { name, description, mark, price, quantity, statusId, categoryId, sellerId, pictureId } =
    productData;
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
