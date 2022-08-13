import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreedyAlgorithmComponent } from './greedy-algorithm.component';

describe('GreedyAlgorithmComponent', () => {
  let component: GreedyAlgorithmComponent;
  let fixture: ComponentFixture<GreedyAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreedyAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreedyAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
