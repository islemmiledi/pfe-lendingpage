import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MonthlyPlan.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

const MonthlyPlan = ({ monthlyplan }) => {
  return (
    <div className="col-lg-4 col-md-8">
      <div className="ps-item text-center mb-4">
        <h3 className="mb-4">{monthlyplan.typeoffre}</h3>
        <div className="pi-price mb-4">
          <h2>{`$ ${monthlyplan.prix}`}</h2>
          <span>{monthlyplan.typeoffre}</span>
        </div>
        <div className="mb-4">{monthlyplan.description}</div>
        <Link
          to="/"
          className="btn text-white rounded-0 d-block text-decoration-none"
        >
          Enroll now
        </Link>
      </div>
    </div>
  );
};

const App = () => {
  const data = useSelector((state) => state?.salle?.salle?.data?.offres);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <section id="section7" className="mb-4 pt-3">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center my-5">
            <h6 className="my-3 fw-bold">OUR PLAN</h6>
            <h2 className="display-6">CHOOSE YOUR PRICING PLAN</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {data &&
            data.map((monthlyplan) => (
              <MonthlyPlan key={monthlyplan.id} monthlyplan={monthlyplan} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default App;
