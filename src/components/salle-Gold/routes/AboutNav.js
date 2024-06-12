import React from "react";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
// import Features from "../components/Features";
import Team from "../components/Team";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function AboutNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="About Us" readOnly />
      <About />
      {/* <Features /> */}
      <Team />
      <Footer />
    </>
  );
}
