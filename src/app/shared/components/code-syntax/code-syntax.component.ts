import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CodeHighLight } from '../../interfaces/code-highlight.interface';
import { HighlightService } from '../../services/highlight-syntax.service';

@Component({
  selector: 'app-code-syntax',
  templateUrl: './code-syntax.component.html',
  styleUrls: ['./code-syntax.component.css']
})
export class CodeSyntaxComponent implements OnInit, AfterViewInit {
  @Output() sideDrawerClose = new EventEmitter<void>();
  @Input() codeHighlight: CodeHighLight={
    title: 'Test',
    codes: [
      {
        description: 'Code highlighting',
        code:`const test = 'test';
        console.log('Hello world');`
      }
    ]
  };
  constructor(
    private highLightCode: HighlightService,
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.highLightCode.highlightAll();
  }

  closeDrawer(): void {
    this.sideDrawerClose.emit();
  }

}
