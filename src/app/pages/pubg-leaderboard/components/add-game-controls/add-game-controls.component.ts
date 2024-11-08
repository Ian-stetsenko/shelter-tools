import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';

const TEAM_RULES = [
  {
    size: 1,
    label: 'Solo'
  },
  {
    size: 2,
    label: 'Duo'
  },
  {
    size: 3,
    label: 'Squad (3)'
  },
  {
    size: 4,
    label: 'Squad'
  }
]

export interface TeamSize {
  size: number
  label: string
}

@Component({
  selector: 'app-add-game-controls',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './add-game-controls.component.html',
  styleUrl: './add-game-controls.component.scss'
})
export class AddGameControlsComponent {
  @Output() teamSizeSelected = new EventEmitter<TeamSize>()

  teamRules = TEAM_RULES;

  select({ value }: MatSelectChange) {
    this.teamSizeSelected.emit(value);
  }

}
