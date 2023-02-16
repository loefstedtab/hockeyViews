import React, { useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useGetPlayersQuery,
  useGetTeamsQuery,
  useGetTeamQuery,
} from "../api/apiSlice";
import { Spinner } from "../spinner/Spinner";
import { TeamRow } from "../teams/TeamRow";

let PlayerExcerpt = ({ player }) => {
  return (
    <div key={player.id} id="playerCard">
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

  const { data: teams = [] } = useGetTeamsQuery();

  const sortedTeams = useMemo(() => {
    const sortedTeams = teams.slice();
    sortedTeams.sort((a,b) => a.abbreviation.localeCompare(b.abbreviation))
    return sortedTeams
  }, [teams])

  const sortedPlayers = useMemo(() => {
    const sortedPlayers = players.slice();
    sortedPlayers.sort((a, b) => a.teamAbbr.localeCompare(b.teamAbbr));
    return sortedPlayers;
  }, [players]);


  return (
    <div className="allPlayers">
      {sortedTeams ? sortedTeams.map((team) => {
            return <TeamRow team={team} key={team.id} />;
          })
        : null}
    </div>
  );
};
