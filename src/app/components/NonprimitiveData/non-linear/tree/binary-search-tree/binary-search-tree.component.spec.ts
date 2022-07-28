import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarySearchTreeComponent } from './binary-search-tree.component';

describe('BinarySearchTreeComponent', () => {
  let component: BinarySearchTreeComponent;
  let fixture: ComponentFixture<BinarySearchTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BinarySearchTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BinarySearchTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
