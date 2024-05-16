import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";

const Offers = () => {
  const data = useSelector((state) => state?.salle?.salle?.data?.offres);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);
  return (
    <div
      style={{
        background: "#2b2b28",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "#fec600",
          fontSize: "36px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        GYM MEMBERSHIP OFFERS
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row", // Layout cards in a row
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap", // Wrap to next line on small screens
          gap: "20px",
          padding: "20px", // Add some padding around the cards area
        }}
      >
        {data &&
          data.map((offre) => (
            <div
              key={offre.id}
              style={{
                background: "#3d3d38",
                padding: "40px", // Increased padding for larger appearance
                borderRadius: "10px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                width: "350px", // Fixed width for uniformity and larger appearance
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <h2
                style={{
                  fontSize: "26px", // Slightly larger font size for headers
                  fontWeight: "bold",
                  color: "#fec600",
                }}
              >
                {offre.typeoffre}
              </h2>
              <p
                style={{
                  fontSize: "22px", // Slightly larger font size for prices
                  fontWeight: "500",
                  color: "#FFF200",
                }}
              >
                {`${offre.prix} $/month`}
              </p>
              <p
                style={{
                  fontSize: "18px", // Slightly larger font size for description
                  fontStyle: "italic",
                }}
              >
                {offre.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Offers;
