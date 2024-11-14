import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgGameStep3Component } from './pubg-game-step-3.component';

describe('PubgGameStep3Component', () => {
  let component: PubgGameStep3Component;
  let fixture: ComponentFixture<PubgGameStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgGameStep3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgGameStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
