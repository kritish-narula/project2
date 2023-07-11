import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoatsComponent } from './coats.component';

describe('CoatsComponent', () => {
  let component: CoatsComponent;
  let fixture: ComponentFixture<CoatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoatsComponent]
    });
    fixture = TestBed.createComponent(CoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
