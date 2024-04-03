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
slug:string  = '';
totalQuestion = 0;
currentQuestion = 0;
routesData = Helper.setAllInterviewQuestionRoute('/interview-questions/angular/', this.questions);
question = this.questions[0].answer;
  constructor(
    private highLightCode: HighlightService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.totalQuestion = this.questions.length;
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('slug')){
        this.slug = params.get('slug')!
      }else{
        this.slug = this.questions[0].slug;
        this.router.navigate([`/interview-questions/angular/${this.slug}`]);
      }
      const index = this.questions.findIndex(question => question.slug === this.slug);
      if(index>-1){
        this.question  = this.questions[index].answer
        this.currentQuestion = index+1;
      }else{
        this.router.navigate([`**`]);
      }
      
    })
  }

  ngAfterViewInit(): void {
    this.highLightCode.highlightAll();
  }

  ngAfterViewChecked(): void {
    this.highLightCode.highlightAll();
  }

}
