import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDimensionComponent } from './two-dimension.component';

describe('TwoDimensionComponent', () => {
  let component: TwoDimensionComponent;
  let fixture: ComponentFixture<TwoDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
