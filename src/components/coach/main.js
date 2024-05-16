import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";

const Main = () => {
 const data = useSelector((state) => state?.salle?.salle?.data?.coachs);
 const salleId = localStorage.getItem("id");
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getOneSalleById({ id: salleId }));
 }, [dispatch, salleId]);
  return (
    <div className="bg-[#2b2b28] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">FITLINE TEAM</h1>
      <p className="text-lg text-center mb-10">
        nos coachs sont à votre disposition pour répondre à toutes vos
        interrogations. Ils vous aident à exécuter vos séances de la manière la
        plus efficace possible ! Des exercices vous sont proposés suivant vos
        objectifs et vos attentes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data &&
          data.map((coach) => (
            <div
              key={coach.id}
              className="bg-[#3d3d38] p-4 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              <div className="bg-yellow-500 p-2 rounded-full mb-4">
                <img
                  src={coach.file}
                  alt={coach.name}
                  className="object-cover h-32 w-32 md:h-48 md:w-48 rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{coach.Nom}</h3>
              <p className="font-semibold text-yellow-400 mb-2">
                {coach.Specialite}
              </p>
              <p>{coach.Description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
