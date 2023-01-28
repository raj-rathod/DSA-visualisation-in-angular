import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousNextRouteComponent } from './previous-next-route.component';

describe('PreviousNextRouteComponent', () => {
  let component: PreviousNextRouteComponent;
  let fixture: ComponentFixture<PreviousNextRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousNextRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousNextRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
