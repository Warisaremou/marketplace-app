import axios from "axios";
import { FILES_URL } from "../config";

const PRODUCT_FILES = FILES_URL + "products/upload";

export const productPictures = () => {
  return axios
    .post(PRODUCT_FILES)
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
};
