import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";

const Main = () => {
  const data = useSelector((state) => state?.salle?.salle?.data?.program);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <div className="bg-[#2b2b28] text-white p-8">
      <h1
        className="text-3xl md:text-4xl font-extrabold text-center mb-8"
        style={{ color: "#fec600" }}
      >
        AMÉLIOREZ VOTRE SANTÉ ET VOTRE FORME PHYSIQUE
      </h1>
      <p className="mb-6 text-sm md:text-base text-center">
        Les cours et certifications de CROSSFIT sont ouverts aux individus et
        aux entraîneurs désireux d'améliorer leur santé et leur forme physique
        grâce à des stratégies d'entraînement et de nutrition efficaces.
      </p>

      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="mb-10 flex flex-col md:flex-row md:items-center justify-center"
          >
            <div
              className="bg-yellow-300 p-2 rounded-md flex justify-center items-center h-32 w-32 md:h-48 md:w-48 mb-4 md:mb-0 md:mr-6"
              style={{ margin: "0 auto" }}
            >
              <img
                src={item.file}
                alt={item.title}
                className="object-cover h-full w-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "fallback_image_url";
                }}
              />
            </div>
            <div className="md:flex-1 text-center">
              <h2
                className="text-xl md:text-2xl font-light mb-2"
                style={{ color: "#fec600" }}
              >
                {item.title}
              </h2>
              <p className="text-sm md:text-base whitespace-pre-line">
                {item.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
