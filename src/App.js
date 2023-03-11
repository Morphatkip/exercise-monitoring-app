import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateExercise from "./pages/CreateExercise";
import Home from "./pages/Home";
import EditExercise from "./pages/EditExercise";
import { useState } from "react";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import { ToastContainer } from "react-toastify";

function App() {
  const [exerciseToBeEdited, setExerciseToBeEdited] = useState({});

  const updateExercise = (exercise) => {
    setExerciseToBeEdited(exercise);
  };

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <header>
          <NavigationBar />
        </header>
        <Routes>
          <Route
            path="/"
            element={<Home setExerciseToBeEdited={updateExercise} />}
          />
          <Route path="/create-exercise" element={<CreateExercise />} />
          <Route
            path="/edit-exercise"
            element={<EditExercise exerciseToBeEdited={exerciseToBeEdited} />}
          />
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
