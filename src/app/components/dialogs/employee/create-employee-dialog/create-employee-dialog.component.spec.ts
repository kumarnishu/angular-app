import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeDialogComponent } from './create-employee-dialog.component';

describe('CreateEmployeeDialogComponent', () => {
  let component: CreateEmployeeDialogComponent;
  let fixture: ComponentFixture<CreateEmployeeDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeDialogComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
