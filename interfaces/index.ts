export type Match = {
  team1: Team;
  team2: Team;
  matchId: string;
  progression: string;
  winner: "team1" | "team2" | "";
};

export type Round = {
  round: string;
  matches: Match[];
};

export interface Team {
  id: string;
  name: string;
}

export interface Config {
  rounds: Round[];
  teams: Team[];
}
