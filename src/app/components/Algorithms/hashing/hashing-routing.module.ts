import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HashingAlgorithmComponent } from './hashing-algorithm/hashing-algorithm.component';

const routes: Routes = [
  {
    path:'', component: HashingAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HashingRoutingModule {}