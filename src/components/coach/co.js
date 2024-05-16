// src/components/Program/Co.js
import React from "react";
import background from "../../assets/back.png"; // Assurez-vous que le chemin d'accès est correct

const Co = () => {
  return (
    <section
      className="relative flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh", // Ajustez la hauteur selon vos besoins
      }}
    >
      {/* Overlay pour ajouter une nuance plus foncée sur l'image, si nécessaire */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Titre */}
      <div className="relative z-10">
        <h1 className="text-6xl font-bold text-yellow-400">Our Coachs</h1>
      </div>
    </section>
  );
};

export default Co;
