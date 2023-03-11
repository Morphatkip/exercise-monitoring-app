import React, { useEffect, useState } from "react";
import ExerciseTable from "../components/homecomponents/ExerciseTable";
import { fetchExercise } from "../delete/database-transaction";
function Home({ SetExerciseEdited }) {
  const [exerciseCompleted, setExerciseCompleted] = useState([]);

  const today = "today";
  const updateData = () => {
    fetchExercise(setExerciseCompleted);
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div>
      <ExerciseTable
        exerciseCompleted={exerciseCompleted}
        SetExerciseEdited={SetExerciseEdited}
      />
    </div>
  );
}

export default Home;
