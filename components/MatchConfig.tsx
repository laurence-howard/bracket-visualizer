/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Match, Team } from "../interfaces";

interface BasicProps {
  single: Match;
  updateMatch: (updatedMatch: Match) => void;
}

interface Props extends BasicProps {
  teams: Team[];
}

interface SingleInputProps extends BasicProps {
  name: string;
}

const SingleInput = ({ name, single, updateMatch }: SingleInputProps) => (
  <label>
    {name}:
    <input
      type="text"
      name={name}
      value={single[name]}
      onChange={(e) => {
        updateMatch({ ...single, [name]: e.target.value });
      }}
    />
  </label>
);

const SingleDropdown = ({ name, single, updateMatch, teams }) => (
  <label>
    {name}:
    <select
      name={name}
      value={single[name]}
      onChange={(e) => {
        updateMatch({ ...single, [name]: e.target.value });
      }}
    >
      {teams.map(({ name, id }) => (
        <option value={id}>{name}</option>
      ))}
    </select>
  </label>
);

const MatchConfig = ({ single, teams, updateMatch }: Props) => {
  return (
    <div
      css={css`
        border: 1px solid grey;
        margin: 5px 0;
      `}
    >
      <SingleDropdown
        name="team1"
        single={single}
        teams={teams}
        updateMatch={updateMatch}
      />
      <SingleInput name="team1" single={single} updateMatch={updateMatch} />
      <SingleDropdown
        name="team2"
        single={single}
        teams={teams}
        updateMatch={updateMatch}
      />
      <SingleInput name="team2" single={single} updateMatch={updateMatch} />
      <SingleInput name="matchId" single={single} updateMatch={updateMatch} />
      <SingleInput
        name="progression"
        single={single}
        updateMatch={updateMatch}
      />
      <label>
        Winner:
        <select
          value={single.winner}
          onChange={(e) => {
            updateMatch({ ...single, winner: e.target.value });
          }}
        >
          <option value="team1">{single.team1}</option>
          <option value="team2">{single.team2}</option>
        </select>
      </label>
    </div>
  );
};

export default MatchConfig;
