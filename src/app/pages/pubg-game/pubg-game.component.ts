import { Component, Input } from '@angular/core';
import { PubgGameResultsTableComponent } from './components/pubg-game-results-table/pubg-game-results-table.component';
import { PUBGTeam } from '../../interfaces/pubg.interfaces';
import { PubgMatch } from '../../models/pubg-match';

@Component({
  selector: 'app-pubg-game',
  standalone: true,
  imports: [
    PubgGameResultsTableComponent
  ],
  templateUrl: './pubg-game.component.html',
  styleUrl: './pubg-game.component.scss'
})
export class PubgGameComponent {
  @Input() set teams(teams: PUBGTeam[]) {
    if (!teams.length) return

    this.match = new PubgMatch(teams);

    this.match.loadMatchResults()
  }

  match: PubgMatch
}
