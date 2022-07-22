import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixInputDialogComponent } from './matrix-input-dialog.component';

describe('MatrixInputDialogComponent', () => {
  let component: MatrixInputDialogComponent;
  let fixture: ComponentFixture<MatrixInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
