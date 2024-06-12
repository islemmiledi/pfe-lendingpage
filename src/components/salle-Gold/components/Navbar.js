import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const HeaderSalle = () => {
  const location = useLocation();

  const navigation = [
    { name: "Home", href: `/salle-gold` },
    { name: "About Us", href: "/aboutgold" },
    { name: "Classes", href: "/classess" },
    { name: "Events", href: "/event" },
    { name: "Plans", href: "/monthlyplan" },
    { name: "Produit", href: "/produit" },
    { name: "Contact", href: "/contact" },
    { name: "Panier", href: "/panier" },
  ];

  return (
    <header className="absolute w-full bg-transparent z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                {/* {data && (
                  <img
                    className="h-16 w-auto"
                    src={data?.homes[0]?.file}
                    alt="FITLINE"
                  />
                )} */}
                {/* Increase the height of the logo */}
              </NavLink>
            </div>
            <div className="hidden md:flex items-center space-x-4 ml-10">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  activeClassName="border-b-2 border-red-500 text-white" // Add a yellow border bottom to the active link
                  className={
                    location.pathname === item.href // Check if the current path matches the NavLink href
                      ? "text-white border-b-2 border-red-500 px-3 py-2 text-sm font-medium relative"
                      : "text-white hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500" />
                  )}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FontAwesomeIcon icon={faFacebook} size="sm" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FontAwesomeIcon icon={faInstagram} size="sm" />
            </a>
            <a
              href="https://www.yourwebsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FontAwesomeIcon icon={faGlobe} size="sm" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSalle;
