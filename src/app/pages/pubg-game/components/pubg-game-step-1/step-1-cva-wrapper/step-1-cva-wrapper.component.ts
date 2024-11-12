import { Component, signal } from '@angular/core';
import { PubgGameStep1Component } from '../pubg-game-step-1.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Player } from '../../../../../interfaces/pubg.interfaces';

@Component({
  selector: 'app-step-1-cva-wrapper',
  standalone: true,
  imports: [
    PubgGameStep1Component
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: Step1CvaWrapperComponent
    },
  ],
  templateUrl: './step-1-cva-wrapper.component.html',
  styleUrl: './step-1-cva-wrapper.component.scss'
})
export class Step1CvaWrapperComponent implements ControlValueAccessor {
  changeFn: Function
  touched: Function

  players = signal<Player[]>([]);

  registerOnChange(fn: any): void {
    this.changeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn
  }

  writeValue(players: Player[]): void {
    if (players) this.players.set(players);
  }

}
