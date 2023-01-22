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
} from "victory";


export const PossesionChart = ({player}) => {
  return(
    <div className="chart">
    <VictoryChart padding={{ left: 115, top: 50, right: 60, bottom: 50 }}>
      <VictoryGroup
        horizontal
        offset={10}
        colorScale={"qualitative"}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        labels={({ datum }) => `${datum.y}`}
      >
        <VictoryBar
          data={[
            {
              x: "OnIce_Corsi%",
              y: Number(player.onIce_corsiPercentage),
            },
            {
              x: "OnIce_Fenwick%",
              y: Number(player.onIce_fenwickPercentage),
            },
            {
              x: "OnIce_XGoals%",
              y: Number(player.onIce_xGoalsPercentage),
            },
          ]}
        />
        <VictoryBar
          data={[
            {
              x: "OffIce_Corsi%",
              y: Number(player.offIce_corsiPercentage),
            },
            {
              x: "OffIce_Fenwick%",
              y: Number(player.offIce_fenwickPercentage),
            },
            {
              x: "OffIce_XGoals%",
              y: Number(player.offIce_xGoalsPercentage),
            },
          ]}
        />
      </VictoryGroup>
      </VictoryChart>
  </div>

  )
}
