import { Component, inject, model } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { FirestoreDbService } from '../../../../../services/firestore-db.service';

@Component({
  selector: 'app-add-player-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-player-form.component.html',
  styleUrl: './add-player-form.component.scss'
})
export class AddPlayerFormComponent {
  readonly dialogRef = inject(MatDialogRef<AddPlayerFormComponent>);
  readonly dbService = inject(FirestoreDbService);

  readonly name = model('');

  isLoading = false;

  onNoClick() {
    this.dialogRef.close();
  }

  createNewPlayer() {
    this.isLoading = true;

    const newPlayer = {
      name: this.name(),
      score: 0,
      position: 999
    }

    this.dbService.addPlayer(newPlayer)
      .subscribe(() => {
        this.isLoading = false;
        this.dialogRef.close(newPlayer);
      })
  }
}
