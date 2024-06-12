import React from "react";
import { themes } from "./data";

const Theme = () => {
  return (
    <section id="themes" className="w-full min-h-screen bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-2xl font-semibold text-[#f04e3c] mb-4">
            OUR THEMES FOR YOU
          </p>
          <h1 className="text-4xl font-bold text-gray-800">
            Explore Our Exciting Themes
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg p-8 text-center transform transition duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <div className="text-6xl text-[#f04e3c] mb-4">{theme.icon}</div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {theme.type}
                </h2>
                <p className="text-4xl font-bold text-[#f04e3c] mt-4">
                  ${theme.price}
                </p>
                <p className="text-gray-500">Single Class</p>
              </div>
              <ul className="text-gray-600 text-left mb-8 space-y-2">
                {theme.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-[#f04e3c] rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#f04e3c] text-white rounded-lg transition-colors duration-300 hover:bg-[#d03b2d]">
                ENROLL NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Theme;
