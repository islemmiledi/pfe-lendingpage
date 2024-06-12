import React from "react";
import PageHeader from "../components/PageHeader";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="Contact Us" readOnly />
      <Contact />
      <Footer />
    </>
  );
}
