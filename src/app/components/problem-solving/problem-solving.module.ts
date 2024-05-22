import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemSolvingRoutingModule } from './problem-solving-routing.module';
import { StringProblemComponent } from './string-problem/string-problem.component';


@NgModule({
  declarations: [
    StringProblemComponent
  ],
  imports: [
    CommonModule,
    ProblemSolvingRoutingModule
  ]
})
export class ProblemSolvingModule { }
