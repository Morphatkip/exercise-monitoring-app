import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

function NavigationBar() {
  return (
    <div className="navbar-width">
      <nav className="navbar-container">
        <Link className="navbar-title " to="/">
          Home
        </Link>
      </nav>
    </div>
  );
}

export default NavigationBar;
