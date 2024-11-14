import { Player, PUBGTeam } from '../interfaces/pubg.interfaces';

export class PubgTeam implements PUBGTeam  {
  kills: number = 0;
  name: string = '';
  placement: number = 9;
  players: Player[] = [];
  score: number = 0;
}
