import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedListComponent } from './linked-list.component';

describe('LinkedListComponent', () => {
  let component: LinkedListComponent;
  let fixture: ComponentFixture<LinkedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
