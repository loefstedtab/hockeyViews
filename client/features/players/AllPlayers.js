import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetPlayersQuery, useGetTeamsQuery, useGetTeamQuery } from "../api/apiSlice";
import { Spinner } from "../spinner/Spinner";
import {TeamRow} from "../teams/TeamRow"

let PlayerExcerpt = ({ player }) => {
  return (
    <div id="playerCard">
      {/* <img className="image" src="logo.png" draggable="false" /> */}
      <h3>{player.season}</h3>
      <h2>{player.name}</h2>
      <h3>{player.team}</h3>
      <h3>{player.position}</h3>
    </div>
  );
};



export const AllPlayers = () => {
  const {
    data: players = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPlayersQuery();

  const {
    data: teams
  } = useGetTeamsQuery()
  console.log(teams)



  const sortedPlayers = useMemo(() => {
    const sortedPlayers = players.slice();
    sortedPlayers.sort((a, b) => a.teamAbbr.localeCompare(b.teamAbbr));
    return sortedPlayers;
  }, [players]);

  console.log("These are the players", players);

  let content;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  } else if (isSuccess) {
    content = sortedPlayers.map((player) => {
      return (
        <Link to={`/players/${player.id}`} key={player.id}>
          <PlayerExcerpt player={player} />
        </Link>
      );
    });
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="allPlayers">
    {teams? teams.map((team) => {
    return(
    <TeamRow team={team}  key={team.id}/>)
    }) : null}
     </div>;
};
