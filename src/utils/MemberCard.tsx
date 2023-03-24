import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FollowButton from "./FollowButton";
import { userType } from "../types/entities";
import Avatar from "./Avatar";

type MemberProps = {
  following?: userType;
  follower?: userType;
};

function MemberCard({ following, follower }: MemberProps) {
  const [isFollowed, setIsFollowed] = useState(false);
  useEffect(() => {
    if (following) {
      setIsFollowed(true);
    }
  }, []);

  return (
    <div>
      {/* Following member card */}
      {following && (
        <div className="flex mb-2 border-b pb-5 justify-between items-center">
          <Link to={`/member/${following.id}`} className="flex gap-2 items-center">
            <div className="border-2 rounded-full">
              {following?.photo == null ? <Avatar /> : <Avatar src={following?.photo?.path} />}
            </div>
            <div>
              <h3 className="text-sm md:text-base">{following?.username}</h3>
            </div>
          </Link>
          <FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
        </div>
      )}

      {/* Follower member card */}
      {follower && (
        <div className="flex mb-2 border-b pb-5 justify-between items-center">
          <Link to={`/member/${follower.id}`} className="flex gap-2 items-center">
            <div className="border-2 rounded-full">
              {follower?.photo == null ? <Avatar /> : <Avatar src={follower?.photo?.path} />}
            </div>
            <div>
              <h3 className="text-sm">{follower?.username}</h3>
            </div>
          </Link>
          <FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
        </div>
      )}
    </div>
  );
}

export default MemberCard;
