import { useState } from "react";
import { Dialog } from "@headlessui/react";
import logo from "../../assets/logo.png";
import FooterS from "../FooterS";
import Header from "../header";
import Indexhome from "./main";
import HeaderSalle from "../headersalle";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div className="bg-white">
        <HeaderSalle />

        <Indexhome />

        <FooterS />
      </div>
    </div>
  );
}
