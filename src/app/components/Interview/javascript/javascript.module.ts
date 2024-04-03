import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JavascriptRoutingModule } from './javascript-routing.module';
import { JavascriptQuestionsComponent } from './javascript-questions/javascript-questions.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    JavascriptQuestionsComponent
  ],
  imports: [
    CommonModule,
    JavascriptRoutingModule,
    SharedModule
  ]
})
export class JavascriptModule { }
