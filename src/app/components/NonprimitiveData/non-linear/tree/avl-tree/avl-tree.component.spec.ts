import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlTreeComponent } from './avl-tree.component';

describe('AvlTreeComponent', () => {
  let component: AvlTreeComponent;
  let fixture: ComponentFixture<AvlTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvlTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
