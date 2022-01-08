import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatComponent } from './float.component';

describe('FloatComponent', () => {
  let component: FloatComponent;
  let fixture: ComponentFixture<FloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
