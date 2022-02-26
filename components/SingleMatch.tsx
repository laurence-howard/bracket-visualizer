/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import Xarrow from "react-xarrows";
import Image from "next/image";
import { Match, Team } from "../interfaces";

interface TeamProps {
  team: Team;
  winner: boolean;
}

const TeamBlock = ({ team, winner = false }: TeamProps) => (
  <div
    css={css`
      position: relative;
      display: flex;
      align-items: center;
      div:first-child {
        position: absolute;
        left: -30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
  >
    <div>
      {winner && <Image src="/winner_trophy.svg" width={30} height={28} />}
    </div>
    <p>{team.name}</p>
  </div>
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
    background-color: #bcbcbc59;
    margin-bottom: 10px;
    min-width: 200px;
    padding: 10px;
    border-radius: 10px;
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
          color="#1876d1"
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
