import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrassenComponent } from './strassen.component';

describe('StrassenComponent', () => {
  let component: StrassenComponent;
  let fixture: ComponentFixture<StrassenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrassenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrassenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
