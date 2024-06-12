import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";
import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Nos Salles", href: "/nos-salles" },
  { name: "Services", href: "/service" },
  { name: "Contact", href: "/contacte" },
  { name: "About", href: "/about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-10 backdrop-blur-md bg-white/30 bg-opacity-70">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-16 w-auto" src={logo} alt="FITLINE" />
            </NavLink>
          </div>
        </div>
        <div className="hidden sm:flex sm:space-x-8 mx-auto">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={classNames(
                location.pathname === item.href
                  ? "border-yellow-500 text-black"
                  : "border-transparent text-black hover:border-gray-300 hover:text-gray-700",
                "inline-flex items-center px-2 py-1 border-b-2 text-lg font-medium font-roboto whitespace-nowrap"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-black hover:text-gray-600"
            aria-label="Facebook"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600"
            aria-label="Instagram"
          >
            <FaInstagramSquare className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="-mr-2 flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <XIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <Transition
        show={mobileMenuOpen}
        as={Fragment}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="sm:hidden backdrop-blur-md bg-white/30 bg-opacity-70">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={classNames(
                  location.pathname === item.href
                    ? "bg-yellow-50 border-yellow-500 text-black"
                    : "border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
                  "block pl-3 pr-4 py-2 border-l-4 text-base font-medium font-roboto"
                )}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
