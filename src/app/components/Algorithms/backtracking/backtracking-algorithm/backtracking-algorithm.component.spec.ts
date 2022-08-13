import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacktrackingAlgorithmComponent } from './backtracking-algorithm.component';

describe('BacktrackingAlgorithmComponent', () => {
  let component: BacktrackingAlgorithmComponent;
  let fixture: ComponentFixture<BacktrackingAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacktrackingAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BacktrackingAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
