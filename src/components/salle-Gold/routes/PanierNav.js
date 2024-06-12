import React from "react";
import PageHeader from "../components/PageHeader";

import Testimonial from "../components/Testimonial";
import MonthlyPlan from "../components/MonthlyPlan";

import Panier from "../components/Panier";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PanierNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="Panier" readOnly />
      <Panier />
      <MonthlyPlan />
      <Testimonial />
      <Footer />
    </>
  );
}
