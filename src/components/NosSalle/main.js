import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllSalle } from "../../Redux/actions/salle.actions";
import { Link } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const salles = useSelector((state) => state?.salle?.salles?.data);

  useEffect(() => {
    dispatch(getAllSalle());
  }, [dispatch]);

  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-600 mt-8">
        NOS SALLES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {salles &&
          salles.map((salle) => (
            <div
              key={salle.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-red-600 mb-4">
                  {salle.Nom}
                </h2>
                <Link to={`/salle/${salle.id}`}>
                  <button
                    style={{
                      display: "block",
                      backgroundColor: "red",
                      color: "white",
                    }}
                  >
                    Voir Détails
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
