import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5QuestionsComponent } from './html5-questions.component';

describe('Html5QuestionsComponent', () => {
  let component: Html5QuestionsComponent;
  let fixture: ComponentFixture<Html5QuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5QuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5QuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
