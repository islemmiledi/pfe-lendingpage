import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSalleById } from "../../../Redux/actions/salle.actions";

export default function Classes() {
  const data = useSelector((state) => state?.salle?.salle?.data?.program);
  const salleId = localStorage.getItem("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneSalleById({ id: salleId }));
  }, [dispatch, salleId]);
  return (
    <div id="services" className="container pb-4">
      <div className="row">
        {data &&
          data.map((data) => (
            <div className="col-md-4 mb-4">
              <div className="card">
                <img src={data.file} className="card-img-top" alt="Service 1" />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
