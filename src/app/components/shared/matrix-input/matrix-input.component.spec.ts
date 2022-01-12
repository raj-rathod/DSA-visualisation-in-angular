import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixInputComponent } from './matrix-input.component';

describe('MatrixInputComponent', () => {
  let component: MatrixInputComponent;
  let fixture: ComponentFixture<MatrixInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatrixInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
