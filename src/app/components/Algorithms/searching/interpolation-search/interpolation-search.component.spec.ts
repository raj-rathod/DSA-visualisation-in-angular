import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationSearchComponent } from './interpolation-search.component';

describe('InterpolationSearchComponent', () => {
  let component: InterpolationSearchComponent;
  let fixture: ComponentFixture<InterpolationSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
