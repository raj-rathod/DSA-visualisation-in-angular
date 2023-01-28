import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pageMetaData } from 'src/app/core/meta-data/meta-data';
import { AlgorithmComponent } from 'src/app/layout/algorithm/algorithm.component';

const routes: Routes = [
  {
      path: '', component: AlgorithmComponent, 
  },
  {
      path:'backtracking',
      data: pageMetaData.backtracking,
      loadChildren: () => import('./backtracking/backtracking.module').then(m => m.BacktrackingModule)
  },
  {
      path: 'brute-force',
      data: pageMetaData.bruteForce,
      loadChildren: () => import('./brute-force/brute-force.module').then(m => m.BruteForceModule)
  },
  {
      path: 'divide-and-conquer',
      data: pageMetaData.divideAndConquer,
      loadChildren: () => import('./divide-and-conquer/divide-and-conquer.module').then(m => m.DivideAndConquerModule)
  },
  {
      path: 'dynamic-programming',
      data: pageMetaData.dynamicPrograming,
      loadChildren: () => import('./dynamic-programming/dynamic-programming.module').then(m => m.DynamicProgrammingModule)
  },
  {
      path: 'greedy',
      data: pageMetaData.greedy,
      loadChildren: () => import('./greedy/greedy.module').then(m => m.GreedyModule)
  },
  {
      path: 'randomized',
      loadChildren: () => import('./randomized/randomized.module').then(m => m.RandomizedModule)
  },
  {
      path: 'recursive',
      data: pageMetaData.recursive,
      loadChildren: () => import('./recursive/recursive.module').then(m => m.RecursiveModule)
  },
  {
      path: 'searching',
      data: pageMetaData.searching,
      loadChildren: () => import('./searching/searching.module').then(m => m.SearchingModule)
  },
  {
      path: 'sorting',
      data: pageMetaData.sorting,
      loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule {}