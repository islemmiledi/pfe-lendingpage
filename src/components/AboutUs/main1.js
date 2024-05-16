import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";

const Main = () => {
  // const data = useSelector((state) => state?.program?.website?.data?.aboutuss);
  const data = useSelector((state) => state?.salle?.salle?.data?.aboutuss);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  // if (!data || data.length === 0) return <div>Loading...</div>;

  return (
    <div className="bg-[#2b2b28] text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        WELCOME TO THE FITLINE CROSSFIT STUDIO!
      </h1>
      <p className="text-lg text-center mb-10">
        Since 2013, our Gym classes have inspired and welcomed everyone,
        creating a strong sense of community. Our fitness instructors are here
        to assist you, dedicated to helping you achieve your peak fitness and
        strength.
      </p>
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            // className={`flex flex-col md:flex-row ${
            //   index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            // } items-center mb-8`}
          >
            <div
              key={item.id}
              className="mb-10 flex flex-col md:flex-row md:items-center justify-center"
            >
              <img
                src={item.file}
                alt={item.name}
                className="w-64 h-64 rounded-lg shadow-lg mx-auto md:mx-0"
                // Fixed dimensions for all images to ensure uniform size
                // Additional left margin for the first image
              />
            </div>
            <div className="md:flex-1 text-center md:text-left p-4">
              <h3 className="text-xl font-bold mb-2">
                {item.communityHighlight}
              </h3>
              <p className="font-semibold text-yellow-400 mb-2">
                {item.valueProposition}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
