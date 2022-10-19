import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearSearchComponent } from './linear-search.component';

describe('LinearSearchComponent', () => {
  let component: LinearSearchComponent;
  let fixture: ComponentFixture<LinearSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinearSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
