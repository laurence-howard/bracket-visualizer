export type Match = {
  team1: string;
  team2: string;
  matchId: string;
  progression: string;
};

export type BracketConfig = {
  round: string;
  matches: Match[];
};
