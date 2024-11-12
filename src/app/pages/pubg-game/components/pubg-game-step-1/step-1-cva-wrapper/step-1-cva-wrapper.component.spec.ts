import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1CvaWrapperComponent } from './step-1-cva-wrapper.component';

describe('Step1CvaWrapperComponent', () => {
  let component: Step1CvaWrapperComponent;
  let fixture: ComponentFixture<Step1CvaWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step1CvaWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step1CvaWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
