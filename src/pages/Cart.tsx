import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { CartData } from "../context/CartContext";
import EmptyCartSvg from "../assets/svg/empty-cart.svg";
import tShirt from "../assets/images/T-shirt.png";
import Steper from "../utils/Steper";

// first step

export function FirstStep({ nextStep, cart, removeFromCart }: any) {
  const total = cart.reduce(({ acc, item }: any) => acc + item?.product?.price * item?.quantity, 0);
  return (
    <>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          {/* <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((products) => (
              <li key={products?.product.id} className="flex py-4 sm:py-8">
                <div className="flex-shrink-0">
                  <img
                    src={tShirt}
                    alt="product-img"
                    className="h-auto w-24 rounded-md object-cover object-center sm:h-auto sm:w-24"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="">
                      <h3 className="text-sm font-medium text-gray-700">
                        {products?.product.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {products?.product.price}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0 sm:pr-9">
                      <p className="text-gray-600">{products.quantity}</p>
                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => removeFromCart(products?.product.id)}
                        >
                          <span className="sr-only">Retirer</span>
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-0 flex space-x-2 text-sm text-gray-700">
                    {products?.product.quantity > 5 ? (
                      <p className="flex items-center gap-2 text-green-500">
                        <CheckIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span className="">En stock</span>
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 text-red-500">
                        <XMarkIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                        <span>En rupture de stock</span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul> */}
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="mt-16 rounded-lg bg-gray-100 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
        >
          <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
            Récapitulatif de la commande
          </h2>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-600">Nombre de produit</dt>
              <dd className="text-sm font-medium text-gray-900">{cart.length}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex items-center text-sm text-gray-600">
                <span>Réduction</span>
                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">0%</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex text-sm text-gray-600">
                <span>Frais d'expédition</span>
                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">$3.32</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">Total :</dt>
              <dd className="text-base font-medium text-gray-900">${total}</dd>
            </div>
          </dl>

          <div className="mt-6">
            <button type="submit" className="checkout-btn" onClick={() => nextStep()}>
              Confirmer l'achat
            </button>
            <div className="mt-6 flex items-center justify-center text-center text-sm text-gray-500">
              ou
              <Link
                to="/products"
                className="ml-1 text-blue-500 hover:text-blue-color flex items-center"
              >
                Continuez mes achats <ArrowLongRightIcon className="icon-blue" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// second step

export function SecondStep({ nextStep, previousStep }: any) {
  return (
    <>
      <h1>Step 2</h1>
      <button type="button" onClick={() => previousStep()}>
        Précédent
      </button>
      <button type="button" onClick={() => nextStep()}>
        Suivant
      </button>
    </>
  );
}

// third step

export function ThirdStep() {
  return (
    <>
      <h1>Step 3</h1>
    </>
  );
}

// Main component

function Cart() {
  const { cart, removeFromCart } = CartData();
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);

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

  // const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  // console.log(cart);

  return (
    <>
      <h1 className="text-2xl text-center pt-2 font-bold tracking-tight text-gray-700">
        Mon Panier
      </h1>
      {cart.length == 0 ? (
        // If the cart is empty

        <div className="text-center py-4">
          <h1 className="text-gray-400 text-lg">Votre Panier est vide !</h1>
          <img src={EmptyCartSvg} alt="Error" className="w-80 my-16 mx-auto" />
          <Link
            to="/products"
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
    </>
  );
}

export default Cart;