import { useLocalStorage } from "../hooks/useLocalStorage";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowLeftOnRectangleIcon,
  ChatBubbleLeftRightIcon,
  InformationCircleIcon,
  PhoneArrowDownLeftIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import CustomLink2 from "./CustomLink2";
import { UserLogged } from "../context/UserLoggedContext";
import { Link } from "react-router-dom";
import { clsx } from "clsx";

function MobileSideBar({ open, setOpen }: any) {
  const { meData } = UserLogged();
  const { removeFromLocalStorage, getItem } = useLocalStorage();

  const userToken = getItem("accessToken");

  const disconnectMe = () => {
    removeFromLocalStorage("accessToken");
    window.location.reload();
  };

  const sideMenu = [
    {
      name: "Messages",
      path: "/messages",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      name: "Qui sommes-nous",
      path: "/about",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "Besoin d'aide",
      path: "/help",
      icon: InformationCircleIcon,
    },
    {
      name: "Contactez-Nous",
      path: "/help",
      icon: PhoneArrowDownLeftIcon,
    },
  ];

  const authMenu = [
    {
      name: "Se connecter",
      path: "/login",
    },
    {
      name: "S'inscrire",
      path: "/register",
    },
  ];

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative md:hidden z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-72">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-sm font-medium text-gray-700">
                        {userToken ? (
                          `Bienvenue ${meData.username}`
                        ) : (
                          <>
                            {authMenu.map((item) => (
                              <Link
                                to={`${item.path}`}
                                key={item.name}
                                className={clsx(
                                  "pl-2",
                                  item.name == "Se connecter" &&
                                    "text-blue-color border-r-2 pr-2 pl-0"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </>
                        )}
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="mt-5">
                        <ul className="flex flex-col gap-y-6">
                          {sideMenu.map(({ icon: Icon, ...menu }) => (
                            <li key={`${menu.name}`}>
                              <CustomLink2 to={menu.path}>
                                <Icon className="h-5 w-5 stroke-gray-500" />
                                <span className="pl-2 text-sm font-medium text-gray-500">
                                  {menu.name}
                                </span>
                                <span
                                  className={clsx(
                                    menu.name == "Messages"
                                      ? "ml-2 text-xs bg-red-600 rounded-full w-4 h-4"
                                      : "hidden"
                                  )}
                                >
                                  <span className="text-white flex justify-center">2</span>
                                </span>
                              </CustomLink2>
                            </li>
                          ))}
                        </ul>
                        <button
                          onClick={() => disconnectMe()}
                          className="text-red-600 text-sm flex gap-2 pt-6"
                        >
                          <ArrowLeftOnRectangleIcon className="w-5 h-5 stroke-red-600" />
                          Se déconnecter
                        </button>
                        <div className="mt-5 bg-gray-50 py-2 px-1">
                          <select
                            name="language"
                            className="langage-select bg-white font-medium text-gray-600"
                            defaultValue="Fr"
                          >
                            <option>Fr</option>
                            <option>En</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileSideBar;
