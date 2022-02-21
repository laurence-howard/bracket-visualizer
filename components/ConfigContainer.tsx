import React from "react";
import { update } from "ramda";
import RoundConfig from "./RoundConfig";
import { Config, Round } from "../interfaces";

type Props = {
  data: Config;
  updateData: (data: Config) => void;
};

const ConfigContainer = (props: Props) => {
  const { data, updateData } = props;
  const { teams, rounds } = data;
  const updateIndex = (index: number) => (newRound: Round) => {
    const newRoundData = update(index, newRound, rounds);
    updateData({ teams, rounds: newRoundData });
  };
  return (
    <div>
      {rounds.map((round: Round, i) => (
        <RoundConfig round={round} teams={teams} updateIndex={updateIndex(i)} />
      ))}
    </div>
  );
};

export default ConfigContainer;
