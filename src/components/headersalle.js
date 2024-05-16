import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logofitline.png"; // Ensure this path is correct
import { useDispatch } from "react-redux";
import { getOneSalleById } from "../Redux/actions/salle.actions";

const navigation = [
  { name: "Home", href: "/salle/:salleId" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Programs", href: "/programs" },
  { name: "Coache", href: "/coache" },
  { name: "Contacts", href: "/contacte-salle" },
  { name: "Offres", href: "/offers" },
];

const HeaderSalle = () => {
  const location = useLocation();
  // const dispatch = useDispatch();
  // const salle = localStorage.getItem("id");
  // useEffect(() => {
  //   dispatch(getOneSalleById({ id: salle }));
  // }, [dispatch]);

  return (
    <header className="absolute w-full bg-transparent z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img className="h-16 w-auto" src={logo} alt="FITLINE" />{" "}
                
                {/* Increase the height of the logo */}
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    activeClassName="border-b-2 border-yellow-500 text-white" // Add a yellow border bottom to the active link
                    className={
                      location.pathname === item.href // Check if the current path matches the NavLink href
                        ? "text-white border-b-2 border-yellow-500 px-3 py-2 text-sm font-medium relative"
                        : "text-white hover:bg-yellow-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    }
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500" />
                    )}
                    
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderSalle;
