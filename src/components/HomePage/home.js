import { useState } from "react";
import { Dialog } from "@headlessui/react";
import logo from "../../assets/logo.png";
import Footer from "../Footer";
import Header from "../header";
import Indexhome from "./main";
import Service from "./service";
import Client from "./client";
import Theme from "./theme";
import OurSalle from "./oursalle";
// import AboutLending from "./aboutlending";
import Testimonial from "./testimonial";
import CounterSection from "../NosSalle/countersection";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-white">
        <Header />
        <Indexhome />
        <CounterSection />
        {/* <Offer /> */}

        {/* <AboutLending /> */}
        <Client />
        <Service />
        <Theme />
        <OurSalle />
        <Testimonial />

        <Footer />
      </div>
    </div>
  );
}
