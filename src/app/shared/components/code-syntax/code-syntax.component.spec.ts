import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSyntaxComponent } from './code-syntax.component';

describe('CodeSyntaxComponent', () => {
  let component: CodeSyntaxComponent;
  let fixture: ComponentFixture<CodeSyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeSyntaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeSyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
