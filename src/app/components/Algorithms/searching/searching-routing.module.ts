import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { ExponentialSearchComponent } from './exponential-search/exponential-search.component';
import { FibonacciSearchComponent } from './fibonacci-search/fibonacci-search.component';
import { InterpolationSearchComponent } from './interpolation-search/interpolation-search.component';
import { JumpSearchComponent } from './jump-search/jump-search.component';
import { LinearSearchComponent } from './linear-search/linear-search.component';
import { SearchingAlgorithmComponent } from './searching-algorithm/searching-algorithm.component';
import { pageMetaData } from 'src/app/core/meta-data/meta-data';

const routes: Routes = [
  {
    path:'', component: SearchingAlgorithmComponent
  },
  {
    path: 'linear-search', 
    data: pageMetaData.linearSearch,
    component: LinearSearchComponent
  },
  {
    path: 'binary-search', 
    data: pageMetaData.binarySearch,
    component: BinarySearchComponent
  },
  {
    path: 'jump-search', 
    data: pageMetaData.jumpSearch,
    component: JumpSearchComponent
  },
  {
    path: 'interpolation-search',
    data: pageMetaData.interpolationSearch,
    component: InterpolationSearchComponent
  },
  {
    path: 'exponential-search', 
    data: pageMetaData.exponentialSearch,
    component: ExponentialSearchComponent
  },
  {
    path: 'fibonacci-search', component: FibonacciSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchingRoutingModule {}