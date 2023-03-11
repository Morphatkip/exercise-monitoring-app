import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ExerciseRow from "./ExerciseRow";

function ExerciseTable({ exerciseCompleted, setExerciseEdited }) {
  const navigate = useNavigate();

  const handleGoToCreateExercise = (e) => {
    e.preventDefault();
    navigate("/create-exercise");
  };
  return (
    <div className="home-container">
      <div className="button-wrap">
        <button className="btn-exercise " onClick={handleGoToCreateExercise}>
          Create Exercise
        </button>
      </div>

      <table className="hover-table ">
        <thead>
          <tr>
            <th>Name</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exerciseCompleted?.map((exercise, index) => (
            <ExerciseRow
              exercise={exercise}
              key={index}
              setExerciseEdited={setExerciseEdited}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseTable;
