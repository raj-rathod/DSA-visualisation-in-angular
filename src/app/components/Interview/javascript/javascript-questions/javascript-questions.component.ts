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
  slug:string  = '';
  totalQuestion = 0;
  currentQuestion = 0;
  routesData = Helper.setAllInterviewQuestionRoute('/interview-questions/javascript/', this.questions);
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
          this.router.navigate([`/interview-questions/javascript/${this.slug}`]);
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
