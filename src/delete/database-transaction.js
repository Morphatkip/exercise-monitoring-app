import { showNotification } from "../services/notification.util";

const BASE_URL = "http://localhost:3000";

function formatUrl(url) {
  return `${BASE_URL}${url}`;
}

function fetchExercise(setData) {
  fetch(formatUrl("/GET/exercises"))
    .then((response) => response.json())
    .then((exercisesData) => {
      setData(exercisesData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteExercise(id) {
  fetch(formatUrl(`/DELETE/exercises/${id}`), {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error deleting data");
      }
      showNotification("Deleted successfully", "success");
    })
    .catch((error) => {
      showNotification("Failed to Delete");
    });
}
function editExercise(id, updatedData, navigate) {
  fetch(formatUrl(`/PUT/exercises/${id}`), {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error editing data");
      }
      showNotification("Edited successfully", "success");
      navigate("/");
    })
    .catch((error) => {
      showNotification("Failed to edit");
    });
}

function createExercise(newExercise, navigate) {
  fetch(formatUrl`/POST/exercises`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExercise),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error creating data");
      }
      showNotification("Exercise created succesfully", "success");
      navigate("/");
    })
    .catch((error) => {
      // Handle any errors that occur during the create request
    });
}

export { fetchExercise, deleteExercise, editExercise, createExercise };
