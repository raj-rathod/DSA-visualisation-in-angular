import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BruteForceAlgorithmComponent } from './brute-force-algorithm.component';

describe('BruteForceAlgorithmComponent', () => {
  let component: BruteForceAlgorithmComponent;
  let fixture: ComponentFixture<BruteForceAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BruteForceAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BruteForceAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
