import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2CvaWrapperComponent } from './step-2-cva-wrapper.component';

describe('Step2CvaWrapperComponent', () => {
  let component: Step2CvaWrapperComponent;
  let fixture: ComponentFixture<Step2CvaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2CvaWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2CvaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
