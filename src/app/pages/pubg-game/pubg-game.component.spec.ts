import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgGameComponent } from './pubg-game.component';

describe('PubgGameComponent', () => {
  let component: PubgGameComponent;
  let fixture: ComponentFixture<PubgGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
