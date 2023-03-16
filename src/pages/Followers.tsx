import { FollowsData } from "../context/UserFollowsContext";

function Followers() {
  const { userFollowings } = FollowsData();

  console.log(userFollowings);

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <h1 className="font-semibold text-gray-700">Followers</h1>
    </div>
  );
}

export default Followers;
