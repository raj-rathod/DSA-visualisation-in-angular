import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosestPairOfPointsComponent } from './closest-pair-of-points.component';

describe('ClosestPairOfPointsComponent', () => {
  let component: ClosestPairOfPointsComponent;
  let fixture: ComponentFixture<ClosestPairOfPointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosestPairOfPointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosestPairOfPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
