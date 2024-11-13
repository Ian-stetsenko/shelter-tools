import { Component, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

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
    label: 'Squad of 3'
  },
  {
    size: 4,
    label: 'Squad'
  }
]

@Component({
  selector: 'app-step-2-cva-wrapper',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: Step2CvaWrapperComponent
    }
  ],
  templateUrl: './step-2-cva-wrapper.component.html',
  styleUrl: './step-2-cva-wrapper.component.scss'
})
export class Step2CvaWrapperComponent implements ControlValueAccessor {
  teamsChanged: Function
  touched: Function

  teamSizes = TEAM_RULES;

  selectedConfiguration = signal({});

  registerOnChange(fn: any): void {
    this.teamsChanged = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    this.selectedConfiguration.set(obj);
  }

  teamSizeSelected(size): void {
    this.selectedConfiguration.set(size);
    this.teamsChanged(size);
  }
}
