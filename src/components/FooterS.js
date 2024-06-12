import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { getOneSalleById } from "../Redux/actions/salle.actions";

const FooterS = () => {
  // Supposons que `footers` est un tableau d'objets footer
  // const data = useSelector((state) => state?.footer?.website?.data?.footers);
  const data = useSelector((state) => state?.salle?.salle?.data?.footers);
  return (
    <footer className="bg-[#FFCB05]">
      {data &&
        data.map((footer) => (
          <div
            key={footer.id}
            className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center"
          >
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-black text-2xl" />
              <div>
                <p className="font-bold">Address:</p>
                <p className="text-xs">{footer.Adresse}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-black text-2xl" />
              <div>
                <p className="font-bold">Phone:</p>
                <p className="text-xs">{footer.NumerodeTelephone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegClock className="text-black text-2xl" />
              <div>
                <p className="font-bold">Working hours:</p>
                <p className="text-xs">{footer.TempsDeTravail}</p>
              </div>
            </div>
          </div>
        ))}
      <div className="flex justify-center my-4">
        <div className="w-1/2 border-t border-white opacity-50"></div>
      </div>
      <div className="text-center">
        <p className="text-black text-xs">
          &copy; 2023 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterS;
