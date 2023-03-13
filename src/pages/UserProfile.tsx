import { useState } from "react";
// import UserInfo from "../components/UserInfo";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserLogged } from "./../context/UserLoggedContext";
import UserDefaultProfile from "../utils/UserDefaultProfile";
import { BookmarkIcon, InboxIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

function UserProfile() {
  const [open, setOpen] = useState(false);
  const { meData } = UserLogged();
  const { removeFromLocalStorage, getItem } = useLocalStorage();
  const userToken = getItem("accessToken");

  const disconnectMe = () => {
    removeFromLocalStorage("accessToken");
    window.location.reload();
  };

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

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }
  // console.log(meData);

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
              <div className="text-xs">
                Vous n'êtes pas connecté
                <Link to="/login" className="pl-1 text-red-500">
                  s'indentifier
                </Link>
              </div>
            )}
          </div>

          <div className="flex items-center text-xs lg:text-sm gap-5 py-3 mt-2">
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

          {/* <UserInfo open={open} setOpen={setOpen} meData={meData} /> */}
          {/* <button
            type="button"
            onClick={() => disconnectMe()}
            className="flex justify-center mt-2 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-md text-xs"
          >
            Se déconnecter
          </button> */}
        </div>
        <div className="p-2 text-sm text-gray-700 flex md:block justify-center">
          <button onClick={() => setOpen(true)} type="button" className="update-btn">
            <PencilSquareIcon className="w-5 h-5 stroke-gray-700" />
            Modifier profile
          </button>
        </div>
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
