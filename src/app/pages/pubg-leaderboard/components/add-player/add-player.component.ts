import { Component, EventEmitter, inject, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerFormComponent } from './add-player-form/add-player-form.component';
import { Player } from '../../../../interfaces/pubg.interfaces';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
  @Output() playerAdded = new EventEmitter<Player>()

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(AddPlayerFormComponent);

    dialogRef.afterClosed().subscribe((player) => {
        this.playerAdded.emit(player);
    })
  }
}
