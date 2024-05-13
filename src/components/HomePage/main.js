// import React from "react";
// // import backgroundImage from '../../assets/bg.png'; // Assurez-vous que le chemin vers votre image de fond est correct

// const Main = () => {
//   return (
//     <div
//       className="relative flex items-center justify-center"
//       style={{
//         backgroundColor: "black", // Utilisation de la couleur noire comme fond
//         height: "100vh", // prend toute la hauteur de la fenêtre
//       }}
//     >
//       {/* Contenu de la section principale ici */}
//       <div className="text-center">
//         {/* <h1
//           className="text-6xl font-bold uppercase leading-none tracking-wide"
//           style={{ color: "#fec600" }}
//         >
//           Welcome to <br /> <span style={{ color: "#ffffff" }}>FITLINE</span>
//         </h1> */}
//         <p className="mt-4 text-lg font-light text-white">
//           Rejoignez la révolution du fitness en ligne. Créez la vitrine
//           numérique de votre salle de sport dès aujourd'hui.
//         </p>
//         <a
//           href="#more"
//           className="mt-8 inline-block bg-yellow-500 text-white font-bold py-2 px-4 rounded"
//         >
//           READ MORE
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Main;

import React from "react";
// Importez votre feuille de style CSS avec les animations ici
import "./Main.css";

const Main = () => {
  // Styles pour le texte animé
  const slideInStyle = {
    animation: "slideInFromLeft 3s ease-out forwards",
    transform: "translateX(-100%)",
    fontSize: "36px", // Ajustez la taille de police comme dans l'image
    fontFamily: "sans-serif", // Choisissez une police similaire à celle de l'image
    fontWeight: "bold", // Police en gras
    textTransform: "uppercase", // Texte en majuscules
    letterSpacing: "2px", // Espacement entre les lettres
    color: "#ffffff", // Couleur du texte
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Ombre portée pour le texte
    marginTop: "20px", // Ajustez selon vos besoins
    maxWidth: "600px", // Ajustez selon vos besoins pour le wrapping du texte
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      <div className="text-center">
        <p className="text-white" style={slideInStyle}>
          Rejoignez la révolution du fitness en ligne.
          <br />
          Créez la vitrine numérique de votre salle de sport dès aujourd'hui.
        </p>
        <a
          href="#more"
          className="mt-8 inline-block bg-red-500 text-white font-bold py-2 px-4 rounded"
          style={{
            backgroundColor: "#e53e3e", // La couleur du bouton de l'image
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)", // Ombre portée pour le bouton
          }}
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default Main;
