import { Component, inject, OnInit, signal } from '@angular/core';
import { LeaderboardTableComponent } from './components/leaderboard-table/leaderboard-table.component';
import { FirestoreDbService } from '../../services/firestore-db.service';
import { AddGameComponent } from './components/add-game/add-game.component';
import { Player } from '../../interfaces/pubg.interfaces';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-pubg-leaderboard',
  standalone: true,
  imports: [LeaderboardTableComponent, AddGameComponent, MatButtonModule],
  templateUrl: './pubg-leaderboard.component.html',
  styleUrl: './pubg-leaderboard.component.scss'
})
export class PubgLeaderboardComponent implements OnInit {
  db = inject(FirestoreDbService);

  players = signal([])

  ngOnInit(): void {
    // this.db.getPlayers()
    //   .subscribe(players => console.log(players));
  }

  addNewPlayer(player: Player): void {
    this.players.update(players => [...players, player]);
  }

  loadPlayers(): void {
    this.db.getPlayers()
      .subscribe(players => this.players.set(players));
  }
}
