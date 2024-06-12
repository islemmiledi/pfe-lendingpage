import React from "react";
import backgroundImage from "../../assets/sitesalle.jpg"; // Assurez-vous que le chemin vers votre image de fond est correct
import "./Main.css";

const Main = () => {
  const textContainerStyle = {
    maxWidth: "600px",
    textAlign: "left",
    color: "#000000",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "16px",
  };

  const subheadingStyle = {
    fontSize: "20px",
    marginBottom: "32px",
  };

  const buttonStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    padding: "12px 24px",
    borderRadius: "24px",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div
      className="relative flex items-center p-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
      }}
    >
      {/* Overlay semi-transparent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        }}
      ></div>
      {/* Contenu */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          textAlign: "left",
          marginLeft: "50px",
        }}
      >
        <h1
          style={{
            ...headingStyle,
            color: "#FFFFFF",
            textTransform: "uppercase",
            textShadow: "3px 3px 6px rgba(0, 0, 0, 0.8)",
            margin: "0 0 20px 0",
          }}
        >
          Build a more powerful fitness business
        </h1>
        <p
          style={{
            ...subheadingStyle,
            color: "#FFFFFF",
            textTransform: "uppercase",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
            margin: "0 0 20px 0",
          }}
        >
          Keep up with a changing industry, make your clients feel their best,
          and boost your productivity—all from a single platform.
        </p>
        <a
          href="#more"
          style={{
            ...buttonStyle,
            backgroundColor: "#333333",
            color: "#FFFFFF",
            padding: "10px 20px",
            borderRadius: "5px",
            textDecoration: "none",
            textTransform: "uppercase",
            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.4)",
          }}
        >
          Let's Go
        </a>
      </div>
    </div>
  );
};

export default Main;
