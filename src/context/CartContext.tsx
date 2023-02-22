import { createContext, useContext, useEffect, useState } from "react";
// import { cartType, productType } from "../types/entities";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { toast } from "react-hot-toast";
import { productType } from "../types/entities";

type Props = {
  product: productType;
  quantity: number;
};

const setToast = (message: string) => {
  toast.success(message, {
    style: {
      borderRadius: "5px",
      background: "#16A23A",
      color: "#fff",
      fontSize: "12px",
    },
  });
};

export const CartContext = createContext({
  cart: [] as Props[],
  updateCart: (value: any) => {},
  addToCart: (value: any) => {},
  removeFromCart: (value: any) => {},
});

export const CartContextProvider = ({ children }: any) => {
  const { getItem, setLocalStorage } = useLocalStorage();
  const savedCart = getItem("cart");

  const [cart, updateCart] = useState<Props[]>(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    setLocalStorage("cart", cart);
  }, [cart]);

  const addToCart = ({ product, quantity }: Props) => {
    const currentProductAdded = cart.find((item) => item.product.id == product.id);
    // console.log(productId);
    // const productId: number = product.id;
    if (currentProductAdded) {
      const cartFilteredCurrentProduct: any = cart.filter((item) => item.product.id !== product.id);
      updateCart([
        ...cartFilteredCurrentProduct,
        { product, quantity: currentProductAdded.quantity + 1 },
      ]);
      setToast("Le produit à été mis à jour avec succès ");
    } else {
      setToast("Produit ajouté au panier avec succès");
      updateCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const cartFilteredCurrentProduct: any = cart.filter((item) => item.product.id !== productId);
    updateCart([...cartFilteredCurrentProduct]);
    setToast("Le produit à été supprimé avec succès ");
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const CartData = () => {
  return useContext(CartContext);
};
