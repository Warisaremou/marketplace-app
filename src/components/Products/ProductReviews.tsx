// import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { getReview } from "../../services/reviews/getReview";
import { reviewsType } from "../../types/entities";

function ProductReviews(id: any) {
  const [comment, setComment] = useState<reviewsType>({} as reviewsType);
  const commentId = id.id;
  const date = new Date(comment?.createdAt || "2021-01-01");
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const locale = "fr-FR";

  const starList = [];

  useEffect(() => {
    getReview(commentId)
      .then((res) => {
        setComment(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  for (let i = 0; i < comment.rating; i++) {
    starList.push(i);
  }

  return (
    <div className="max-w-[600px] flex items-start gap-2 text-justify mb-5">
      {/* {comment.user?.photo == null ? (
        <Avatar rounded={true} size="sm" />
      ) : (
        <Avatar img={comment.user?.photo?.path} rounded={true} />
      )} */}
      <div className="pb-5 border-b flex-1">
        <h3>{comment.user?.username}</h3>
        <p className="text-gray-400 text-sm">
          {new Intl.DateTimeFormat(locale, options).format(date)}
        </p>
        <p className="flex my-2">
          {starList.map((star) => (
            <StarIcon key={star} className="star" />
          ))}
        </p>
        <p className="review-comment">{comment.review}</p>
      </div>
    </div>
  );
}

export default ProductReviews;
