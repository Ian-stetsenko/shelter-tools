import { Component, inject, OnInit } from '@angular/core';
import { LeaderboardTableComponent } from './components/leaderboard-table/leaderboard-table.component';
import { FirestoreDbService } from '../../services/firestore-db.service';
import { AddGameComponent } from './components/add-game/add-game.component';

@Component({
  selector: 'app-pubg-leaderboard',
  standalone: true,
  imports: [LeaderboardTableComponent, AddGameComponent],
  templateUrl: './pubg-leaderboard.component.html',
  styleUrl: './pubg-leaderboard.component.scss'
})
export class PubgLeaderboardComponent implements OnInit {
  db = inject(FirestoreDbService);

  ngOnInit(): void {
    // this.db.getPlayers()
    //   .subscribe(players => console.log(players));
  }
}
