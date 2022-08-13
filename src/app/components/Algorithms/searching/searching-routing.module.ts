import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchingAlgorithmComponent } from './searching-algorithm/searching-algorithm.component';

const routes: Routes = [
  {
    path:'', component: SearchingAlgorithmComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule {}