import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingAlgorithmComponent } from './searching-algorithm.component';

describe('SearchingAlgorithmComponent', () => {
  let component: SearchingAlgorithmComponent;
  let fixture: ComponentFixture<SearchingAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchingAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
