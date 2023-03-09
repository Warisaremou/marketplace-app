import React, { PropsWithChildren } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";

type Props = PropsWithChildren<{
  quantity: number;
  setQuantity: any;
  productQuantity: any;
}>;

function QuantitySelect({ quantity, setQuantity, productQuantity }: Props) {
  return (
    <div className="font-bold text-gray-700 flex justify-center items-center bg-gray-100 py-3 px-4 rounded-md">
      <button
        type="button"
        disabled={quantity <= 1 && true}
        onClick={() => setQuantity(quantity - 1)}
      >
        <MinusIcon
          className={clsx(
            "h-7 w-7 text-gray-600 hover:bg-gray-200 p-1 rounded-full duration-300 ease-in-out cursor-pointer",
            quantity <= 1 && "text-gray-300"
          )}
        />
      </button>
      <span className="px-20 md:px-5 lg:px-12">{quantity}</span>
      <button
        type="button"
        disabled={quantity === productQuantity && true}
        className={clsx(
          "h-7 w-7 text-gray-600 hover:bg-gray-200 p-1 rounded-full duration-300 ease-in-out cursor-pointer",
          quantity === productQuantity && "text-gray-300"
        )}
        onClick={() => setQuantity(quantity + 1)}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

export default QuantitySelect;
