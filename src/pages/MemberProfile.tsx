import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FollowsData } from "../context/UserFollowsContext";
import { getMemberInfo } from "../services/user/getMemberInfo";
import { clsx } from "clsx";
import { PhoneIcon } from "@heroicons/react/20/solid";
import { EllipsisHorizontalIcon, InboxIcon, UserIcon } from "@heroicons/react/24/outline";
import { userType } from "../types/entities";
import UserDefaultProfile from "../utils/UserDefaultProfile";
import FollowButton from "../utils/FollowButton";
import memberBg from "../assets/images/member-bg.jpg";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function MemberProfile() {
  const { id } = useParams();
  const [memberInfo, setMemberInfo] = useState<userType>({} as userType);
  const [isFollowed, setIsFollowed] = useState(false);
  const { userFollowings } = FollowsData();

  useEffect(() => {
    getMemberInfo(id)
      .then((res) => {
        console.log(res.data.id);
        setMemberInfo(res.data);
      })
      .catch((error) => console.log(error));

    console.log(userFollowings);

    if (userFollowings.find((following: userType) => following?.id === memberInfo.id)) {
      setIsFollowed(true);
    }
  }, [userFollowings]);

  const tabs = [
    {
      name: "Profile",
      href: "#",
      icon: UserIcon,
      current: true,
    },
    {
      name: "Publications",
      href: "#",
      icon: InboxIcon,
      current: false,
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div>
        <div>
          <img className="h-32 w-full object-cover lg:h-48" src={memberBg} />
          {/* {console.log(memberInfo)} */}
        </div>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div className={clsx("profile-bg-cover relative border-4")}>
              {memberInfo.photo == null ? (
                <UserDefaultProfile />
              ) : (
                <img
                  src={memberInfo.photo.path}
                  alt=""
                  className="h-full w-full object-cover outline-none relative mx-auto"
                />
              )}
            </div>
            <div className="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="mt-0 min-w-0 flex-1 sm:hidden 2xl:block">
                <h1 className="font-medium text-lg text-gray-600 text-center">
                  {memberInfo?.username}
                </h1>
              </div>
              {/* Mobile view */}
              <div className="grid grid-cols-3 mb-2 md:hidden items-center text-xs lg:text-sm gap-5 py-3 mt-2">
                <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
                  <span>3</span> publications
                </p>
                <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
                  <span>12</span> Abonnés
                </p>
                <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
                  <span>4</span> Abonnement
                </p>
              </div>

              {/* buttons */}
              <div className="text-xs md:text-sm flex items-center justify-around gap-x-5">
                <FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-color focus:ring-offset-2"
                >
                  <PhoneIcon className="mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                  <span>Contacter</span>
                </button>
                <div>
                  <EllipsisHorizontalIcon className="h-8 w-8 stroke-gray-500 rounded-md border border-gray-300" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
            <h1 className="font-medium text-xl text-gray-600 ml-1">{memberInfo?.username}</h1>
          </div>

          {/* Desktop wiew */}
          <div className="items-center text-xs lg:text-sm gap-5 py-3 mt-2 hidden md:flex">
            <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
              <span>3</span> publications
            </p>
            <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
              <span>12</span> Abonnés
            </p>
            <p className="flex flex-col items-center lg:flex-row gap-1 text-gray-700 font-medium">
              <span>4</span> Abonnement
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <div className="block">
          <div>
            <nav className="grid grid-cols-2" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-blue-color text-blue-color"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex justify-center items-center py-4 mt-4 text-center border-b-2 font-medium text-xs md:text-sm"
                  )}
                  aria-current={tab.current ? "page" : undefined}
                >
                  <tab.icon
                    className={classNames(
                      tab.current ? "text-blue-color" : "text-gray-400 group-hover:text-gray-500",
                      "-ml-0.5 mr-2 h-5 w-5"
                    )}
                    aria-hidden="true"
                  />
                  {tab.name}
                </a>
              ))}
            </nav>

            {/* Tabs content */}
            <div className="py-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberProfile;
