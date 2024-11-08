import { Component } from '@angular/core';
import { LeaderboardTableComponent } from './components/leaderboard-table/leaderboard-table.component';

@Component({
  selector: 'app-pubg-leaderboard',
  standalone: true,
  imports: [LeaderboardTableComponent],
  templateUrl: './pubg-leaderboard.component.html',
  styleUrl: './pubg-leaderboard.component.scss'
})
export class PubgLeaderboardComponent {

}
