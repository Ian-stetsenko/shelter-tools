import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGameControlsComponent } from './add-game-controls.component';

describe('AddGameControlsComponent', () => {
  let component: AddGameControlsComponent;
  let fixture: ComponentFixture<AddGameControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGameControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGameControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
