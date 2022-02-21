/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import { update } from "ramda";
import { Match, Round, Team } from "../interfaces";
import MatchConfig from "./MatchConfig";

interface Props {
  round: Round;
  teams: Team[];
  updateIndex: (newRound: Round) => void;
}

const RoundConfig = (props: Props) => {
  const { round, teams, updateIndex } = props;
  const [updatedRound, setUpdatedRound] = useState(round);

  const updateMatchConfig = (index: number) => (newMatch: Match) => {
    setUpdatedRound({
      ...updatedRound,
      matches: update(index, newMatch, updatedRound.matches),
    });
  };

  useEffect(() => {
    updateIndex(updatedRound);
  }, [updatedRound]);
  return (
    <div
      css={css`
        padding: 10px;
      `}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateIndex(updatedRound);
        }}
        css={css`
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 5px 1px;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 5px;
          width: 300px;
          input {
            display: block;
          }
        `}
      >
        <label>
          Round Name:
          <input
            type="text"
            name="name"
            value={updatedRound.round}
            onChange={(e) =>
              setUpdatedRound({ ...updatedRound, round: e.target.value })
            }
          />
        </label>
        {updatedRound.matches.map((single, index) => (
          <MatchConfig
            teams={teams}
            single={single}
            updateMatch={updateMatchConfig(index)}
          />
        ))}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default RoundConfig;
