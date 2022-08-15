import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadixSortComponent } from './radix-sort.component';

describe('RadixSortComponent', () => {
  let component: RadixSortComponent;
  let fixture: ComponentFixture<RadixSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadixSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadixSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
