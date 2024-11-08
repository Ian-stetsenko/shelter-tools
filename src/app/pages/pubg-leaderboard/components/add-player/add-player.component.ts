import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddPlayerFormComponent } from './add-player-form/add-player-form.component';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {

  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(AddPlayerFormComponent);
  }
}
