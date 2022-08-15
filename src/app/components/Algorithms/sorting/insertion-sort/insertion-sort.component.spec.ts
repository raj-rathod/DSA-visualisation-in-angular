import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionSortComponent } from './insertion-sort.component';

describe('InsertionSortComponent', () => {
  let component: InsertionSortComponent;
  let fixture: ComponentFixture<InsertionSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertionSortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
