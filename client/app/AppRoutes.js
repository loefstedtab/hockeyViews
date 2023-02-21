import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "../features/landingPage/LandingPage";
import { AllPlayers } from "../features/players/AllPlayers";
import { SinglePlayer } from "../features/singlePlayer/SinglePlayer";
import { TeamRow } from "../features/teams/TeamRow";
import { Navbar } from "../features/navbar/Navbar";
import { me } from "./store";
import { ShotPositionChart } from "../features/charts/ShotPositionChart";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
        <Route path="/singleTeam" element={<TeamRow />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login name="login" />} />
        <Route path="/signup" element={<Register name="signup" />} />
      </Routes> */}
    </div>
  );
};

export default AppRoutes;
