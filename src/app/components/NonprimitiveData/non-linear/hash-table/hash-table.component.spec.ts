import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashTableComponent } from './hash-table.component';

describe('HashTableComponent', () => {
  let component: HashTableComponent;
  let fixture: ComponentFixture<HashTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HashTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HashTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
