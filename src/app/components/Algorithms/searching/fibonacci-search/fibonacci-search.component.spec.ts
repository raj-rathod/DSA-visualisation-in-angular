import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciSearchComponent } from './fibonacci-search.component';

describe('FibonacciSearchComponent', () => {
  let component: FibonacciSearchComponent;
  let fixture: ComponentFixture<FibonacciSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
