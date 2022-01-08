import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrieComponent } from './trie.component';

describe('TrieComponent', () => {
  let component: TrieComponent;
  let fixture: ComponentFixture<TrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
