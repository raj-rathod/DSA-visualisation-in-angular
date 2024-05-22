import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringProblemComponent } from './string-problem/string-problem.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'string'
  },
  {
    path:'string', component: StringProblemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemSolvingRoutingModule { }
