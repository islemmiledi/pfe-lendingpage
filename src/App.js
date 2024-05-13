import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/home";
// import AboutUsPage from "./components/AboutUs/aboutus"; // adjust the import path as necessary
// import Coach from "./components/coach/coach";
import Contact from "./components/contact/contact";
import NosSalle from "./components/Nos Salle/nossalle";
import NosPartenaire from "./components/Nos Partenaire/nospartenaire";
// import SalleDetails from "./components/SalleDetails/salledetails"; // Assurez-vous que le chemin d'importation est correct
import Legends from "./components/Salles/Legends/Legends";

// Assurez-vous que le chemin d'importation est correct

import { Toaster } from "react-hot-toast";
import LoaderWithOverlay from "./components/overlay-loader";

function App() {
  const [isLoading] = React.useState(false);

  return (
    <Router>
      <div className="App">
        {isLoading && (
          <div className="max-h-7xl ">
            {" "}
            <LoaderWithOverlay></LoaderWithOverlay>
          </div>
        )}
        {/* Inclure Nav ici pour qu'elle apparaisse sur toutes les pages */}
        <Toaster />
        {/* Any common components or layout you want to include on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nossllee" element={<NosSalle />} />
          {/* <Route path="/about-us" element={<AboutUsPage />} /> */}
          <Route path="/nospartenairee" element={<NosPartenaire />} />
          {/* <Route path="/programs" element={<Program />} /> */}
          {/* <Route path="/coache" element={<Coach />} /> */}
          <Route path="/contacte" element={<Contact />} />
          <Route
            path="/legends"
            element={
              <>
                <NavLegends />
                <Legends />
              </>
            }
          />

          {/* <Route path="/salledetails/:id" element={<SalleDetails />} /> */}
          {/* Ajout de la route pour les détails de la salle */}
          {/* Additional routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
