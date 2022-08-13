import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SortingAlgorithmComponent } from './sorting-algorithm/sorting-algorithm.component';

const routes: Routes = [
  {
    path:'', component: SortingAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {}