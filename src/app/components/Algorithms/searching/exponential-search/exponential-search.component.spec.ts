import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponentialSearchComponent } from './exponential-search.component';

describe('ExponentialSearchComponent', () => {
  let component: ExponentialSearchComponent;
  let fixture: ComponentFixture<ExponentialSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExponentialSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponentialSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
