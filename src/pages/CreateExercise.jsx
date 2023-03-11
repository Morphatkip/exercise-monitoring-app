import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createExercise } from "../delete/database-transaction";
import "../style/createExercise.css";

function CreateExercise() {
  const [exercise, setExercise] = useState({
    name: "",
    reps: 0,
    weight: 0,
    unit: "",
    date: new Date(),
  });

  const units = [
    { label: "Lbs", value: "lbs" },
    { label: "Kgs", value: "kgs" },
  ];
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setExercise({
      ...exercise,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createExercise(exercise, navigate);
  };

  return (
    <div>
      <div className="formCentre">
        <div>
          <h3>Create exercise</h3>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              className="form-wrap"
              type="text"
              name="name"
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Reps</label>
            <input
              className="form-wrap"
              type="number"
              name="reps"
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Weight</label>
            <input
              className="form-wrap"
              type="number"
              name="weight"
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Unit</label>
            <select name="unit" className="form-wrap" onChange={handleChange}>
              <option selected disabled>
                Select Unit
              </option>
              {units.map((unit, index) => (
                <option key={index} value={unit.value}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
          <button className="btn-exercise" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateExercise;
