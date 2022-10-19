import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveAlgorithmComponent } from './recursive-algorithm.component';

describe('RecursiveAlgorithmComponent', () => {
  let component: RecursiveAlgorithmComponent;
  let fixture: ComponentFixture<RecursiveAlgorithmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecursiveAlgorithmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveAlgorithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
