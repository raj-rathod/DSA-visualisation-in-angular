import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivideAndConquerAlgorithmComponent } from './divide-and-conquer-algorithm.component';

describe('DivideAndConquerAlgorithmComponent', () => {
  let component: DivideAndConquerAlgorithmComponent;
  let fixture: ComponentFixture<DivideAndConquerAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivideAndConquerAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivideAndConquerAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
