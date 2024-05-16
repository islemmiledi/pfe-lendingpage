import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoaderWithOverlay from "./components/overlay-loader";

import HomePageS from "./components/HomePageS/home";
import AboutUsPage from "./components/AboutUs/aboutus";
import Program from "./components/Program/program";
import Coach from "./components/coach/coach";
import ContactS from "./components/contactS/contact";
import Offres from "./components/offres/offres";
import HomePage from "./components/HomePage/home";
import Contact from "./components/contact/contact";
import NosSalle from "./components/NosSalle/nossalle";
import NosPartenaire from "./components/NosPartenaire/nospartenaire";
// import SalleDetails from "./components/SalleDetails/salledetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <LoaderWithOverlay /> */}
        <Toaster />
        <Routes>
          {/* Specific routes should come before the more general routes */}
          {/* <Route path="/nossllee/:salleId" element={<SalleDetails />} /> */}
          <Route path="/salle/:salleId" element={<HomePageS />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/programs" element={<Program />} />

          <Route path="/coache" element={<Coach />} />
          <Route path="/contacte-salle" element={<ContactS />} />
          <Route path="/offers" element={<Offres />} />
          <Route path="/nos-salles" element={<NosSalle />} />
          {/* <Route path="/nossllee/:salleId" element={<SalleDetails />} /> */}
          <Route path="/nospartenairee" element={<NosPartenaire />} />
          <Route path="/contacte" element={<Contact />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/" element={<HomePageS />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
