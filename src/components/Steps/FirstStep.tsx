import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, QuestionMarkCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import QuantitySelect from "./../QuantitySelect";

function FirstStep({ nextStep, cart, total, removeFromCart }: any) {
  const [quantity, setQuantity] = useState<number>(1);
  // console.log(cart);
  // const total = cart.reduce(
  //   (acc: number, item: { productInfo: { price: number }; quantity: number }) =>
  //     acc + item.productInfo?.price * item?.quantity,
  //   0
  // );

  const updateCurrentProductQuantity = (
    e: React.ChangeEvent<HTMLSelectElement>,
    productId: number,
    currentQuantity: number
  ) => {
    currentQuantity = parseInt(e.target.value);
    console.log(currentQuantity, productId, currentQuantity);
  };

  return (
    <>
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <section aria-labelledby="cart-heading" className="lg:col-span-7 p-0">
          <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {cart.map((products: any) => (
              <li key={products.productInfo.id} className="flex py-4 sm:py-8">
                <div className="flex bg-gray-200 w-28 h-28 md:w-36 md:h-36 overflow-hidden rounded-md">
                  <img
                    src={products.productInfo.pictures.path[0]}
                    alt="product-img"
                    className="object-cover h-full w-full"
                  />
                  {/* {console.log(products.productInfo)} */}
                </div>

                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="">
                      <h3 className="text-sm font-medium text-gray-700">
                        {products.productInfo?.name}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-gray-900">
                        {products.productInfo?.price}
                      </p>
                    </div>

                    <div className="mt-2 sm:mt-0 sm:pr-9">
                      <select
                        value={`${products?.quantity}`}
                        className="max-w-full rounded-md border border-gray-300 py-1 px-2 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-blue-color focus:outline-none focus:ring-1 focus:ring-blue-color sm:text-sm cursor-pointer"
                        onChange={(e) => {
                          updateCurrentProductQuantity(
                            e,
                            products.productInfo?.id,
                            products?.quantity
                          );
                        }}
                      >
                        {Array.from(
                          { length: products?.productInfo?.quantity },
                          (_, index) => index + 1
                        ).map((value) => (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        ))}
                      </select>
                      <div className="absolute top-0 right-0">
                        <button
                          type="button"
                          className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => removeFromCart(products.productInfo?.id)}
                        >
                          <span className="sr-only">Retirer</span>
                          <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-0 flex space-x-2 text-sm text-gray-700">
                    {products?.productInfo?.quantity >= products.quantity ? (
                      <p className="flex items-center gap-2 text-green-500 mt-2 md:mt-0">
                        <CheckIcon
                          className="h-5 w-5 flex-shrink-0 fill-green-500"
                          aria-hidden="true"
                        />
                        <span className="">Quantité disponible</span>
                      </p>
                    ) : (
                      <p className="flex items-center gap-2 text-red-500 mt-2 md:mt-0">
                        <XMarkIcon
                          className="h-5 w-5 flex-shrink-0 fill-red-500"
                          aria-hidden="true"
                        />
                        <span>Quantité indisponible</span>
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
              <dd className="text-sm font-medium text-gray-900">{cart.length >= 1 ? "5" : "0"}%</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="flex text-sm text-gray-600">
                <span>Frais d'expédition</span>
                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                  <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="text-sm font-medium text-gray-900">500 FCFA</dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">Total :</dt>
              <dd className="text-base font-medium text-gray-900">{total} FCFA</dd>
            </div>
          </dl>

          <div className="mt-6">
            <button type="submit" className="checkout-btn" onClick={() => nextStep()}>
              Continuer
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

export default FirstStep;
