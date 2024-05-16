import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";
import background from "../../assets/backgroundHome.jpg";

const Main = () => {
  const params = useParams();
  localStorage.setItem("id", params.salleId);

  const data = useSelector((state) => state?.salle?.salle?.data?.homes);
  const salleId = localStorage.getItem("id");
  const accueilsalle = useSelector(
    (state) => state?.accueil?.accueilsuser?.data
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // prend toute la hauteur de la fenêtre
      }}
    >
      {/* Contenu de la section principale ici */}
      <div className="text-center">
        {accueilsalle && accueilsalle.length > 0 && (
          <img
            src={accueilsalle[0].file}
            alt="Logo"
            className="absolute top-4 left-4 h-16 w-16 object-contain"
          />
        )}
        <h1
          className="text-6xl font-bold uppercase leading-none tracking-wide"
          style={{ color: "#fec600" }}
        >
          Welcome to <br />{" "}
          <span style={{ color: "#ffffff" }}>{data?.title}</span>
        </h1>
        <p className="mt-4 text-lg font-light text-white">
          {data?.description}
        </p>
        <a
          href="#more"
          className="mt-8 inline-block bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        >
          READ MORE
        </a>
      </div>
    </div>
  );
};

export default Main;
