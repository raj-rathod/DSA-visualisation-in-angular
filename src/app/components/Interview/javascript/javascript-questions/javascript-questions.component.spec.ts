import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptQuestionsComponent } from './javascript-questions.component';

describe('JavascriptQuestionsComponent', () => {
  let component: JavascriptQuestionsComponent;
  let fixture: ComponentFixture<JavascriptQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
