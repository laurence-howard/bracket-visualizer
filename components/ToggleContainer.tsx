/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Button } from "@mui/material";
import BracketContainer from "./BracketContainer";
import ConfigContainer from "./ConfigContainer";
import GenerateContainer from "./GenerateContainer";

const data = {
  teams: [
    {
      id: "teama",
      name: "Team A",
    },
    {
      id: "teamb",
      name: "Team B",
    },
    {
      id: "teamc",
      name: "Team C",
    },
    {
      id: "teamd",
      name: "Team D",
    },
    {
      id: "teame",
      name: "Team E",
    },
    {
      id: "teamf",
      name: "Team F",
    },
    {
      id: "teamg",
      name: "Team G",
    },
    {
      id: "teamh",
      name: "Team H",
    },
  ],
  rounds: [
    {
      round: "1",
      matches: [
        {
          matchId: "1.1",
          team1: "teama",
          team2: "teamb",
          progression: "2.1",
          winner: "team1",
        },
        {
          matchId: "1.2",
          team1: "teamc",
          team2: "teamd",
          progression: "2.1",
          winner: "team1",
        },
        {
          matchId: "1.3",
          team1: "teame",
          team2: "teamf",
          progression: "2.2",
          winner: "team1",
        },
        {
          matchId: "1.4",
          team1: "teamg",
          team2: "teamh",
          progression: "2.2",
          winner: "team2",
        },
      ],
    },
    {
      round: "2",
      matches: [
        {
          matchId: "2.1",
          team1: "teama",
          team2: "teamc",
          progression: "3.1",
          winner: "team2",
        },
        {
          matchId: "2.2",
          team1: "teame",
          team2: "teamh",
          progression: "3.1",
          winner: "team1",
        },
      ],
    },
    {
      round: "3",
      matches: [
        {
          matchId: "3.1",
          team1: "",
          team2: "",
          progression: "finish",
          winner: "",
        },
      ],
    },
  ],
};

const ToggleContainer = () => {
  const [currentPanel, setCurrentPanel] = useState("config");
  const [currentData, setCurrentData] = useState(data);
  return (
    <div
      css={css`
        width: 100%;
        padding: 0 10px;
        .MuiButton-contained {
          margin: 0 5px;
        }
      `}
    >
      <Button variant="contained" onClick={() => setCurrentPanel("config")}>
        Config
      </Button>
      <Button variant="contained" onClick={() => setCurrentPanel("bracket")}>
        Bracket
      </Button>
      <Button variant="contained" onClick={() => setCurrentPanel("generate")}>
        Generate
      </Button>
      <div
        css={css`
          margin-top: 20px;
        `}
      >
        {currentPanel === "config" && (
          <ConfigContainer data={currentData} updateData={setCurrentData} />
        )}
        {currentPanel === "bracket" && <BracketContainer data={currentData} />}
        {currentPanel === "generate" && (
          <GenerateContainer updateData={setCurrentData} />
        )}
      </div>
    </div>
  );
};

export default ToggleContainer;
