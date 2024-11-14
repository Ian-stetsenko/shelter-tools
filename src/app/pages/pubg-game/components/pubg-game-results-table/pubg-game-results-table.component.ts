import { Component, Input } from '@angular/core';
import { PubgMatch } from '../../../../models/pubg-match';

@Component({
  selector: 'app-pubg-game-results-table',
  standalone: true,
  imports: [],
  templateUrl: './pubg-game-results-table.component.html',
  styleUrl: './pubg-game-results-table.component.scss'
})
export class PubgGameResultsTableComponent {
  @Input() match: PubgMatch;

  visibleColumns = ['teamName', 'name', 'kills', 'score', 'placement']

  // table with line color codes for same team players
}
