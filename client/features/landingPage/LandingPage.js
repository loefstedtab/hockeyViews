import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <Link to={"/players"}>
        <button id="nav-toggle" type="button">
          <p className="rotatingText">Enter</p>
        </button>
      </Link>
    </div>
  );
};
