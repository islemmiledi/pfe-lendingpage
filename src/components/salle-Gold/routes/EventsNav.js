import React from "react";
import PageHeader from "../components/PageHeader";
// import Classes from "../components/Classes";
import ChoseUs from "../components/ChoseUs";
import Testimonial from "../components/Testimonial";

import Events from "../components/Events";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function EventsNav() {
  return (
    <>
      <Navbar />
      <PageHeader title="event" readOnly />
      <Events />
      <ChoseUs />
      <Testimonial />
      <Footer />
    </>
  );
}
