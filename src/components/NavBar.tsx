import { useState } from "react";
import AlertNotification from "./AlertNotification";
import { Link } from "react-router-dom";
import BottomNav from "./BottomNav";
import CustomLink from "./CustomLink";
import Logo from "../assets/svg/Logo.svg";
import { MagnifyingGlassIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { GripVertical } from "react-bootstrap-icons";
import {
  ArchiveBoxArrowDownIcon,
  BellIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import MobileSideBar from "./MobileSideBar";

function NavBar() {
  const [open, setOpen] = useState(false);

  const navMenu = [
    {
      name: "Commandes",
      path: "/orders",
      icon: ArchiveBoxArrowDownIcon,
    },
    {
      name: "Notifications",
      path: "/notifications",
      icon: BellIcon,
    },
    {
      name: "Panier",
      path: "/cart",
      icon: ShoppingBagIcon,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: UserCircleIcon,
    },
  ];

  const list = [
    {
      name: "Qui sommes-nous ?",
      path: "about",
    },
    {
      name: "Aide",
      path: "help",
      icon: QuestionMarkCircleIcon,
    },
  ];

  return (
    <div>
      <div className="px-4 md:px-10 py-3 md:py-6">
        <AlertNotification />
        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between border-b-2 pb-4">
          <Link to="/home" className="flex gap-x-2 items-center">
            <img src={Logo} alt="" className="w-9 h-9" />
            <h1 className="text-2xl text-blue-color font-semibold">MARKET</h1>
          </Link>
          <div className="relative text-white focus-within:text-gray-600">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className="h-5 w-5 fill-gray-500" aria-hidden="true" />
            </div>
            <input
              className="search-input w-60 lg:w-96 text-sm lg:text-base"
              placeholder="Rechercher un produit"
              type="search"
            />
          </div>
          <ul className="nav-link">
            {navMenu.map(({ icon: Icon, ...menu }) => (
              <li key={`${menu.name}`} className="">
                <CustomLink to={menu.path}>
                  <Icon className="bottom-icon stroke-gray-500" />
                  <span className="text-[10px] font-medium text-gray-500">{menu.name}</span>
                </CustomLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center justify-between border-b-2 py-2">
          <Link to="/categories" className="flex items-center gap-x-1">
            <Squares2X2Icon className="bottom-icon stroke-gray-500" />
            <span className="text-sm text-gray-700">Toutes les catégories</span>
          </Link>
          <ul className="flex items-center gap-x-2">
            {list.map(({ icon: Icon, ...item }) => (
              <li key={`${item.name}`} className="">
                <CustomLink to={item.path}>
                  {Icon ? (
                    <div className="flex flex-row-reverse items-center gap-x-1">
                      <Icon className="w-5 h-5 fill-gray-500 hover:fill-blue-color" />
                      <span className="text-sm font-medium text-gray-500 hover:text-blue-color">
                        {item.name}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-gray-500 hover:text-blue-color">
                      {item.name}
                    </span>
                  )}
                </CustomLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-x-4">
            <select name="language" className="langage-select" defaultValue="Fr">
              <option>Fr</option>
              <option>En</option>
            </select>
            <Link to="/sell-product" className="sell-btn">
              Vendre mon produit
            </Link>
          </div>
        </div>
        {/* Mobile view */}
        <div className="flex justify-between items-center pb-4 border-b-[1px] border-gray-200">
          <div className="flex gap-x-2 items-center md:hidden">
            <img src={Logo} alt="" className="h-9 w-9" />
            <h1 className="text-xl text-blue-color font-semibold">MARKET</h1>
          </div>
          <GripVertical
            onClick={() => setOpen(true)}
            className="bottom-icon fill-gray-500 md:hidden"
          />
        </div>
      </div>

      {/* Mobile view */}
      <MobileSideBar open={open} setOpen={setOpen} />
      <BottomNav />
    </div>
  );
}

export default NavBar;
