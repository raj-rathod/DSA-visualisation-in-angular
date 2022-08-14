import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursiveAlgorithmComponent } from './recursive-algorithm/recursive-algorithm.component';

const routes: Routes = [
  {
    path:'', component: RecursiveAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursiveRoutingModule {}