import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editExercise } from "../delete/database-transaction";
import "../style/createExercise.css";
function EditExercise({ exerciseToBeEdited }) {
  const [exercise, setExercise] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setExercise(exerciseToBeEdited);
  }, []);

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
    editExercise(exerciseToBeEdited.id, exercise, navigate);
  };
  const units = [
    { label: "Lbs", value: "lbs" },
    { label: "Kgs", value: "kgs" },
  ];
  return (
    <div>
      <div className="formCentre">
        <h3>Edit Exercise</h3>
        <form onSubmit={handleSubmit} method="post">
          <div>
            <label>Name</label>
            <input
              className="form-group"
              type="text"
              name="name"
              value={exercise.name}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Reps</label>
            <input
              className="form-group"
              type="number"
              name="reps"
              value={exercise.reps}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Weight</label>
            <input
              className="form-group"
              type="number"
              name="weight"
              value={exercise.weight}
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
          <button className="btn-exercise" type="submit"></button>
        </form>
      </div>
    </div>
  );
}

export default EditExercise;
