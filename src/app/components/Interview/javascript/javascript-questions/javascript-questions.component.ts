import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { javascriptInterviewQuestion } from 'src/app/core/interview-questions/javascript/javascript-metadata';
import { Helper } from 'src/app/helper/helper';
import { HighlightService } from 'src/app/shared/services/highlight-syntax.service';

@Component({
  selector: 'app-javascript-questions',
  templateUrl: './javascript-questions.component.html',
  styleUrls: ['./javascript-questions.component.css']
})
export class JavascriptQuestionsComponent implements OnInit {
  questions = javascriptInterviewQuestion;

    constructor(
      private highLightCode: HighlightService,
  
    ) { }
  
    ngOnInit(): void {
    }
  
    ngAfterViewInit(): void {
      this.highLightCode.highlightAll();
    }
  
    ngAfterViewChecked(): void {
      this.highLightCode.highlightAll();
    }
}
