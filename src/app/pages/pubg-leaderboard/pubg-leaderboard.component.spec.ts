import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgLeaderboardComponent } from './pubg-leaderboard.component';

describe('PubgLeaderboardComponent', () => {
  let component: PubgLeaderboardComponent;
  let fixture: ComponentFixture<PubgLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgLeaderboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
