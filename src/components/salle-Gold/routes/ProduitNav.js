import React from "react";
import PageHeader from "../components/PageHeader";

import Produit from "../components/Produit";

import Testimonial from "../components/Testimonial";
import MonthlyPlan from "../components/MonthlyPlan";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ProduitNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="Products" readOnly />
      <Produit />

      <MonthlyPlan />
      <Testimonial />
      <Footer />
    </>
  );
}
