import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizedAlgorithmComponent } from './randomized-algorithm.component';

describe('RandomizedAlgorithmComponent', () => {
  let component: RandomizedAlgorithmComponent;
  let fixture: ComponentFixture<RandomizedAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomizedAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomizedAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
