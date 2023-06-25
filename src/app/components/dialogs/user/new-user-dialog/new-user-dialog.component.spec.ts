import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDialogComponent } from './new-user-dialog.component';

describe('NewUserDialogComponent', () => {
  let component: NewUserDialogComponent;
  let fixture: ComponentFixture<NewUserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUserDialogComponent]
    });
    fixture = TestBed.createComponent(NewUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
