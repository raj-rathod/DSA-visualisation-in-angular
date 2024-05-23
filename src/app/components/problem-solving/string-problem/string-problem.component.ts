import { AfterViewInit, Component, OnInit } from '@angular/core';
import { StringTips } from 'src/app/core/problem-solving/string';
import { HighlightService } from 'src/app/shared/services/highlight-syntax.service';

@Component({
  selector: 'app-string-problem',
  templateUrl: './string-problem.component.html',
  styleUrls: ['./string-problem.component.css']
})
export class StringProblemComponent implements OnInit, AfterViewInit {
  stringTips = StringTips
  constructor(
    private highLightCode: HighlightService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.highLightCode.highlightAll();
  }

}
