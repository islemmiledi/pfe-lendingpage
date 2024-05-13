// // src/components/SalleDetails/SalleDetails.js

// import React from "react";
// import { useParams } from "react-router-dom";
// import Navigation from "./NavLegends"; // Assurez-vous que le chemin d'importation est correct
// import image from "../../assets/image.jpg"; // Assurez-vous que le chemin est correct

// const staticData = [
//   {
//     id: 1,
//     title: "Legends",
//     description: "Description de Legends...",
//     image: image,
//   },
//   {
//     id: 2,
//     title: "Fitline",
//     description: "Description de Fitline...",
//     image: image,
//   },
//   {
//     id: 3,
//     title: "California",
//     description: "Description de California...",
//     image: image,
//   },
// ];

// const SalleDetails = () => {
//   const { id } = useParams();
//   const salle = staticData.find((s) => s.id === parseInt(id));

//   return (
//     <div>
//       <Navigation /> {/* Ajout de la Navbar en haut de la page */}
//       <div className="bg-white text-black p-8">
//         {salle ? (
//           <>
//             <img
//               src={salle.image}
//               alt={salle.title}
//               className="w-full h-56 object-cover"
//             />
//             <h1 className="text-4xl font-bold text-red-600 my-4">
//               {salle.title}
//             </h1>
//             <p>{salle.description}</p>
//           </>
//         ) : (
//           <p>Salle non trouvée.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SalleDetails;
