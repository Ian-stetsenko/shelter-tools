import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

interface Player {
  position: number
  name: string
  score: number
}

const PLAYERS_DATA: Player[] = [
  { position: 1, name: '2hard', score: 13 },
  { position: 2, name: 'test', score: 12 },
  { position: 3, name: 'test2', score: 11 },
  { position: 4, name: 'test3', score: 10 },
];

@Component({
  selector: 'app-leaderboard-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './leaderboard-table.component.html',
  styleUrl: './leaderboard-table.component.scss'
})
export class LeaderboardTableComponent {
  displayColumns = ['position', 'name', 'score'];
  dataSource = PLAYERS_DATA;
}
