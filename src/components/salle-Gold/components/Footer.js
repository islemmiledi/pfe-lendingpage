import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const round = {
    height: "40px",
    width: "40px",
  };

  const dispatch = useDispatch();
  const salleId = localStorage.getItem("id");
  const footers = useSelector((state) => state?.salle?.salle?.data?.footers);
  const footerData = footers?.[0]; // Assuming the footers data is an array

  useEffect(() => {
    if (salleId) {
      dispatch(getOneSalleById({ id: salleId }));
    }
  }, [dispatch, salleId]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!footers) return <p>Loading...</p>;
  if (!footerData) return <p>No footer data available.</p>;

  // Split the working hours into an array
  const workingHours = footerData?.TempsDeTravail?.split("\n") || [
    "Monday - Friday: 8.00 AM - 8.00 PM",
    "Saturday - Sunday: 2.00 PM - 8.00 PM",
  ];

  return (
    <>
      <div className="footer container-fluid mt-5 py-5 px-sm-3 px-md-5 text-white">
        <div className="row pt-5">
          <div className="footer-nav col-lg-3 col-sm-6 mb-5 ps-sm-5 ps-lg-0">
            <h4 className="mb-4">Get In Touch</h4>
            <p>
              <i className="fa fa-map-marker-alt me-2"></i>
              {footerData?.Adresse || "123 Street, New York, USA"}
            </p>
            <p>
              <i className="fa fa-phone-alt me-2"></i>
              {footerData?.NumerodeTelephone || "+012 345 67890"}
            </p>
            <p>
              <i className="fa fa-envelope me-2"></i>
              info@example.com
            </p>
          </div>
          <div className="footer-info col-lg-3 col-sm-6 mb-5">
            <h4 className="mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start link">
              <Link className="text-white text-decoration-none mb-2" to="/">
                <i className="fa fa-angle-right me-2"></i>Home
              </Link>
              <Link
                className="text-white text-decoration-none mb-2"
                to="/about"
              >
                <i className="fa fa-angle-right me-2"></i>About Us
              </Link>
              <Link
                className="text-white text-decoration-none mb-2"
                to="/features"
              >
                <i className="fa fa-angle-right me-2"></i>Our Features
              </Link>
              <Link className="text-white text-decoration-none" to="/contact">
                <i className="fa fa-angle-right me-2"></i>Contact Us
              </Link>
            </div>
          </div>
          <div className="footer-wrap col-lg-3 col-sm-6 mb-5 ps-sm-5 ps-lg-0">
            <h4 className="mb-4">Social Links</h4>
            <div className="d-flex justify-content-start flex-column gap-2 ps-3 ms-sm-4">
              <Link
                className="btn btn-outline-light rounded-circle text-center me-2 px-0"
                style={round}
                to="/"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                className="btn btn-outline-light rounded-circle text-center me-2 px-0"
                style={round}
                to="/"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                className="btn btn-outline-light rounded-circle text-center me-2 px-0"
                style={round}
                to="/"
              >
                <i className="fab fa-instagram"></i>
              </Link>
            </div>
          </div>
          <div className="footer-info col-lg-3 col-sm-6 mb-5">
            <h4 className="mb-4">Opening Hours</h4>
            {workingHours.map((hours, index) => {
              const [days, time] = hours.split(": ");
              return (
                <div key={index}>
                  <h5 className="text-white">{days}</h5>
                  <p className="text-white">{time}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container border-top border-dark pt-5">
          <p className="m-0 text-center text-white">
            &copy;{" "}
            <Link className="text-white fw-bold text-decoration-none" to="/">
              Your Site Name
            </Link>
            . All Rights Reserved. Designed by
            <Link className="text-white fw-bold text-decoration-none" to="/">
              {" "}
              Arham Affan
            </Link>
          </p>
        </div>
      </div>

      {showBackToTop && (
        <button onClick={scrollToTop} className="back-to-top btn ">
          <i className="fa fa-angle-double-up"></i>
        </button>
      )}
    </>
  );
}
