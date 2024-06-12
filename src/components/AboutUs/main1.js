import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../Redux/actions/salle.actions";

const Main = () => {
  const data = useSelector((state) => state?.salle?.salle?.data?.aboutuss);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <div className="bg-[#2b2b28] text-white py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        WELCOME TO THE FITLINE CROSSFIT STUDIO!
      </h1>
      <p className="text-lg text-center mb-10 max-w-2xl mx-auto">
        Since 2013, our Gym classes have inspired and welcomed everyone,
        creating a strong sense of community. Our fitness instructors are here
        to assist you, dedicated to helping you achieve your peak fitness and
        strength.
      </p>
      {data &&
        data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center mb-16`}
          >
            <div className="md:w-1/2 flex justify-center">
              <img
                src={item.file}
                alt={item.name}
                className="w-full h-auto rounded-lg shadow-lg max-w-sm"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left p-8">
              <h3 className="text-3xl text-yellow-400 mb-4">
                {item.communityHighlight}
              </h3>
              <p className="text-xl font-semibold font-bold mb-4">
                {item.valueProposition}
              </p>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Main;
