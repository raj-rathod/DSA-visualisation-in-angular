import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterValueComponent } from './enter-value.component';

describe('EnterValueComponent', () => {
  let component: EnterValueComponent;
  let fixture: ComponentFixture<EnterValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
