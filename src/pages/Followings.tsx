import { FollowsData } from "../context/UserFollowsContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import MemberCard from "../utils/MemberCard";
import { userType } from "../types/entities";

function Followings() {
  const { userFollowings } = FollowsData();
  const navigate = useNavigate();

  // console.log(userFollowings);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <button onClick={handleGoBack} className="text-blue-color flex pb-5 items-center">
        <ArrowLeftIcon className="icon-blue" /> Retour
      </button>
      <h1 className="font-semibold text-gray-600">Abonnements</h1>
      <div className="mt-5">
        {userFollowings.length <= 0 ? (
          <p className="text-sm text-gray-500">Vous navez aucun abonnement pour le moment</p>
        ) : (
          <div>
            {userFollowings.map((following: userType) => (
              <MemberCard key={`${following.id}`} following={following} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Followings;
