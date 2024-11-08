import { Component, computed, Input, model, OnInit, signal } from '@angular/core';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { Player } from '../../../../interfaces/pubg.interfaces';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';

const PLAYERS_DATA: Player[] = [
  { position: 1, name: '2hard', score: 13 },
  { position: 2, name: 'test', score: 12 },
  { position: 3, name: 'test2', score: 11 },
  { position: 4, name: 'test3', score: 10 },
];

@Component({
  selector: 'app-add-game',
  standalone: true,
  imports: [MatChipsModule, MatAutocompleteModule, FormsModule],
  templateUrl: './add-game.component.html',
  styleUrl: './add-game.component.scss'
})
export class AddGameComponent implements OnInit {
  @Input() players: Player[] = PLAYERS_DATA;

  selectedPlayers = signal([]);
  currentPlayer = model('');
  filteredPlayers = computed(() => {
    const currentPlayer = this.currentPlayer().toLowerCase();
  })

  remainingPlayers = computed(() => {
    return this.players.filter(player => !this.selectedPlayers().includes(player))
  })

  ngOnInit(): void {

  }

  playerSelected({ option }: MatAutocompleteSelectedEvent): void {
    this.selectedPlayers.update(players =>  [...players, option.value ]);
    this.currentPlayer.set('');
    option.deselect();
  }

  autocompleteDisplayFn(player: Player): string {
    return player && player.name;
  }

  add($event: MatChipInputEvent) {
    this.currentPlayer.set('');
  }
}
