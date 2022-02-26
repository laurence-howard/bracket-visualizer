import {
  compose,
  defaultTo,
  find,
  propEq,
  prop,
  applySpec,
  map,
  converge,
  identity,
  propOr,
  mergeDeepLeft,
} from "ramda";
import { Team, Round, Match } from "../../interfaces";

const getTeams = (propName: string, teams: Team[]) =>
  compose(
    defaultTo({ id: "unknown", name: "unknown" }),
    (x) => find(propEq("id", x))(teams),
    prop(propName)
  );

export const injectTeamsIntoMatches = (
  teams: Team[],
  rounds: Round[]
): Round[] =>
  map<Round, Round>(
    applySpec({
      round: prop("round") as (src: Round) => string,
      matches: compose(
        map(
          compose(
            converge(mergeDeepLeft, [
              applySpec({
                team1: getTeams("team1", teams),
                team2: getTeams("team2", teams),
              }),
              identity,
            ])
          )
        ),
        propOr([], "matches")
      ),
    })
  )(rounds);
