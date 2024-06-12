import React, { useEffect } from "react";
import Banner from "../components/Banner";
import GymClass from "../components/GymClass";
import About from "../components/About";
import ChoseUs from "../components/ChoseUs";
import Team from "../components/Team";
import MonthlyPlan from "../components/MonthlyPlan";
import Testimonial from "../components/Testimonial";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

export default function HomeNav() {
  const params = useParams();
  localStorage.setItem("id", params.salleId);

  const salleId = localStorage.getItem("id");

  const data = useSelector((state) => state?.salle?.salle?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);
  return (
    <>
      <Navbar />
      <Banner />
      <GymClass />
      <About />
      <ChoseUs />
      <Team />
      <MonthlyPlan />
      <Testimonial />
      <Footer />
    </>
  );
}
