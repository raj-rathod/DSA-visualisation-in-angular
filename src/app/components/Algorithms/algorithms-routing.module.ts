import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmComponent } from 'src/app/layout/algorithm/algorithm.component';

const routes: Routes = [
  {
      path: '', component: AlgorithmComponent 
  },
  {
      path:'backtracking',
      loadChildren: () => import('./backtracking/backtracking.module').then(m => m.BacktrackingModule)
  },
  {
      path: 'brute-force',
      loadChildren: () => import('./brute-force/brute-force.module').then(m => m.BruteForceModule)
  },
  {
      path: 'divide-and-conquer',
      loadChildren: () => import('./divide-and-conquer/divide-and-conquer.module').then(m => m.DivideAndConquerModule)
  },
  {
      path: 'dynamic-programming',
      loadChildren: () => import('./dynamic-programming/dynamic-programming.module').then(m => m.DynamicProgrammingModule)
  },
  {
      path: 'greedy',
      loadChildren: () => import('./greedy/greedy.module').then(m => m.GreedyModule)
  },
  {
      path: 'hashing',
      loadChildren: () => import('./hashing/hashing.module').then(m => m.HashingModule)
  },
  {
      path: 'randomized',
      loadChildren: () => import('./randomized/randomized.module').then(m => m.RandomizedModule)
  },
  {
      path: 'recursive',
      loadChildren: () => import('./recursive/recursive.module').then(m => m.RecursiveModule)
  },
  {
      path: 'searching',
      loadChildren: () => import('./searching/searching.module').then(m => m.SearchingModule)
  },
  {
      path: 'sorting',
      loadChildren: () => import('./sorting/sorting.module').then(m => m.SortingModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule {}