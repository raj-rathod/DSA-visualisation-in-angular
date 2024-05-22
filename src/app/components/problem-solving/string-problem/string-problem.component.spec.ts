import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringProblemComponent } from './string-problem.component';

describe('StringProblemComponent', () => {
  let component: StringProblemComponent;
  let fixture: ComponentFixture<StringProblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StringProblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StringProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
