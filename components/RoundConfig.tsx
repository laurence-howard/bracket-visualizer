/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
        width: 100%;
        max-width: 500px;
      `}
    >
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <p>{updatedRound.round}</p>
        </AccordionSummary>
        <AccordionDetails>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateIndex(updatedRound);
            }}
          >
            <TextField
              css={css`
                margin-bottom: 8px;
              `}
              label="Round Name:"
              variant="standard"
              type="text"
              name="name"
              value={updatedRound.round}
              onChange={(e) =>
                setUpdatedRound({ ...updatedRound, round: e.target.value })
              }
            />

            {updatedRound.matches.map((single, index) => (
              <MatchConfig
                teams={teams}
                single={single}
                updateMatch={updateMatchConfig(index)}
              />
            ))}
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RoundConfig;
