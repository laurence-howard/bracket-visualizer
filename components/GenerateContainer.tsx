/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState, useEffect } from "react";
import RD from "ramda-decimal";
import { compose, toString } from "ramda";
import { Config, Match, Round, Team } from "../interfaces";
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
  useEffect(() => {
    if (Object.keys(newConfig).length !== 0) {
      updateData(newConfig);
    }
  }, [newConfig]);
  return (
    <div>
      <p>time to generate</p>
      <form>
        <label>
          Number of Rounds:
          <input
            type="number"
            name="numberOfRounds"
            css={css`
              margin-bottom: 10px;
            `}
            onChange={(e) => {
              setNumberOfRounds(e.target.value);
            }}
          />
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log({ numberOfRounds });
            let newRoundsLocal: Round[] = [];
            for (
              let i: number = 1;
              i < compose(RD.toNumber, RD.add(1))(numberOfRounds);
              i++
            ) {
              newRoundsLocal.push({
                round: toString(i),
                matches: generateMatches(i, numberOfRounds),
              });
            }
            const newTeams = generateTeams(
              getNumberOfMatches(1, newRoundsLocal.length)
            );
            console.log({ newRoundsLocal, newTeams });
            setNewRounds(newRoundsLocal);
            setNewTeams(newTeams);
          }}
          css={css`
            margin-bottom: 10px;
          `}
        >
          Confirm Rounds
        </button>
        <div>
          {newTeams.map(({ id, name }, i) => (
            <div
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
              {/* <label>
                Team Id:
                <input
                  type="text"
                  name="id"
                  disabled
                  value={id}
                  onChange={(e) => {
                    const updatedTeamsArray = updateById(
                      newTeams,
                      i,
                      e.target.value,
                      "id"
                    );
                    setNewTeams(updatedTeamsArray);
                  }}
                />
              </label> */}
              <label>
                Team Name:
                <input
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
                    setNewTeams(updatedTeamsArray);
                  }}
                />
              </label>
            </div>
          ))}
          <button
            onClick={(e) => {
              e.preventDefault();
              setNewConfig({ teams: newTeams, rounds: newRounds });
            }}
            css={css`
              margin-bottom: 10px;
            `}
          >
            Generate!
          </button>
        </div>
      </form>
    </div>
  );
};

export default GenerateContainer;
