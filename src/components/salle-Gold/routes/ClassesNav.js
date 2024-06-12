import React from "react";
import PageHeader from "../components/PageHeader";
import Classes from "../components/Classes";
import ChoseUs from "../components/ChoseUs";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import MonthlyPlan from "../components/MonthlyPlan";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ClassesNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="Classes" readOnly />
      <Classes />
      <ChoseUs />
      <MonthlyPlan />
      <Testimonial />
      <Footer />
    </>
  );
}
