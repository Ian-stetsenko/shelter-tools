import { Component, Input, OnInit } from '@angular/core';
import { PubgMatch } from '../../../../models/pubg-match';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pubg-game-results-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pubg-game-results-table.component.html',
  styleUrl: './pubg-game-results-table.component.scss'
})
export class PubgGameResultsTableComponent implements OnInit {
  @Input() match: PubgMatch;

  pubgApi

  visibleColumns = ['teamName', 'name', 'kills', 'score', 'placement']

  // table with line color codes for same team players

  ngOnInit() {

  }
}
