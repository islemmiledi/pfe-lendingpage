import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";
import background from "../../assets/backgroundHome.jpg";

const Main = () => {
  const params = useParams();
  localStorage.setItem("id", params.salleId);

  const salleId = localStorage.getItem("id");

  const data = useSelector((state) => state?.salle?.salle?.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  const createDescriptionMarkup = (description) => {
    return { __html: description.replace(/\n/g, "<br />") };
  };

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Takes full height of the window
      }}
    >
      {/* Main content section */}
      <div className="text-center px-4">
        <h1
          className="text-6xl font-bold uppercase leading-none tracking-wide"
          style={{ color: "#fec600" }}
        >
          <br />{" "}
          <span style={{ color: "bg-yellow-500" }}>
            {data?.homes[0]?.title}
          </span>
        </h1>
        <p
          className="mt-4 text-lg font-light text-white whitespace-pre-line"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          {data?.homes[0]?.description}
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
