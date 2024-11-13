import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { angularInterviewQuestion } from 'src/app/core/interview-questions/angular/angular-metadata';
import { Helper } from 'src/app/helper/helper';
import { HighlightService } from 'src/app/shared/services/highlight-syntax.service';

@Component({
  selector: 'app-angular-questions',
  templateUrl: './angular-questions.component.html',
  styleUrls: ['./angular-questions.component.css']
})
export class AngularQuestionsComponent implements OnInit, AfterViewInit, AfterViewChecked {
questions = angularInterviewQuestion;
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
