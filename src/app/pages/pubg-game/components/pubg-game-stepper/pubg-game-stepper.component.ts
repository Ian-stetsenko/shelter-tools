import { Component, inject } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PubgGameStep1Component } from '../pubg-game-step-1/pubg-game-step-1.component';
import { Step1CvaWrapperComponent } from '../pubg-game-step-1/step-1-cva-wrapper/step-1-cva-wrapper.component';

@Component({
  selector: 'app-pubg-game-stepper',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    Step1CvaWrapperComponent
  ],
  templateUrl: './pubg-game-stepper.component.html',
  styleUrl: './pubg-game-stepper.component.scss'
})
export class PubgGameStepperComponent {
  isEditable = true
  private _formBuilder = inject(FormBuilder);

  secondFormGroup = this._formBuilder.group({
    secondCtrl: [''],
  });

  gameControls = this._formBuilder.group({
    selectedPlayers: [[], Validators.required],
    teams: []
  })
}
