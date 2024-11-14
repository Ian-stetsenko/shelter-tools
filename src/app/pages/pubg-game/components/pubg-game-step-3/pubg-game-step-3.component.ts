import { Component, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Player, PUBGTeam, TeamsConfiguration } from '../../../../interfaces/pubg.interfaces';
import { TeamCardsComponent } from '../../../pubg-leaderboard/components/team-cards/team-cards.component';
import { PubgTeam } from '../../../../models/pubg-team';

@Component({
  selector: 'app-pubg-game-step-3',
  standalone: true,
  imports: [TeamCardsComponent],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: PubgGameStep3Component
  }],
  templateUrl: './pubg-game-step-3.component.html',
  styleUrl: './pubg-game-step-3.component.scss'
})
export class PubgGameStep3Component implements ControlValueAccessor, OnChanges {
  @Input() players: Player[];
  @Input() teamSize = 1;

  teams = signal<PUBGTeam[]>([]);

  valueChanged: Function
  touched: Function

  ngOnChanges({ players, teamSize }: SimpleChanges = {}) {
    if (players || teamSize) {
      this.splitIntoTeams();
    }
  }

  registerOnChange(fn: any): void {
    this.valueChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  writeValue(teams: PUBGTeam[]): void {
    this.teams.set(teams);
  }

  splitIntoTeams(): void {
    const shuffledPlayers = [...this?.players];

    for (let i = shuffledPlayers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPlayers[i], shuffledPlayers[j]] = [shuffledPlayers[j], shuffledPlayers[i]];
    }

    const teams = [];
    const { teamSize } = this;
    for (let i = 0; i < shuffledPlayers.length; i += teamSize) {
      const team = shuffledPlayers.slice(i, i + teamSize);
      const teamModel = new PubgTeam();

      teamModel.players = team;
      teamModel.placement = teams.length + 1;

      teams.push(teamModel);
    }

    this.teams.set(teams);
  }

  updateTeamsConfig(teams: PUBGTeam[]) {
    this.teams.set(teams)
    this.valueChanged && this.valueChanged(teams);
  }
}
