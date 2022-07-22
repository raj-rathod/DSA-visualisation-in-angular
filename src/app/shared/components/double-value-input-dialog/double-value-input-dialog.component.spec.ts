import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleValueInputDialogComponent } from './double-value-input-dialog.component';

describe('DoubleValueInputDialogComponent', () => {
  let component: DoubleValueInputDialogComponent;
  let fixture: ComponentFixture<DoubleValueInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleValueInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleValueInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
