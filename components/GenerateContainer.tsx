/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import RD from "ramda-decimal";
import { toString, compose } from "ramda";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { Config, Round } from "../interfaces";
import {
  generateMatches,
  updateById,
  generateTeams,
  getNumberOfMatches,
} from "./utils/generateConfig";

interface Props {
  updateData: (data: Config) => void;
}

const GenerateContainer = (props: Props) => {
  const { updateData } = props;
  const [newConfig, setNewConfig] = useState({});
  const [newRounds, setNewRounds] = useState([]);
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [newTeams, setNewTeams] = useState([]);
  console.log({ newTeams });
  useEffect(() => {
    if (Object.keys(newConfig).length !== 0 && newConfig !== {}) {
      updateData(newConfig);
    }
  }, [newConfig]);
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <Card
        css={css`
          max-width: 500px;
          width: 100%;
        `}
      >
        <CardContent>
          <div
            css={css`
              display: flex;
              justify-content: center;
              flex-direction: column;
              max-width: 200px;
              margin: 0 auto;
            `}
          >
            <TextField
              label="Number of Rounds:"
              type="number"
              variant="standard"
              name="numberOfRounds"
              css={css`
                margin-bottom: 10px;
              `}
              onChange={(e) => {
                setNumberOfRounds(e.target.value);
              }}
            />
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                console.log({ numberOfRounds });
                let newRoundsLocal: Round[] = [];
                for (let i: number = 1; i <= RD.toNumber(numberOfRounds); i++) {
                  newRoundsLocal.push({
                    round: toString(i),
                    matches: generateMatches(i, numberOfRounds),
                  });
                }
                const newTeams = generateTeams(
                  getNumberOfMatches(1, newRoundsLocal.length)
                );
                setNewRounds(newRoundsLocal);
                setNewTeams(newTeams);
              }}
              css={css`
                margin-bottom: 10px;
              `}
            >
              {numberOfRounds === 0 ? "Confirm" : "Update"} Rounds
            </Button>
          </div>
          <div
            css={css`
              max-width: 200px;
              margin: 0 auto;
            `}
          >
            {newTeams.map(({ id, name }, i) => (
              <div
                css={css`
                  margin: 15px 0;
                  display: flex;
                `}
              >
                <p
                  css={css`
                    margin-right: 4px;
                  `}
                >
                  {compose(RD.toNumber, RD.inc)(i)}.
                </p>
                <TextField
                  label="Team Name:"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    const updatedTeamsArray = updateById(
                      newTeams,
                      i,
                      e.target.value,
                      "name"
                    );
                    console.log({ newTeams, updatedTeamsArray });
                    setNewTeams(updatedTeamsArray);
                  }}
                />
              </div>
            ))}
            {newTeams.length !== 0 && (
              <Button
                variant="contained"
                onClick={(e) => {
                  e.preventDefault();
                  setNewConfig({ teams: newTeams, rounds: newRounds });
                }}
                css={css`
                  margin-bottom: 10px;
                `}
              >
                Generate!
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateContainer;
