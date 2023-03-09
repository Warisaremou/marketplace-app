import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CartData } from "../context/CartContext";
import EmptyCartSvg from "../assets/svg/empty-cart.svg";
import Steper from "../utils/Steper";
import { FirstStep, SecondStep, ThirdStep } from "../components/Steps";

function Cart() {
  const { cart, removeFromCart } = CartData();
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);

  useEffect(() => {
    console.log(cart);
  }, []);

  // Steps functions
  const nextStep = () => {
    if (formNo === 1) {
      setFormNo(formNo + 1);
    } else if (formNo === 2) {
      setFormNo(formNo + 1);
    } else {
      console.log("final step set order and cart to empty");
    }
  };
  const previousStep = () => {
    setFormNo(formNo - 1);
  };

  return (
    <div className="px-4 md:px-20">
      <h1 className="text-xl md:text-2xl pt-2 font-bold tracking-tight text-gray-700">
        Mon Panier
      </h1>
      {cart.length == 0 ? (
        // If the cart is empty
        <div className="text-center pt-4 pb-10">
          <h1 className="text-gray-400 text-sm">Votre Panier est vide !</h1>
          <img src={EmptyCartSvg} alt="Error" className=" w-64 md:w-80 my-16 mx-auto" />
          <Link
            to="/categories"
            className="text-blue-500 hover:text-blue-color mt-6 flex items-center justify-center text-center text-sm"
          >
            Passez une commande <ArrowLongRightIcon className="icon-blue" />
          </Link>
        </div>
      ) : // If the cart is not empty
      formNo == 1 ? (
        <FirstStep nextStep={nextStep} cart={cart} removeFromCart={removeFromCart} />
      ) : formNo == 2 ? (
        <SecondStep nextStep={nextStep} previousStep={previousStep} />
      ) : (
        <ThirdStep />
      )}

      {cart.length > 0 && <Steper formArray={formArray} formNo={formNo} />}
    </div>
  );
}

export default Cart;
