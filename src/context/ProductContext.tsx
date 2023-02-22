import { createContext, useState, useContext } from "react";
import { productType } from "../types/entities";

export const ProductContext = createContext({
  product: {} as productType,
  setProduct: (value: productType) => {},
});

export const ProductContextProvider = ({ children }: any) => {
  const [product, setProduct] = useState<productType>({} as productType);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductData = () => {
  return useContext(ProductContext);
};
