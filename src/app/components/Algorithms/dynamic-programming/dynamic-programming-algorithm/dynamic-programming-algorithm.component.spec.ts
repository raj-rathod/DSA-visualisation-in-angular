import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicProgrammingAlgorithmComponent } from './dynamic-programming-algorithm.component';

describe('DynamicProgrammingAlgorithmComponent', () => {
  let component: DynamicProgrammingAlgorithmComponent;
  let fixture: ComponentFixture<DynamicProgrammingAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicProgrammingAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicProgrammingAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
