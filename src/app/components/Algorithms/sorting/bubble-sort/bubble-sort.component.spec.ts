import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSortComponent } from './bubble-sort.component';

describe('BubbleSortComponent', () => {
  let component: BubbleSortComponent;
  let fixture: ComponentFixture<BubbleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
