import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleValueInputDialogComponent } from './single-value-input-dialog.component';

describe('SingleValueInputDialogComponent', () => {
  let component: SingleValueInputDialogComponent;
  let fixture: ComponentFixture<SingleValueInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleValueInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleValueInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
