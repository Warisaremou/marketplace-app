import { useEffect, useState } from "react";
// import QuantitySelect from "../components/QuantitySelect";
import { ProductData } from "../context/ProductContext";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "./../services/products/getOneProduct";
import { productType } from "../types/entities";
import { CheckBadgeIcon, PhoneIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import ProductReviews from "../components/Products/ProductReviews";
import clsx from "clsx";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Skeleton from "./../utils/Skeleton";
import { toast } from "react-hot-toast";
import { CartData } from "./../context/CartContext";
import { addReview } from "./../services/reviews/addReview";
import Avatar from "../utils/Avatar";
import { UserLogged } from "../context/UserLoggedContext";
import CartModal from "../utils/CartModal";

function Product() {
  const { id } = useParams();
  const { meData } = UserLogged();
  const [productImgList, setProductImgList] = useState<string[]>([]);
  const [ratingAverage, setRating] = useState<number[]>([]);
  const [quantity, setQuantity] = useState<number>(1);
  const [mainImage, setMainImage] = useState("");
  const [selectedRate, setSelectedRate] = useState<number>(0);
  const [comment, setComment] = useState({ rating: 0, review: "" });
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = CartData();
  const [productInfo, setProductInfo] = useState<productType>({} as productType);
  const productId = productInfo.id;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getOneProduct(id)
      .then((res) => {
        setProductInfo(res.data);
        // console.log(res.data);
        setProductImgList(res.data.pictures.path);
        setMainImage(res.data?.pictures?.path[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // Return to previous path
  const handleGoBack = () => {
    navigate(-1);
  };

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
    // console.log(productId, comment);
    addReview(productId, comment.rating, comment.review)
      .then((res) => {
        // console.log(res);
        window.location.reload();
        toast.success("Votre avis a été ajouté avec succès !", {
          style: {
            borderRadius: "5px",
            background: "#0FDE12",
            color: "#fff",
            fontSize: "12px",
          },
        });
        // setOpenCommentField(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // add product to cart
  const handleAddToCart = ({ productInfo, quantity }: any | number) => {
    if (quantity > 0) {
      addToCart({ productInfo, quantity });
      setOpen(true);
    }
  };

  return (
    <div className="mb-24 md:mb-0 mx-5 md:mx-10">
      <button onClick={handleGoBack} className="text-blue-color flex pb-5 items-center">
        <ArrowLeftIcon className="icon-blue" /> Retour
      </button>
      <CartModal open={open} setOpen={setOpen} />
      {/* Product Info */}
      {isLoading ? (
        <Skeleton />
      ) : (
        <div>
          <Link
            to={`member/${productInfo?.seller?.id}`}
            // to={productInfo?.seller?.id !== meData.id ? `member/${productInfo?.seller?.id}` : "profile"}
            className="flex items-center p-2 cursor-pointer mb-2"
          >
            {productInfo?.seller?.photo == null ? (
              <Avatar />
            ) : (
              <Avatar src={productInfo?.seller?.photo?.path} />
            )}
            <span className="pl-2 text-xs font-medium flex items-center">
              {productInfo?.seller?.username}
              {productInfo?.seller?.id >= 10 && (
                <CheckBadgeIcon className="h-4 fill-blue-color" />
              )}{" "}
            </span>
          </Link>
          <div className="flex gap-14 flex-col md:flex-row">
            <div className="md:w-3/4">
              <div className="w-full h-[23rem] md:h-80 lg:h-[30rem] xl:h-[37rem] overflow-hidden rounded-md bg-cover">
                <img src={mainImage} className="h-full w-full object-cover" />
              </div>
              <div className="grid grid-cols-3 gap-4 lg:gap-6 mt-6">
                {productImgList.map((productImg, index) => (
                  <div
                    className={clsx(
                      "w-auto h-24 md:h-[85px] lg:h-24 xl:h-36 overflow-hidden rounded-md bg-cover cursor-pointer hover:opacity-70 duration-200",
                      mainImage == productImg && "opacity-70 border-4 border-blue-color"
                    )}
                    key={`${index}-${productImg}}`}
                  >
                    <img
                      src={productImg}
                      className="w-full h-full object-cover"
                      onClick={() => setMainImage(productImg)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="text-justify md:w-full">
              {/* Product Details */}
              <h3 className="product-name"> {productInfo?.name} </h3>
              <p className="product-description">
                Description: <span className="font-normal block">{productInfo?.description}</span>
              </p>
              <p className="product-quantity">
                Quantité: <span className="font-normal">{productInfo?.quantity}</span>
              </p>
              <p className="product-mark">
                Marque: <span className="font-normal">{productInfo?.mark}</span>
              </p>
              <p className="product-price">
                Prix: <span className="font-normal"> {productInfo?.price} FCFA</span>
              </p>
              <p className="product-status">
                Etat:
                <span className="ml-1 text-xs font-normal bg-blue-color text-white p-1 rounded-full">
                  {productInfo?.status?.name}
                </span>
              </p>
              <div className="flex mb-5">
                <StarIcon className="h-6 w-6 text-yellow-300 cursor-pointer" />
                <h4 className="text-lg pl-1 font-semibold text-yellow-300">4.8</h4>
                {/* {console.log(productInfo?.reviews)} */}
                {/* {productInfo?.reviews.map(
                  (advice) => (
                    console.log(advice.rating)
                    // setRating(advice.rating)
                  )
                  
                  // I want to calculate the average of all the ratings
                )} */}
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
              </div>
              <div className="flex flex-col gap-6 md:flex-row">
                <button
                  className="add-btn"
                  onClick={() => handleAddToCart({ productInfo, quantity })}
                >
                  <ShoppingBagIcon className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </button>
                {/* {console.log(cart)} */}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-blue-color mb-5">Avis des clients </h3>
            {productInfo?.reviews?.length <= 0 && (
              <h1 className="text-sm text-gray-500">Aucun commentaire sur le produit</h1>
            )}
            {productInfo.reviews.map((comment) => (
              <ProductReviews key={comment.id} id={comment.id} />
            ))}
          </div>
          {/* Comment Field Section */}
          <div className="mt-3">
            <textarea
              placeholder="Ajoutez un commentaire"
              name="comment"
              cols={40}
              rows={4}
              value={comment.review}
              onChange={(e) => setComment({ ...comment, review: e.target.value })}
              className="text-sm border border-gray-300 focus:border-blue-color focus:text-gray-800 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-color rounded-md p-2 resize-none"
            ></textarea>
            <button className="btn text-xs block" onClick={() => addComment()}>
              Commentez
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
