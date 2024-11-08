import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PubgLeaderboardComponent } from './pages/pubg-leaderboard/pubg-leaderboard.component';
import { FirebaseAppService } from './services/firebase-app.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PubgLeaderboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'shelter-tools';

  firebase = inject(FirebaseAppService);

  ngOnInit(): void {
    this.firebase.init();
  }
}
