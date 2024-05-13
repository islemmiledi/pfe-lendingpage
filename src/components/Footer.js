import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from "react-icons/fa";

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      // try {
      //   const response = await fetch("http://localhost:8080/footer/footer");
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const [data] = await response.json(); // Assuming the API returns an array with one object
      //   setFooterData(data);
      // } catch (error) {
      //   console.error(`Could not fetch footer data: ${error}`);
      // }
    };

    fetchFooterData();
  }, []);

  if (!footerData) return <p>Loading...</p>; // Add a loading state or spinner as needed

  return (
    <footer className="bg-[#FFCB05]">
      <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-black text-2xl" />
          <div>
            <p className="font-bold">Address:</p>
            <p className="text-xs">{footerData.Address}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-black text-2xl" />
          <div>
            <p className="font-bold">Phone:</p>
            <p className="text-xs">{footerData.Phone}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegClock className="text-black text-2xl" />
          <div>
            <p className="font-bold">Working hours:</p>
            <p className="text-xs">{footerData.WorkingTime}</p>
          </div>
        </div>
      </div>
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

export default Footer;
