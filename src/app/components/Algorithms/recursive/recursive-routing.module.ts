import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomizedAlgorithmComponent } from '../randomized/randomized-algorithm/randomized-algorithm.component';

const routes: Routes = [
  {
    path:'', component: RandomizedAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursiveRoutingModule {}