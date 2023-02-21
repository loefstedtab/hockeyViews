import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useImageTrack from "./useImageTrack";
import PlayerCard from "../singlePlayer/PlayerCard";
import "./teamRow.css";

export const TeamRow = ({ team }) => {
  let teamPlayers = team.players;

  const imageTrackWrapperRef = useRef();
  const { isDragging } = useImageTrack(imageTrackWrapperRef);

  return (
    <div>
      <div>
        {team.city} {team.name}
      </div>
      <div className="teamRow">
        <div className="image-track-wrapper" ref={imageTrackWrapperRef}>
          <div
            className="image-track"
            role="list"
            style={{ pointerEvents: isDragging ? "none" : undefined }}
          >
            {teamPlayers.map((player, i) => {
              return (
                <div
                  key={`image-track-item-${i}`}
                  role="image-track_item"
                >
                  <PlayerCard player={player} key={player.id}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
