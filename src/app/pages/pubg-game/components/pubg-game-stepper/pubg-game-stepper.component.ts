import { Component, inject } from '@angular/core';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PubgGameStep1Component } from '../pubg-game-step-1/pubg-game-step-1.component';
import { Step1CvaWrapperComponent } from '../pubg-game-step-1/step-1-cva-wrapper/step-1-cva-wrapper.component';
import { Step2CvaWrapperComponent } from '../pubg-game-step-2/step-2-cva-wrapper/step-2-cva-wrapper.component';
import { PubgGameStep3Component } from '../pubg-game-step-3/pubg-game-step-3.component';

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
    Step1CvaWrapperComponent,
    Step2CvaWrapperComponent,
    PubgGameStep3Component
  ],
  templateUrl: './pubg-game-stepper.component.html',
  styleUrl: './pubg-game-stepper.component.scss'
})
export class PubgGameStepperComponent {
  isEditable = true
  private _formBuilder = inject(FormBuilder);

  gameControls = this._formBuilder.group({
    selectedPlayers: [],
    teams: [],
    teamSize: [{ size: 1 }]
  })

  reset(stepper: MatStepper) {
    stepper.reset();
    this.gameControls.setValue({
      selectedPlayers: [],
      teams: [],
      teamSize: [{ size: 1 }]
    } as any);
  }
}
