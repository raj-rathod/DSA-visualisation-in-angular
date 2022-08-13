import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreedyAlgorithmComponent } from './greedy-algorithm/greedy-algorithm.component';

const routes: Routes = [
  {
    path:'', component: GreedyAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreedyRoutingModule {}