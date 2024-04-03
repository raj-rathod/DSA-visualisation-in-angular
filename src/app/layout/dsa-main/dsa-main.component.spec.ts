import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaMainComponent } from './dsa-main.component';

describe('DsaMainComponent', () => {
  let component: DsaMainComponent;
  let fixture: ComponentFixture<DsaMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsaMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsaMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
