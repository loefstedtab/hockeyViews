import React, { useMemo } from "react";
import { useGetTeamsQuery } from "../api/apiSlice";
import { TeamRow } from "../teams/TeamRow";
import './allPlayers.css'


export const AllPlayers = () => {

  const { data: teams = [] } = useGetTeamsQuery();

  const sortedTeams = useMemo(() => {
    const sortedTeams = teams.slice();
    sortedTeams.sort((a, b) => a.abbreviation.localeCompare(b.abbreviation));
    return sortedTeams;
  }, [teams]);

  return (
    <div className="allPlayers">
      {sortedTeams
        ? sortedTeams.map((team) => {
            return <TeamRow team={team} key={team.id} />;
          })
        : null}
    </div>
  );
};
