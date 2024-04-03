import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularQuestionsComponent } from './angular-questions.component';

describe('AngularQuestionsComponent', () => {
  let component: AngularQuestionsComponent;
  let fixture: ComponentFixture<AngularQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
