import { PropsWithChildren } from "react";
import tShirt from "../../assets/images/T-shirt.png";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
// import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

type Props = PropsWithChildren<{
  product: any;
}>;

function ProductCard({ product }: Props) {
  return (
    <div>
      <div className="product-card">
        <div className="flex items-center p-2 cursor-pointer">
          {/* {product.seller?.photo == null ? (
            <Avatar rounded={true} size="sm" />
          ) : (
            <Avatar img={product.seller?.photo?.path} rounded={true} className="w-8" />
          )} */}
          <span className="pl-2 text-xs font-medium flex items-center">
            {product.seller?.username}{" "}
            {product.seller?.id >= 10 && <CheckBadgeIcon className="h-4 fill-blue-color" />}{" "}
          </span>
        </div>
        <div className="product-img">
          <img src={tShirt} alt="t-shirt" />
        </div>
        <div className="p-2">
          <div className="flex-box text-sm">
            <h4>
              {product.name.substring(0, 14)}
              {product.name.length >= 14 && "..."}
            </h4>
            <p>{product.price} FCFA</p>
          </div>
          <span className="text-[12px] line text-gray-600">
            {" "}
            {product.description.substring(0, 25)}...{" "}
          </span>
          <div className="flex-box pt-2">
            <div className="flex-box border p-1 rounded-full">
              <StarIcon className="star" />
              <h4 className="text-[14px] pl-1 font-medium">4.8</h4>
            </div>
            <Link to={`${product.id}`} className="add">
              Voir
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
