import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashingAlgorithmComponent } from './hashing-algorithm.component';

describe('HashingAlgorithmComponent', () => {
  let component: HashingAlgorithmComponent;
  let fixture: ComponentFixture<HashingAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashingAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashingAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
