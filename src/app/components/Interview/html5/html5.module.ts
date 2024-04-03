import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Html5RoutingModule } from './html5-routing.module';
import { Html5QuestionsComponent } from './html5-questions/html5-questions.component';


@NgModule({
  declarations: [
    Html5QuestionsComponent
  ],
  imports: [
    CommonModule,
    Html5RoutingModule
  ]
})
export class Html5Module { }
