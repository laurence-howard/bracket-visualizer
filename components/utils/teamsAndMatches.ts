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
import { Team, Round } from "../../interfaces";

const getTeams = (propName: string, teams: Team[]) =>
  compose(
    defaultTo({ id: "unknown", name: "unknown" }),
    (x) => find(propEq("id", x))(teams),
    prop(propName)
  );

export const injectTeamsIntoMatches = (teams: Team[], rounds: Round[]) =>
  map(
    applySpec({
      round: prop("round"),
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
