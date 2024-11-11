import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgGameStepperComponent } from './pubg-game-stepper.component';

describe('PubgGameStepperComponent', () => {
  let component: PubgGameStepperComponent;
  let fixture: ComponentFixture<PubgGameStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgGameStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgGameStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
