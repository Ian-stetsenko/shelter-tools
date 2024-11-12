import { Component, computed, EventEmitter, inject, Input, model, Output, signal } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Player } from '../../../../interfaces/pubg.interfaces';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AddPlayerComponent } from '../../../pubg-leaderboard/components/add-player/add-player.component';
import { FormsModule } from '@angular/forms';
import { FirestoreDbService } from '../../../../services/firestore-db.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pubg-game-step-1',
  standalone: true,
  imports: [
    AddPlayerComponent,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './pubg-game-step-1.component.html',
  styleUrl: './pubg-game-step-1.component.scss'
})
export class PubgGameStep1Component {
  @Input() set playersList(players) {
    this.selectedPlayers.set(players);
    this.players.set(players);
  }

  @Output() playerAdded = new EventEmitter<Player>();
  @Output() playersSelected = new EventEmitter<Player[]>()

  db = inject(FirestoreDbService);

  currentPlayer = model('');
  selectedPlayers = signal([]);
  players = signal([]);

  filteredPlayers = computed(() => {
    const currentPlayer = this.currentPlayer().toLowerCase();
  })

  remainingPlayers = computed(() => {
    return this.players().filter(player => !this.selectedPlayers().includes(player))
  })

  add($event: MatChipInputEvent) {
    this.currentPlayer.set('');
  }

  autocompleteDisplayFn(player: Player): string {
    return player && player.name;
  }

  playerSelected({ option }: MatAutocompleteSelectedEvent): void {
    this.selectedPlayers.update(players =>  [...players, option.value ]);
    this.currentPlayer.set('');
    option.deselect();

    this.playersSelected.emit(this.selectedPlayers());
  }

  addPlayer(player: Player) {
    this.selectedPlayers.update((players) => [...players, player]);
    this.playerAdded.emit(player);

    this.playersSelected.emit(this.selectedPlayers());
  }

  loadPlayers(): void {
    this.db.getPlayers()
      .subscribe(players => this.players.set(players));
  }

  deselectPlayer(playerToDeselect: Player): void {
    this.selectedPlayers.update(
      (players) => players.filter(
        (selectedPlayer : Player) => selectedPlayer.id !== playerToDeselect.id
      )
    )

    this.playersSelected.emit(this.selectedPlayers());
  }
}
