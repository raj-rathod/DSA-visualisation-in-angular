import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BruteForceAlgorithmComponent } from './brute-force-algorithm/brute-force-algorithm.component';

const routes: Routes = [
  {
    path: '', component: BruteForceAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BruteForceRoutingModule {}