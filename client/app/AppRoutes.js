import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AllPlayers } from "../features/players/AllPlayers";
import { SinglePlayer } from "../features/singlePlayer/SinglePlayer";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  // const isLoggedIn = true
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <h1>Hello World!</h1>

      <Routes>
        <Route path="/players" element={<AllPlayers />} />
        <Route path="/players/:playerId" element={<SinglePlayer />} />
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
