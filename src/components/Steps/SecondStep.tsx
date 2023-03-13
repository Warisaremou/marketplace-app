import { useEffect } from "react";
import { openKkiapayWidget, addKkiapayListener, removeKkiapayListener } from "kkiapay";
import { UserLogged } from "../../context/UserLoggedContext";
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

type SecondStepProps = {
  nextStep: () => void;
  previousStep: () => void;
  cart: any;
  total: number;
};

function SecondStep({ nextStep, previousStep, cart, total }: SecondStepProps) {
  const { meData } = UserLogged();

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  console.log(meData);

  function makePayment() {
    openKkiapayWidget({
      amount: total,
      api_key: "7433c1e0c1af11ed9bc405cf203b3bde",
      sandbox: true,
      email: meData?.email,
      phone: "97000000",
    });
  }

  return (
    <div className="mb-10 ">
      <div className="grid md:grid-cols-2 gap-10 relative pt-5">
        {/* Order Information */}
        <form>
          <div className="pb-5">
            <label htmlFor="text" className="block text-base font-medium text-gray-700">
              Adress de livraison
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="form-input"
                // {...register("delivery_adress")}
              />
            </div>
            {/* {errors.delivery_adress && <small className="errors">{`${errors.delivery_adress?.message}`}</small>} */}
          </div>

          <h1>Méthode de paiement</h1>
          <button className="checkout-btn" onClick={makePayment}>
            Effectuez un paiement
          </button>
        </form>

        {/* Order Summary */}
        <section aria-labelledby="summary-heading" className="bg-gray-50 md:px-5 py-0">
          <div className="mx-auto max-w-lg lg:max-w-none">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
              Order summary
            </h2>

            <ul role="list" className="divide-y divide-gray-200 text-sm font-medium text-gray-900">
              {cart.map((products: any) => (
                <li key={products.productInfo.id} className="flex items-start space-x-4 py-6">
                  <div className="flex bg-gray-200 w-24 h-24 md:w-28 md:h-28 overflow-hidden rounded-md">
                    <img
                      src={products.productInfo.pictures.path[0]}
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex-auto space-y-1">
                    <h3>{products.productInfo?.name}</h3>
                    <p className="text-gray-500">Quantité: {products?.quantity}</p>
                  </div>
                  <p className="flex-none text-sm font-medium">{products.productInfo.price} FCFA</p>
                </li>
              ))}
            </ul>

            <dl className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd>{total} FCFA</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd>{cart.length >= 1 ? "5" : "0"}%</dd>
              </div>

              <div className="flex items-center justify-between">
                <dt className="text-gray-600">Taxes</dt>
                <dd>500 FCFA</dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <dt className="text-base">Total</dt>
                <dd className="text-base">{total - ((total * 5) / 100 - 500)} FCFA</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      <div className="flex items-center justify-between text-blue-dark-color mt-10">
        <button type="button" onClick={() => previousStep()} className="flex gap-1 items-center">
          <ChevronDoubleLeftIcon className="h-4 w-4" /> Précédent
        </button>
        <button
          type="button"
          onClick={() => nextStep()}
          className="flex flex-row-reverse gap-1 items-center"
        >
          <ChevronDoubleRightIcon className="h-4 w-4" /> Suivant
        </button>
      </div>
    </div>
  );
}

export default SecondStep;
