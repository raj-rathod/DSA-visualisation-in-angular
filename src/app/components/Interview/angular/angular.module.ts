import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularQuestionsComponent } from './angular-questions/angular-questions.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    AngularQuestionsComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    SharedModule
  ]
})
export class AngularModule { }
