import {
  IPubgMatch,
  PubgApiMatch,
  PubgApiMatchData, PubgApiMatchParticipant,
  PUBGTeam
} from '../interfaces/pubg.interfaces';
import { inject } from '@angular/core';
import { PubgApiService } from '../services/pubg-api.service';
import { PubgTeam } from './pubg-team';
import { PubgMatchParticipant } from './pubg-match-participant';

export class PubgMatch implements IPubgMatch {
  teams: PubgTeam[];
  matchId: string;
  participants: PubgMatchParticipant[];
  pubgApiMatchId: string;

  data: PubgApiMatchData

  private readonly pubgApiService = inject(PubgApiService);

  constructor(teams: PUBGTeam[]) {
    this.teams = teams.map(team => {
      const teamModel = new PubgTeam();

      teamModel.setData(team)

      return teamModel;
    })
  }


  loadMatchResults(): void {
    const { players } = this.teams[0];

    this.pubgApiService.getLastCommonMatch(players)
      .subscribe(({ data, included }: PubgApiMatch) => {
        this.data = data;

        this.matchId = data.id;

        this.teams.forEach(team => {
          team.updateTeamWithMatchResults(included as PubgApiMatchParticipant[], this.teams.length);

          this.participants.push(...team.participants)
        });
      })
  }

  // set participants = current player stats per this match
  // open transaction to firestore
  // update teams
  // update match
  // count each player stats (increase based on game result)
  // update players
}
