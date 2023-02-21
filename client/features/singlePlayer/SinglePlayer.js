import React, { useState } from "react";
import { Spinner } from "../spinner/Spinner";
import { useGetPlayerQuery } from "../api/apiSlice";
import { useParams } from "react-router-dom";
import { PossesionChart } from "../charts/PossesionChart";
import { RadarChart } from "../charts/RadarChart";
import { ShotPositionChart } from "../charts/ShotPositionChart";

export const SinglePlayer = () => {
  const { playerId } = useParams();



  const { data: player, isFetching, isSuccess } = useGetPlayerQuery(playerId);

  // const [isShown, setIsShown] = useState(false)

  // const handleClick = () => {
  //   setIsShown(!isShown)
  // }
  let content;

  if (isFetching) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = (
      <section className="player">
        <h2>{player.shooterName}</h2>
        <h3>{player.team}</h3>
        <h3>{player.position}</h3>
        <table className="playerTable">
          <thead>
            <tr>
            <th>Games Played</th>
            <th>IceTime</th>
            <th>Shifts</th>
            <th>Game Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{player.games_played}</td>
              <td>{player.icetime}</td>
              <td>{player.shifts}</td>
              <td>{player.gameScore}</td>
            </tr>
          </tbody>
        </table>
        <PossesionChart player={player}/>
        <RadarChart player={player}/>
        <ShotPositionChart player={player}/>
      </section>
    );
  }
  return <section>{content}</section>;
};
