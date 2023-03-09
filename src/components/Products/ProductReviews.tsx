// import { Avatar } from "flowbite-react";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { getReview } from "../../services/reviews/getReview";
import { reviewsType } from "../../types/entities";
import Avatar from "../../utils/Avatar";
import { Link } from "react-router-dom";

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
    <div className="max-w-[600px] flex items-start gap-x-2 text-justify mb-5">
      <Link to={`member/${comment?.user?.id}`}>
        {comment.user?.photo == null ? <Avatar /> : <Avatar src={comment.user?.photo?.path} />}
      </Link>
      <div className="pb-5 border-b flex-1">
        <Link to={`member/${comment?.user?.id}`}>
          <h3>{comment.user?.username}</h3>
        </Link>
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
