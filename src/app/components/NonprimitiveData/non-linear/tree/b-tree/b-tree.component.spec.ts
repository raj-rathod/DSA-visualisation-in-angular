import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BTreeComponent } from './b-tree.component';

describe('BTreeComponent', () => {
  let component: BTreeComponent;
  let fixture: ComponentFixture<BTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
