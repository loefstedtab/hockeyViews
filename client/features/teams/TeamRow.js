import React, { useEffect, useMemo, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useGetTeamsQuery, useGetTeamQuery } from "../api/apiSlice";

export const TeamRow = ({ team }) => {
  let teamPlayers = team.players;

  // useLayoutEffect(() => {
  //   if(teamPlayers)
  //   {const slider = document.getElementById("image-track");
  //   let isDown = false;
  //   let startX;
  //   let scrollLeft;

  //   slider.addEventListener("mousedown", (e) => {
  //     isDown = true;
  //     slider.classList.add("active");
  //     startX = e.pageX - slider.offsetLeft;
  //     scrollLeft = slider.scrollLeft;
  //   });
  //   slider.addEventListener("mouseleave", () => {
  //     isDown = false;
  //     slider.classList.remove("active");
  //   });
  //   slider.addEventListener("mouseup", () => {
  //     isDown = false;
  //     slider.classList.remove("active");
  //   });
  //   slider.addEventListener("mousemove", (e) => {
  //     if (!isDown) return;
  //     e.preventDefault();
  //     const x = e.pageX - slider.offsetLeft;
  //     const walk = (x - startX) * 3; //scroll-fast
  //     slider.scrollLeft = scrollLeft - walk;
  //   })}
  // },[]);

  return (
    <div>
      <div>
        {team.city} {team.name}
      </div>
      <div id="image-track">
        {teamPlayers
          ? teamPlayers.map((player) => {
              return (
                <Link to={`/players/${player.id}`}>
                  <div
                    id="playerCard"
                    key={player.id}
                    style={{
                      backgroundImage: `url(/${player.img})`,
                      width: "40vmin",
                      height: "56vmin",
                      objectFit: "cover",
                      objectPosition: "100% center",
                    }}
                    draggable={false}
                  >
                    <h2>{player.name}</h2>
                    <h2>{player.teamAbbr}</h2>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};
