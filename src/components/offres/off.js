// src/components/Program/Bg.js
import React from "react";
import background from "../../assets/program.jpg"; // Make sure the path is correct

const OFF = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh", // Adjust the height as needed
      }}
    >
      {/* Overlay to add a darker shade on the image, if needed */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Title */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-yellow-400"> Offres</h1>
      </div>
    </section>
  );
};

export default OFF;
