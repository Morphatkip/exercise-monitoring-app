import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { deleteExercise } from "../../delete/database-transaction";
import DeleteConfirmationModal from "../modal/deleteModal";
function ExerciseRow({ exercise, setExerciseEdited }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleDelete = () => {
    deleteExercise(exercise?.id);
    setShowModal(false);
  };
  const handleEdit = () => {
    setExerciseEdited(exercise);
    navigate("/edit-exercise");
  };
  return (
    <tr>
      <td>{exercise?.name}</td>
      <td>{exercise?.rep}</td>
      <td>{exercise?.weight}</td>
      <td>{exercise?.unit}</td>
      <td>{exercise?.date}</td>
      <td>
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-outline-danger m-2"
        >
          <MdDelete />
        </button>
        <button className="btn btn-outline-secondary m-2" onClick={handleEdit}>
          <FaEdit />
        </button>
        <DeleteConfirmationModal
          show={showModal}
          onHide={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      </td>
    </tr>
  );
}

export default ExerciseRow;
