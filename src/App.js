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
import Service from "./components/HomePage/service";
import HomeNav from "./components/salle-Gold/routes/HomeNav";
import AboutNav from "./components/salle-Gold/routes/AboutNav";
import ClassesNav from "./components/salle-Gold/routes/ClassesNav";
import ContactNav from "./components/salle-Gold/routes/ContactNav";
import EventsNav from "./components/salle-Gold/routes/EventsNav";
import MonthlyPlanNav from "./components/salle-Gold/routes/MonthlyPlanNav";
import ProduitNav from "./components/salle-Gold/routes/ProduitNav";
import PanierNav from "./components/salle-Gold/routes/PanierNav";
// import AboutLending from "./components/AboutLending/aboutlending";
// import SalleDetails from "./components/SalleDetails/salledetails";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <LoaderWithOverlay /> */}
        <Toaster />
        <Routes>
          {/* Specific routes should come before the more general routes */}
          {/* route salle theme silver */}
          <Route path="/salle/:salleId" element={<HomePageS />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/programs" element={<Program />} />
          <Route path="/coache" element={<Coach />} />
          <Route path="/contacte-salle" element={<ContactS />} />
          <Route path="/offers" element={<Offres />} />

          {/* route lending page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/nos-salles" element={<NosSalle />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contacte" element={<Contact />} />

          {/* route salle gold */}

          <Route path="/salle-gold/:salleId" element={<HomeNav />}></Route>
          <Route path="/aboutgold" element={<AboutNav />}></Route>
          <Route path="/classess" element={<ClassesNav />}></Route>
          <Route path="/contact" element={<ContactNav />}></Route>
          <Route path="/event" element={<EventsNav />}></Route>
          <Route path="/monthlyplan" element={<MonthlyPlanNav />}></Route>
          <Route path="/produit" element={<ProduitNav />}></Route>
          <Route path="/panier" element={<PanierNav />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
