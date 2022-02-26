/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { TextField, MenuItem, Chip } from "@mui/material";
import { compose, defaultTo, find, propEq, propOr } from "ramda";
import { Match, Team } from "../interfaces";

interface BasicProps {
  single: Match;
  updateMatch: (updatedMatch: Match) => void;
}

interface Props extends BasicProps {
  teams: Team[];
  name: string;
  title: string;
}

const findTeamFromId = (id: string, teams: Team[]) =>
  compose(
    propOr("unknown", "name"),
    defaultTo({}),
    find(propEq("id", id))
  )(teams);

const SingleDropdown = ({ title, name, single, updateMatch, teams }: Props) => (
  <div
    css={css`
      padding: 10px;
      margin: 4px 0;
      text-align: left;
    `}
  >
    <TextField
      css={css`
        width: 100%;
      `}
      label={title}
      name={name}
      value={single[name]}
      select
      onChange={(e) => {
        updateMatch({ ...single, [name]: e.target.value });
      }}
    >
      <MenuItem value="" disabled selected>
        Select {title}
      </MenuItem>
      {teams.map(({ name, id }) => (
        <MenuItem value={id}>{name}</MenuItem>
      ))}
    </TextField>
  </div>
);

const MatchConfig = ({ single, teams, updateMatch }: Props) => {
  return (
    <div
      css={css`
        border: 1px solid grey;
        margin: 5px 0;
        padding: 10px;
        label {
          width: 100%;
          display: block;
        }
        .MuiChip-root {
          margin: 3px;
        }
      `}
    >
      <Chip label={`Match ID: ${single.matchId}`} />
      <Chip label={`Match to Progress to: ${single.progression}`} />
      <SingleDropdown
        title="Team 1"
        name="team1"
        single={single}
        teams={teams}
        updateMatch={updateMatch}
      />
      <SingleDropdown
        title="Team 2"
        name="team2"
        single={single}
        teams={teams}
        updateMatch={updateMatch}
      />
      <div
        css={css`
          padding: 10px;
          margin: 4px 0;
          text-align: left;
        `}
      >
        <TextField
          select
          label="Winner:"
          value={single.winner}
          onChange={(e) => {
            updateMatch({ ...single, winner: e.target.value });
          }}
          css={css`
            width: 100%;
          `}
        >
          <MenuItem value="" disabled selected>
            Select Winner
          </MenuItem>
          <MenuItem value="team1">
            {findTeamFromId(single.team1, teams)}
          </MenuItem>
          <MenuItem value="team2">
            {findTeamFromId(single.team2, teams)}
          </MenuItem>
        </TextField>
      </div>
    </div>
  );
};

export default MatchConfig;
