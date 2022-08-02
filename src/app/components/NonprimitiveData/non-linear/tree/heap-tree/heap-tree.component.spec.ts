import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeapTreeComponent } from './heap-tree.component';

describe('HeapTreeComponent', () => {
  let component: HeapTreeComponent;
  let fixture: ComponentFixture<HeapTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeapTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeapTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
