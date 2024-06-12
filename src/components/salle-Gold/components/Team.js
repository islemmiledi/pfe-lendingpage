import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

const Team = ({ team }) => {
  return (
    <div className="col-lg-3 col-md-6 mb-5 d-flex align-items-stretch">
      <div className="card border-0 bg-secondary text-center text-white">
        <img src={team.file} alt={team.name} />
        <div className="card-social d-flex align-items-center justify-content-center">
          <Link
            className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0"
            to="/home"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          <Link
            className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0"
            to="/home"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link
            className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0"
            to="/home"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link
            className="btn btn-outline-light border-2 rounded-circle text-center me-2 px-0"
            to="/home"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </div>
        <div className="card-body">
          <h4 className="card-title">{team.Nom}</h4>
          <p className="card-text">{team.Specialite}</p>
          <p className="card-text">{team.Description}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const data = useSelector((state) => state?.salle?.salle?.data?.coachs);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);

  return (
    <div className="container pt-5 team">
      <div id="heading" className="d-flex flex-column text-center mb-5">
        <h4 className="font-weight-bold">Our Trainers</h4>
        <h3 className="display-4 font-weight-bold">Meet Our Expert Trainers</h3>
      </div>
      <div className="row justify-content-center">
        {data && data.map((team) => <Team key={team.id} team={team} />)}
      </div>
    </div>
  );
};

export default App;
