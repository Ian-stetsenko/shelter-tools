import { Routes } from '@angular/router';
import { PubgGameStepperComponent } from './pages/pubg-game/components/pubg-game-stepper/pubg-game-stepper.component';
import { PubgLeaderboardComponent } from './pages/pubg-leaderboard/pubg-leaderboard.component';

export const routes: Routes = [
  {
    path: 'new-pubg-game',
    component: PubgGameStepperComponent
  },
  {
    path: 'pubg-leaderboard',
    component: PubgLeaderboardComponent
  }
];
