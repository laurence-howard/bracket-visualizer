/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import Xarrow from "react-xarrows";
import { Match, Team } from "../interfaces";

interface TeamProps {
  team: Team;
  winner: boolean;
}

const TeamBlock = ({ team, winner = false }: TeamProps) => (
  <p
    css={css`
      background-color: ${winner ? "green" : "none"};
    `}
  >
    {team.name}
  </p>
);

const SingleMatch = (props: Match) => {
  const { team1, team2, matchId, progression, winner } = props;
  return (
    <>
      <div
        id={`${matchId}_container`}
        css={css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: grey;
    margin-bottom: 10px;
    min-width: 200px;
    padding: 10px;
    p {
      margin: 0;
      font-size: 20px;
      padding: 8px;
      margin-bottom: 2px;
  }
    }
  `}
      >
        <TeamBlock team={team1} winner={winner === "team1"} />
        <TeamBlock team={team2} winner={winner === "team2"} />
      </div>
      {progression !== "finish" && (
        <Xarrow
          start={`${matchId}_container`}
          end={`${progression}_container`}
          path="grid"
          showHead={false}
          startAnchor="right"
          endAnchor="left"
        />
      )}
    </>
  );
};

export default SingleMatch;
