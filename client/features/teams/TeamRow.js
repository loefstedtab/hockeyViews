import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useGetTeamsQuery, useGetTeamQuery } from "../api/apiSlice";


export const TeamRow = ({team}) => {



  // const {
  //   data: singleTeam
  // } = useGetTeamQuery(team.abbreviation)
  // console.log(singleTeam)

let teamPlayers = team.players
// console.log(team.players)

  // console.log("these are the teams players", teamPlayers)


  return (
    <div>
    <div>Team Row</div>
      {teamPlayers ? teamPlayers.map((player) => {
        return(
          <Link to={`/players/${player.id}`} key={player.id}>
          <div key={player.id}>
          <h2>{player.name}</h2>
          <h2>{player.teamAbbr}</h2>
          </div>
          </Link>
        )

      }): null}
    </div>
  )
}
