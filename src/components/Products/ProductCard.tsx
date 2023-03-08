import { PropsWithChildren } from "react";
import tShirt from "../../assets/images/T-shirt.png";
import { CheckBadgeIcon, StarIcon } from "@heroicons/react/24/solid";
// import { Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import Avatar from "../../utils/Avatar";

type Props = PropsWithChildren<{
  product: any;
}>;

function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <Link to={`item/${product.id}`}>
        <div className="flex items-center p-2 cursor-pointer">
          {product.seller?.photo == null ? (
            <Avatar />
          ) : (
            <Avatar src={product.seller?.photo?.path} />
          )}
          <span className="pl-2 text-xs font-medium flex items-center">
            {product.seller?.username}{" "}
            {product.seller?.id >= 10 && <CheckBadgeIcon className="h-4 fill-blue-color" />}{" "}
          </span>
        </div>
        <div className="product-img">
          <img src={product.pictures.path[0]} alt="t-shirt" />
        </div>
        <div className="p-2">
          <div className="flex justify-between text-base font-medium text-gray-600">
            <h4>
              {product.name.substring(0, 14)}
              {product.name.length >= 14 && "..."}
            </h4>
            <p>{product.price} FCFA</p>
          </div>
          <span className="text-[12px] line text-gray-600">
            {product.description.substring(0, 50)}
            {product.name.length >= 50 && "..."}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
