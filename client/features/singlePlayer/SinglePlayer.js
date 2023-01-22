import React, { useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { useGetPlayerQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";
import { PossesionChart } from "../charts/PossesionChart";
import { RadarChart } from "../charts/RadarChart";

export const SinglePlayer = () => {
  const { playerId } = useParams();

  const { data: player, isFetching, isSuccess } = useGetPlayerQuery(playerId);

  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(!isShown)
  }
  let content;

  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <section className="player">
        <h2>{player.name}</h2>
        <h3>{player.team}</h3>
        <h3>{player.position}</h3>
        <PossesionChart player={player}/>
        <RadarChart player={player}/>
      </section>
    );
  }
  return <section>{content}</section>;
};
