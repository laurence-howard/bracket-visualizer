/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import BracketContainer from "./BracketContainer";

const data = [
  {
    round: "1",
    matches: [
      {
        matchId: "1.1",
        team1: "Team A",
        team2: "Team B",
        progression: "2.1",
      },
      {
        matchId: "1.2",
        team1: "Team C",
        team2: "Team D",
        progression: "2.1",
      },
      {
        matchId: "1.3",
        team1: "Team E",
        team2: "Team F",
        progression: "2.2",
      },
      {
        matchId: "1.4",
        team1: "Team G",
        team2: "Team H",
        progression: "2.2",
      },
    ],
  },
  {
    round: "2",
    matches: [
      {
        matchId: "2.1",
        team1: "Team A",
        team2: "Team C",
        progression: "3.1",
      },
      {
        matchId: "2.2",
        team1: "Team E",
        team2: "Team H",
        progression: "3.1",
      },
    ],
  },
  {
    round: "3",
    matches: [
      {
        matchId: "3.1",
        team1: "Team C",
        team2: "Team E",
        progression: "finish",
      },
    ],
  },
];

const ToggleContainer = () => {
  const [currentPanel, setCurrentPanel] = useState("config");
  return (
    <>
      <div>
        <button onClick={() => setCurrentPanel("config")}>Config</button>
        <button onClick={() => setCurrentPanel("bracket")}>Bracket</button>
      </div>
      {currentPanel === "config" && <p>Config Panel</p>}
      {currentPanel === "bracket" && <BracketContainer data={data} />}
    </>
  );
};

export default ToggleContainer;
