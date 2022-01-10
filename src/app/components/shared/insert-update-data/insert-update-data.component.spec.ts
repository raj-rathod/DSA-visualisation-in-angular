import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUpdateDataComponent } from './insert-update-data.component';

describe('InsertUpdateDataComponent', () => {
  let component: InsertUpdateDataComponent;
  let fixture: ComponentFixture<InsertUpdateDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertUpdateDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUpdateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
