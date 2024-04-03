import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularQuestionsComponent } from './angular-questions/angular-questions.component';

const routes: Routes = [
  {
    path:'', component: AngularQuestionsComponent
  },
  {
    path:':slug', component: AngularQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
