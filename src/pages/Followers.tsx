import { FollowsData } from "../context/UserFollowsContext";
import { useNavigate } from "react-router-dom";
import MemberCard from "../utils/MemberCard";
import { userType } from "../types/entities";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function Followers() {
  const { userFollowers } = FollowsData();
  const navigate = useNavigate();

  // console.log(userFollowers);
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <button onClick={handleGoBack} className="text-blue-color flex pb-5 items-center">
        <ArrowLeftIcon className="icon-blue" /> Retour
      </button>
      <h1 className="font-semibold text-gray-700">Abonnés</h1>
      <div className="mt-5">
        {userFollowers.length <= 0 ? (
          <p className="text-sm text-gray-500">Vous navez aucun abonné pour le moment</p>
        ) : (
          <div>
            {userFollowers.map((follower: userType) => (
              <MemberCard key={`${follower.id}`} follower={follower} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Followers;
