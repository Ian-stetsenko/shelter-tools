import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgGameResultsTableComponent } from './pubg-game-results-table.component';

describe('PubgGameResultsTableComponent', () => {
  let component: PubgGameResultsTableComponent;
  let fixture: ComponentFixture<PubgGameResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubgGameResultsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubgGameResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
