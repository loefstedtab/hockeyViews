import React from "react";
import { useParams } from "react-router-dom";
import { VictoryAxis, VictoryChart, VictoryScatter } from "victory";
import { useGetPlayerQuery } from "../api/apiSlice";
import "./shotPosition.css";

const CustomBackground = (props) => {
  return (
    <image
      className="shotPositionBackground"
      href={
        "https://media.istockphoto.com/id/849614276/photo/ice-hockey-rink-isolated.jpg?s=612x612&w=0&k=20&c=hBrla8fybEsxIYQxL4MQqY1UL1qZcAOrcR1eGWAcD-E="
      }
      {...props}
    />
  );
};

export const ShotPositionChart = ({player}) => {
  const { shots } = player;

  const dataArr = []
  shots.map((shot) => {
    if (shot.event !== "GOAL") {
      return null;
    } else {
      return dataArr.push({ x: Number(shot.xCordAdjusted), y: Number(shot.yCordAdjusted) });
    }
  });

  return (
    <div className="shotPositionChart">
      <VictoryChart >

        <VictoryScatter horizontal standalone={false}  data={dataArr} />
        <VictoryAxis
          domain={[0,100]}
          tickValues={[89]}
          style={{
            axis: {stroke: "transparent"},
            // ticks: {stroke: "transparent"},
            tickLabels: {fill: "transparent"},
            grid: {
              stroke: ({ tick }) => (tick === 89 ? "red" : "transparent"),
            },
          }}
          standalone={false}
        />
        <VictoryAxis
        dependentAxis
          domain={[-50,50]}
          crossAxis={true}
          style={{
            axis: { stroke: "transparent" },
            ticks: { stroke: "transparent" },
            tickLabels: { fill: "transparent" },
          }}
          standalone={false}
        />
        </VictoryChart>
    </div>
  );
};
