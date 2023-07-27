import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovecategoryComponent } from './removecategory.component';

describe('RemovecategoryComponent', () => {
  let component: RemovecategoryComponent;
  let fixture: ComponentFixture<RemovecategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemovecategoryComponent]
    });
    fixture = TestBed.createComponent(RemovecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
