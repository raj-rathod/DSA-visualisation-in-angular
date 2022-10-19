import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { BucketSortComponent } from './bucket-sort/bucket-sort.component';
import { CountingSortComponent } from './counting-sort/counting-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { RadixSortComponent } from './radix-sort/radix-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { ShellSortComponent } from './shell-sort/shell-sort.component';
import { SortingAlgorithmComponent } from './sorting-algorithm/sorting-algorithm.component';

const routes: Routes = [
  {
    path:'', component: SortingAlgorithmComponent
  },
  {
    path: 'bubble-sort', component: BubbleSortComponent
  },
  {
    path: 'selection-sort', component: SelectionSortComponent
  },
  {
    path: 'insertion-sort', component: InsertionSortComponent
  },
  {
    path: 'merge-sort', component: MergeSortComponent
  },
  {
    path: 'quick-sort', component: QuickSortComponent
  },
  {
    path: 'counting-sort', component: CountingSortComponent
  },
  {
    path: 'radix-sort', component: RadixSortComponent
  },
  {
    path: 'bucket-sort', component: BucketSortComponent
  },
  {
    path: 'shell-sort', component: ShellSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {}