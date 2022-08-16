import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpSearchComponent } from './jump-search.component';

describe('JumpSearchComponent', () => {
  let component: JumpSearchComponent;
  let fixture: ComponentFixture<JumpSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
