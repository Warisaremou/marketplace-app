import { useEffect, useState } from "react";
import productImg from "../assets/images/T-shirt.png";
// import QuantitySelect from "../components/QuantitySelect";
import { CheckBadgeIcon, PhoneIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { AllProductDetails } from "../data/productsDetails";
import ProductReviews from "../components/Products/ProductReviews";
import clsx from "clsx";
// import { Avatar } from "flowbite-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getOneProduct } from "./../services/products/getOneProduct";
import Skeleton from "./../utils/Skeleton";
import { toast } from "react-hot-toast";
import { CartData } from "./../context/CartContext";
import { addReview } from "./../services/reviews/addReview";
import { ProductData } from "../context/ProductContext";

function Product() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState(AllProductDetails[0]);
  const [selectedRate, setSelectedRate] = useState<number>(0);
  const [openCommentField, setOpenCommentField] = useState(false);
  const [comment, setComment] = useState({ rating: 0, review: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = CartData();
  const { product, setProduct } = ProductData();
  const productId = product.id;
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Rate product
  function onRateSelection(item: number) {
    setSelectedRate(item);
    setComment({ ...comment, rating: item });
  }

  // Add comment function
  function addComment() {
    if (comment.review === "") {
      toast.error("Veuillez donner votre avis sur le produit !", {
        style: {
          borderRadius: "5px",
          background: "#DE0F12",
          color: "#fff",
          fontSize: "12px",
        },
      });
      return;
    }
    console.log(productId, comment);
    addReview(productId, comment.rating, comment.review)
      .then((res) => {
        console.log(res);
        window.location.reload();
        toast.success("Votre avis a été ajouté avec succès !", {
          style: {
            borderRadius: "5px",
            background: "#0FDE12",
            color: "#fff",
            fontSize: "12px",
          },
        });
        setOpenCommentField(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="mt-8 mb-8">
      <Link to="/products" className="text-blue-color flex pb-5 items-center">
        <ArrowLeftIcon className="icon-blue" /> Retour
      </Link>
      {/* Product Info */}
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <div className="flex items-center p-2 cursor-pointer mb-2">
            {/* {product.seller?.photo == null ? (
              <Avatar rounded={true} size="sm" />
            ) : (
              <Avatar img={product.seller?.photo?.path} rounded={true} className="" />
            )} */}
            <span className="pl-2 text-xs font-medium flex items-center">
              {product.seller?.username}{" "}
              {product.seller?.id >= 10 && <CheckBadgeIcon className="h-4 fill-blue-color" />}{" "}
            </span>
          </div>
          <div className="flex gap-14 flex-col md:flex-row">
            <div className="md:w-3/4">
              <div>
                <img src={mainImage.cover} alt={mainImage.name} className="rounded-md" />
              </div>
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-6">
                {AllProductDetails.map((product) => (
                  <img
                    key={product.id}
                    src={product.cover}
                    alt={product.name}
                    className={clsx(
                      "rounded-lg cursor-pointer hover:opacity-70 duration-200",
                      mainImage.id == product.id && "opacity-70 border-4 border-blue-color"
                    )}
                    onClick={() => setMainImage(product)}
                  />
                ))}
              </div>
            </div>
            <div className="text-justify md:w-full">
              {/* Product Details */}
              <h3 className="product-name"> {product?.name} </h3>
              <p className="product-description">
                Description: <span className="font-normal">{product?.description}</span>
              </p>
              <p className="product-quantity">
                Quantité: <span className="font-normal">{product?.quantity}</span>
              </p>
              <p className="product-mark">
                Marque: <span className="font-normal">{product?.mark}</span>
              </p>
              <p className="product-price">
                Prix: <span className="font-normal"> {product?.price} FCFA</span>
              </p>
              <p className="product-status">
                Etat:
                <span className="ml-1 text-xs font-normal bg-blue-500 text-white p-1 rounded-full">
                  {product?.status?.name}
                </span>
              </p>
              <div className="flex mb-5">
                <StarIcon className="star-2" />
                <h4 className="text-lg pl-1 font-semibold text-yellow-300">4.8</h4>
                {/* {console.log(product?.reviews)} */}
                {/* {product?.reviews.map((advice) => (
                    console.log(advice.rating)
                  ))} */}
              </div>
              {/* Contact seller */}
              <p className="text-blue-color cursor-pointer flex items-center mb-5 text-sm">
                <PhoneIcon className="w-4 mr-1" />
                Contactez le vendeur
              </p>
              <div className="mb-5">
                {/* Rate section */}
                <div className="flex mb-3 items-center">
                  Notez le produit :
                  <span className="inline-flex gap-1 ml-2">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <button
                        key={item}
                        onClick={() => onRateSelection(item)}
                        disabled={comment.rating >= 1 && true}
                      >
                        <StarIcon
                          className={clsx(
                            "w-5 mb-[2px] cursor-pointer stroke-yellow-300 fill-none",
                            selectedRate >= item && "fill-yellow-300"
                          )}
                        />
                      </button>
                    ))}
                  </span>
                </div>

                {/* Comment Field Section */}
                <div>
                  <span
                    className="text-blue-color cursor-pointer"
                    onClick={() => setOpenCommentField(!openCommentField)}
                  >
                    Cliquez pour commenter
                  </span>
                  {openCommentField && (
                    <div className="mt-3">
                      <textarea
                        placeholder="Votre commentaire"
                        name="comment"
                        cols={40}
                        rows={4}
                        value={comment.review}
                        onChange={(e) => setComment({ ...comment, review: e.target.value })}
                        className="text-sm border border-gray-300 rounded-md p-2 resize-none"
                      ></textarea>
                      <button className="btn block" onClick={() => addComment()}>
                        Envoyer
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-6 md:flex-row">
                {/* <QuantitySelect
                  quantity={quantity}
                  setQuantity={setQuantity}
                  productQuantity={product?.quantity}
                /> */}
                <button className="add-btn" onClick={() => addToCart({ product, quantity })}>
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </button>
                {/* {console.log(cart)} */}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-blue-color mb-5">Avis des clients </h3>
            {product?.reviews.length <= 0 && (
              <h1 className="text-sm text-gray-500">Aucun commentaire sur le produit</h1>
            )}
            {product.reviews.map((comment) => (
              <ProductReviews key={comment.id} id={comment.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
