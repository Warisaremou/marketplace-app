import { createContext, useContext, useEffect, useState } from "react";
// import { cartType, productType } from "../types/entities";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { toast } from "react-hot-toast";
import { productType } from "../types/entities";

type Props = {
  productInfo: productType;
  quantity: number;
};

const setToast = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: "5px",
      background: "#16A23A",
      color: "#fff",
      fontSize: "15px",
    },
  });
};

export const CartContext = createContext({
  cart: [] as Props[],
  updateCart: (value: any) => {},
  addToCart: (value: any) => {},
  removeFromCart: (value: any) => {},
  clearCart: () => {},
});

export const CartContextProvider = ({ children }: any) => {
  const { getItem, setLocalStorage } = useLocalStorage();
  const savedCart = getItem("cart");
  const [cart, updateCart] = useState<Props[]>(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    setLocalStorage("cart", cart);
  }, [cart]);

  const addToCart = ({ productInfo, quantity }: Props) => {
    const currentProductAdded = cart.find((item) => item?.productInfo?.id == productInfo?.id);
    // console.log(productInfo);
    // const productId: number = product.id;
    if (currentProductAdded) {
      const cartFilteredCurrentProduct: any = cart.filter(
        (item) => item.productInfo?.id !== productInfo?.id
      );
      updateCart([
        ...cartFilteredCurrentProduct,
        { productInfo, quantity: currentProductAdded.quantity + 1 },
      ]);
      // setToast("Le produit à été mis à jour avec succès ");
    } else {
      // setToast("Produit ajouté au panier avec succès");
      updateCart([...cart, { productInfo, quantity }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const cartFilteredCurrentProduct: any = cart.filter(
      (item) => item.productInfo?.id !== productId
    );
    updateCart([...cartFilteredCurrentProduct]);
    setToast("Le produit à été supprimé avec succès ");
  };

  const clearCart = () => {
    updateCart([]);
    setToast("Le panier a été vider avec succès ");
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartData = () => {
  return useContext(CartContext);
};
