import { Link } from "react-router-dom";
import { clsx } from "clsx";
import { Facebook, Instagram, Linkedin, Youtube } from "react-bootstrap-icons";
import Logo from "../assets/svg/Logo.svg";

type Props = {
  props?: any;
};

const navigation = {
  main: [
    { name: "A propos", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Travails", href: "#" },
    { name: "Partenaires", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Youtube",
      href: "#",
      icon: Youtube,
    },
  ],
};
function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 text-sm hidden md:block">
      <div className="w-full overflow-hidden py-10 px-4 sm:px-6 md:px-20">
        <div className="my-6 flex justify-between space-x-6">
          <div>
            <Link to="/home" className="flex gap-x-2 items-center">
              <img src={Logo} alt="" className="w-7 h-7" />
              <h1 className="text-xl text-blue-color font-semibold">MARKET</h1>
            </Link>
            <p className="py-3">Pour en savoir plus sur nous, visitez nos pages</p>
            <div className="flex gap-x-4 items-center">
              {navigation.social.map((item) => (
                <li key={item.name} className="text-gray-400 hover:text-gray-500">
                  {/* <span className="sr-only">{item.name}</span> */}
                  <Link
                    to={`${item.href}`}
                    className={clsx(
                      "text-lg",
                      item.name == "Facebook" || item.name == "LinkedIn"
                        ? "text-blue-color"
                        : "text-red-500"
                    )}
                    aria-hidden="true"
                  >
                    <item.icon />
                  </Link>
                </li>
              ))}
            </div>
          </div>
          <nav className="flex flex-wrap justify-center" aria-label="Footer">
            {navigation.main.map((item) => (
              <div key={item.name} className="px-5 py-2">
                <a href={item.href} className="text-sm text-gray-500 hover:text-gray-900">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
        </div>
        <p className="text-center text-xs md:text-sm text-gray-400">
          &copy; 2023 my_market. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
