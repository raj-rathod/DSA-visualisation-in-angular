import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicProgrammingAlgorithmComponent } from './dynamic-programming-algorithm/dynamic-programming-algorithm.component';

const routes: Routes = [
  {
    path: '', component: DynamicProgrammingAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicProgrammingRoutingModule {}