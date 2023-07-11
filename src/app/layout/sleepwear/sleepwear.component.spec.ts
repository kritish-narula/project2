import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepwearComponent } from './sleepwear.component';

describe('SleepwearComponent', () => {
  let component: SleepwearComponent;
  let fixture: ComponentFixture<SleepwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepwearComponent]
    });
    fixture = TestBed.createComponent(SleepwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
