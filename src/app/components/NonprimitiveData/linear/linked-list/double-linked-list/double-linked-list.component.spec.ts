import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleLinkedListComponent } from './double-linked-list.component';

describe('DoubleLinkedListComponent', () => {
  let component: DoubleLinkedListComponent;
  let fixture: ComponentFixture<DoubleLinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleLinkedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleLinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
