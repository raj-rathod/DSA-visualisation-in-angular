import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingSortComponent } from './counting-sort.component';

describe('CountingSortComponent', () => {
  let component: CountingSortComponent;
  let fixture: ComponentFixture<CountingSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountingSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
