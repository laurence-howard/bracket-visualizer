import RD from "ramda-decimal";
import { compose, ifElse, always, indexOf, assoc, update, tap } from "ramda";
import { v4 as uuidv4 } from "uuid";
import { Team, Match } from "../../interfaces";

export const getNumberOfMatches = (current: number, total: number) =>
  compose(
    RD.toNumber,
    (x) => RD.toPower(x)(2),
    RD.subtract(RD.add(total, 1))
  )(current);

export const getNumberOfRounds = (current: number, total: number) =>
  compose(RD.toNumber, (x) => RD.toPower(x)(2), RD.subtract(total))(current);

const getProgressionMatch = (match: number) =>
  compose(
    RD.toNumber,
    RD.divideBy(2),
    RD.toNumber,
    ifElse(compose(RD.eq(0), RD.modulo(2)), always(match), RD.add(1))
  )(match);

export const generateMatches = (
  currentRound: number,
  finalRound: number
): Match[] => {
  let matches = [];
  for (let i = 1; i <= getNumberOfRounds(currentRound, finalRound); i++) {
    matches.push({
      team1: "",
      team2: "",
      matchId: `${currentRound}.${i}`,
      progression:
        currentRound == finalRound
          ? "finish"
          : `${RD.add(currentRound, 1)}.${getProgressionMatch(i)}`,
      winner: "",
    });
  }
  return matches;
};

export const updateById = (
  currentArray: Team[],
  index: number,
  newData: string,
  prop: string
) => {
  console.log({ currentArray, index });
  const currentData = currentArray[index];
  console.log({ currentData });
  const newDataObj = assoc(prop, newData, currentData);
  const newArray = update(index, newDataObj, currentArray);
  return newArray;
};

export const generateTeams = (numberOfTeams: number) => {
  let teams = [];
  for (let i = 1; i <= numberOfTeams; i++) {
    teams.push({ id: uuidv4(), name: "" });
  }
  return teams;
};
