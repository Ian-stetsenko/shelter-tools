export interface Player {
  position: number
  name: string
  score: number
  id?: number
}

export interface TeamsConfiguration {
  teams: Player[][];
  teamNames: string[];
}

export interface PUBGTeam {
  name: string;
  players: Player[];
  score: number;
  kills: number;
  placement: number
}
