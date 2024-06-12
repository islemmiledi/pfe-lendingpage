import React from "react";
import PageHeader from "../components/PageHeader";
import Classes from "../components/Classes";
import ChoseUs from "../components/ChoseUs";
import Testimonial from "../components/Testimonial";
import MonthlyPlan from "../components/MonthlyPlan";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MonthlyPlanNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="Plans" readOnly />
      {/* <Classes />
      <ChoseUs /> */}
      <MonthlyPlan />
      <Testimonial />
      <Footer />
    </>
  );
}
