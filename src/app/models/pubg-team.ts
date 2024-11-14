import { Player, PubgApiMatchParticipant, PUBGTeam } from '../interfaces/pubg.interfaces';
import { PubgMatchParticipant } from './pubg-match-participant';

const scorePerPlacementBasedOnAmountOfTeams = {
  3: [0,3,1,0],
  4: [0,5,3,1,0],
  5: [0,5,3,1,0,0],
  6: [0,5,3,1,0,0,0],
  7: [0,6,4,2,1,1,0,0],
  8: [0,6,4,2,1,1,0,0,0],
}

export class PubgTeam implements PUBGTeam  {
  kills: number = 0;
  name: string = '';
  placement: number = 9;
  players: Player[] = [];
  score: number = 0;
  participants: PubgMatchParticipant[] = []

  setData(data: PUBGTeam): void {
    Object.assign(this as any, data);
  }

  updateTeamWithMatchResults(allParticipants: PubgApiMatchParticipant[], amountOfTeams: number): void {
    allParticipants.forEach((participant) => {
      const { name, kills, winPlace } = participant.attributes.stats;

      const teamPlayerFromParticipant: Player = this.players.find(({ name: teamPlayerName }) => teamPlayerName === name);

      if (teamPlayerFromParticipant) {
        this.placement = winPlace;
        this.kills += kills;

        const currentMatchScore = scorePerPlacementBasedOnAmountOfTeams[amountOfTeams][winPlace] + kills

        teamPlayerFromParticipant.score += currentMatchScore;

        const participant = new PubgMatchParticipant({
          kills,
          id: teamPlayerFromParticipant.id,
          name: teamPlayerFromParticipant.name,
          teamName: this.name,
          score: currentMatchScore,
          placement: winPlace
        })

        this.participants.push(participant);
      }
    });

    this.refreshTeamScore(amountOfTeams);
  }

  refreshTeamScore(amountOfTeams: number): void {
    this.score = scorePerPlacementBasedOnAmountOfTeams[amountOfTeams][this.placement] + this.kills;
  }
}
