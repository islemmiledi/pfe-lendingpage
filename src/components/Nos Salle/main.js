import React, { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [salles, setSalles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/salle/salles");
        setSalles(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black text-white py-12 px-4 md:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-red-600 mt-8">
        NOS SALLES
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {salles.map((salle) => (
          <div
            key={salle.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                {salle.Nom}
              </h2>
              <p className="text-gray-700">
                Caractéristiques: {salle.Caracteristiques.join(", ")}
              </p>
              <a href={"http://" + salle.websites} target="_blank">
                <button
                  style={{
                    display: "block",
                    backgroundColor: "red",
                    color: "white",
                  }}
                >
                  Voir Détails
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
