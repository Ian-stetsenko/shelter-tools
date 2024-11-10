import { Component, Input, signal } from '@angular/core';
import { Player, TeamsConfiguration } from '../../../../interfaces/pubg.interfaces';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface GameResultsTeam {
  teamName: string;
  players: Player[];
  score: number;
  rank: number;
  kills: number;
}

@Component({
  selector: 'app-game-results',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './game-results.component.html',
  styleUrl: './game-results.component.scss'
})
export class GameResultsComponent {
  @Input() set teams(config: TeamsConfiguration) {
    this.teamsConfiguration.set(config);
    this.prepareDataSource();
  }

  teamsConfiguration = signal<TeamsConfiguration>({} as TeamsConfiguration)
  dataSource = signal<GameResultsTeam[]>([]);

  readonly columnsToDisplay = ['teamName', 'score', 'rank'];
  readonly columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: GameResultsTeam | null;

  private prepareDataSource(): void {
    const { teams, teamNames } = this.teamsConfiguration();

    const dataSource = teams.map((team, index) => {
      return { teamName: teamNames[index], players: team, score: 0, rank: 0, kills: 0 }
    });

    this.dataSource.set(dataSource);
  }
}
