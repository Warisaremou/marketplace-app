import clsx from "clsx";
import { CheckIcon, UserPlusIcon } from "@heroicons/react/24/outline";

type FollowProps = {
  isFollowed: boolean;
  setIsFollowed: React.Dispatch<React.SetStateAction<boolean>>;
};

function FollowButton({ isFollowed, setIsFollowed }: FollowProps) {
  return (
    <button
      type="button"
      className={clsx(
        "inline-flex justify-center items-center rounded-md px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50",
        isFollowed
          ? "bg-gray-100 border border-gray-300"
          : "bg-blue-color hover:bg-blue-dark-color text-white focus:ring-blue-color focus:outline-none focus:ring-2 focus:ring-offset-2"
      )}
      onClick={() => setIsFollowed(!isFollowed)}
    >
      {!isFollowed ? (
        <>
          <UserPlusIcon className="h-5 w-5 text-white mr-2" aria-hidden="true" />
          <span>Suivre</span>
        </>
      ) : (
        <>
          <CheckIcon className="h-5 w-5 text-gray-500 mr-2" aria-hidden="true" />
          <span>Suivie</span>
        </>
      )}
    </button>
  );
}

export default FollowButton;
