import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDimensionComponent } from './one-dimension.component';

describe('OneDimensionComponent', () => {
  let component: OneDimensionComponent;
  let fixture: ComponentFixture<OneDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
