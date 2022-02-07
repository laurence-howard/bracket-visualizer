/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import Xarrow from "react-xarrows";
import { Match } from "../interfaces";

const SingleMatch = (props: Match) => {
  const { team1, team2, matchId, progression } = props;
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
        <p>{team1}</p>
        <p>{team2}</p>
      </div>
      {progression !== "finish" && (
        <Xarrow
          start={`${matchId}_container`}
          end={`${progression}_container`}
          path="grid"
          showHead={false}
        />
      )}
    </>
  );
};

export default SingleMatch;
