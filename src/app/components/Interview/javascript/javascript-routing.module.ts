import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptQuestionsComponent } from './javascript-questions/javascript-questions.component';

const routes: Routes = [
  {
    path:'', component: JavascriptQuestionsComponent
  },
  {
    path:':slug', component: JavascriptQuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JavascriptRoutingModule { }
