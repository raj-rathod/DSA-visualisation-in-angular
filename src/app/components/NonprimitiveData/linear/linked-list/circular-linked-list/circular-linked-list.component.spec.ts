import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularLinkedListComponent } from './circular-linked-list.component';

describe('CircularLinkedListComponent', () => {
  let component: CircularLinkedListComponent;
  let fixture: ComponentFixture<CircularLinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularLinkedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
