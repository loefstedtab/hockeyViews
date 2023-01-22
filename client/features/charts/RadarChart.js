import React from "react";

import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryPolarAxis,
  VictoryBar,
  VictoryPie,
  VictoryGroup,
  VictoryLabel,
  VictoryArea,
} from "victory";

export const RadarChart = ({ player }) => {
  return (
    <div className="chart">
      <VictoryChart polar theme={VictoryTheme.material}>
        {["Goals", "Points", "Hits", "XGoals", "Penalties"].map((d, i) => {
          return (
            <VictoryPolarAxis
              dependentAxis
              key={i}
              label={d}
              labelPlacement="perpendicular"
              style={{ tickLabels: { fill: "none" }, label: { fill: "black" } }}
              axisValue={d}
              axisLabelComponent={<VictoryLabel />}
            />
          );
        })}
        <VictoryBar
          style={{ data: { fill: "blue", width: 50 } }}
          animate={{
            duration: 2000,
          }}
          data={[
            { x: "Goals", y: Number(player.I_F_goals) },
            { x: "XGoals", y: Number(player.I_F_xGoals) },
            { x: "Points", y: Number(player.I_F_points) },
            { x: "Hits", y: Number(player.I_F_hits) },
            { x: "Penalties", y: Number(player.penalties) },
          ]}
        />
      </VictoryChart>
    </div>
  );
};
