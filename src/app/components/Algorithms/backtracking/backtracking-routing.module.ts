import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BacktrackingAlgorithmComponent } from './backtracking-algorithm/backtracking-algorithm.component';

const routes: Routes = [
  {
    path: '', component: BacktrackingAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BacktrackingRoutingModule {}