import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaratsubaComponent } from './karatsuba.component';

describe('KaratsubaComponent', () => {
  let component: KaratsubaComponent;
  let fixture: ComponentFixture<KaratsubaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaratsubaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaratsubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
