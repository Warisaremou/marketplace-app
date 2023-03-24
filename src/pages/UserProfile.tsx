import { useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserLogged } from "./../context/UserLoggedContext";
import UserDefaultProfile from "../utils/UserDefaultProfile";
import { getFollowers } from "../services/Follows/getFollowers";
import { Link } from "react-router-dom";
import {
  BookmarkIcon,
  EllipsisVerticalIcon,
  InboxIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import { clsx } from "clsx";
import { FollowsData } from "../context/UserFollowsContext";
import { getFollowings } from "../services/Follows/getFollowings";

function UserProfile() {
  const [pop, OpenPop] = useState(false);
  const { meData } = UserLogged();
  const { setUserFollowers, setUserFollowings } = FollowsData();
  const { removeFromLocalStorage, getItem } = useLocalStorage();
  const userToken = getItem("accessToken");

  // console.log(meData.productsForSale);
  useEffect(() => {
    getFollowers(meData?.id)
      .then((res) => {
        // console.log(res.data);
        setUserFollowers(res.data);
      })
      .catch((err) => console.log(err));
    getFollowings(meData?.id)
      .then((res) => {
        // console.log(res.data);
        setUserFollowings(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const disconnectMe = () => {
    removeFromLocalStorage("accessToken");
    window.location.pathname = "/profile";
  };

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  const tabs = [
    {
      name: "Publications",
      href: "#",
      icon: InboxIcon,
      current: true,
    },
    {
      name: "Favories",
      href: "#",
      icon: BookmarkIcon,
      current: false,
    },
  ];

  return (
    <div className="pt-5 items-center px-4 md:px-20">
      <div className="grid justify-center md:grid-cols-4">
        <div className="relative">
          <div
            className={clsx(
              "profile-bg-cover relative border-[3px]",
              meData?.status?.id == 1 && "border-green-500"
            )}
          >
            {meData.photo == null ? (
              <UserDefaultProfile />
            ) : (
              <img
                src={meData.photo.path}
                alt=""
                className="w-full h-full object-cover outline-none mx-auto relative"
              />
            )}
          </div>
          {/* {meData.status?.id === 1 && <span className="active"></span>} */}
        </div>
        <div className="md:col-span-2 py-2 md:pl-5">
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
            {userToken ? (
              <h1 className="font-medium text-xl text-gray-600">{meData.username}</h1>
            ) : (
              <div className="text-sm">
                Vous n'êtes pas connecté
                <Link to="/login" className="pl-1 text-red-500">
                  s'indentifier
                </Link>
              </div>
            )}
          </div>

          {userToken && (
            <div className="flex items-center text-xs lg:text-sm gap-5 py-3 mt-2">
              <p className="user-actions-follows">
                <span>{meData?.productsForSale?.length}</span> publications
              </p>
              <Link to="followers" className="user-actions-follows">
                <span>{meData?.followers?.length}</span> Abonnés
              </Link>
              <Link to="followings" className="user-actions-follows">
                <span>{meData?.followings?.length}</span> Abonnement
              </Link>
            </div>
          )}
        </div>
        {userToken && (
          <div className="relative">
            <div className="flex justify-center">
              <div className="p-2 text-sm text-gray-700 flex md:block justify-center">
                <Link to="edit" type="button" className="update-btn">
                  <PencilSquareIcon className="w-5 h-5 stroke-gray-700" />
                  Modifier profile
                </Link>
              </div>
              <EllipsisVerticalIcon
                onClick={() => OpenPop(!pop)}
                className="h-6 w-6 bg-gray-100 rounded-full my-auto stroke-gray-600 md:my-0 md:mt-4 cursor-pointer"
              />
            </div>
            {pop && (
              <div className="absolute top-16 right-6 max-md: h-auto bg-red-500 z-10 rounded-lg">
                <p onClick={() => disconnectMe()} className="text-sm p-2 text-white cursor-pointer">
                  Se déconnecter
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div>
        <div className="block">
          <div className="">
            <nav className="grid grid-cols-2" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? "border-blue-color text-blue-color"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "group inline-flex justify-center items-center py-4 text-center border-b-2 font-medium text-xs md:text-sm"
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
            <div className="py-6">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
