import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivideAndConquerAlgorithmComponent } from './divide-and-conquer-algorithm/divide-and-conquer-algorithm.component';

const routes: Routes = [
  {
    path: '', component: DivideAndConquerAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivideAndConqureRoutingModule {}