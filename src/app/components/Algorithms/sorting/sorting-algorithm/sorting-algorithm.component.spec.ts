import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingAlgorithmComponent } from './sorting-algorithm.component';

describe('SortingAlgorithmComponent', () => {
  let component: SortingAlgorithmComponent;
  let fixture: ComponentFixture<SortingAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortingAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortingAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
