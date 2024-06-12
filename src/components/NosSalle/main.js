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
    <div className="bg-white text-white py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-600 mt-8">
        OUR SALLES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {salles &&
          salles.map((salle) => (
            <div
              key={salle.id}
              className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full h-48 object-cover rounded-t-lg"
                  src={salle.file}
                  alt={`Image de ${salle.Nom}`}
                />
              </a>
              <div className="p-3">
                <a href="#">
                  <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    {salle.Nom}
                  </h5>
                </a>
                <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                  {salle.titre}
                </p>
                <p className="mb-1 text-sm text-gray-700 dark:text-gray-400">
                  {salle.description}
                </p>

                <Link
                  to={`/salle/${salle.id}`}
                  className="inline-block text-xs font-medium text-white bg-[#f04e3c] py-3 px-6 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Voir détails
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
