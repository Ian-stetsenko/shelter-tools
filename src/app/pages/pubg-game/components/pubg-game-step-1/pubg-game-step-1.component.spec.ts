import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgGameStep1Component } from './pubg-game-step-1.component';

describe('PubgGameStep1Component', () => {
  let component: PubgGameStep1Component;
  let fixture: ComponentFixture<PubgGameStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgGameStep1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgGameStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
