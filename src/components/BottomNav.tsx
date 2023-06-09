import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  BellIcon,
  HomeIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { UserLogged } from "../context/UserLoggedContext";
import CustomLink from "./CustomLink";

function BottomNav() {
  const { meData } = UserLogged();
  const { getItem } = useLocalStorage();
  const userToken = getItem("accessToken");

  const bottomMenu = [
    {
      name: "Acceuil",
      path: "/home",
      icon: HomeIcon,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: Squares2X2Icon,
    },
    {
      name: "Vendre",
      path: "/sell-product",
      icon: PlusCircleIcon,
    },
    {
      name: "Panier",
      path: "/cart",
      icon: ShoppingBagIcon,
    },
    {
      name: "Profile",
      path: `profile${userToken ? `/${meData?.username}` : ""}`,
      icon: UserCircleIcon,
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 right-0 mx-auto md:hidden bg-gray-50 border-t-[1px] border-gray-200">
      <nav className="flex justify-between items-center py-2 px-4">
        {bottomMenu.map(({ icon: Icon, ...menu }) => (
          <li key={menu.path}>
            <CustomLink to={`${menu.path}`}>
              <Icon className="bottom-icon stroke-gray-500" />
              <span className="text-[10px] font-medium text-gray-500">{menu.name}</span>
            </CustomLink>
          </li>
        ))}
      </nav>
    </div>
  );
}

export default BottomNav;
