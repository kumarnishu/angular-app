import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfileDialogComponent } from './update-profile-dialog.component';

describe('UpdateProfileDialogComponent', () => {
  let component: UpdateProfileDialogComponent;
  let fixture: ComponentFixture<UpdateProfileDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateProfileDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateProfileDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
