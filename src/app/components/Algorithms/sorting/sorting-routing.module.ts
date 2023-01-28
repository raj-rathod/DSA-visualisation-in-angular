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
import { pageMetaData } from 'src/app/core/meta-data/meta-data';

const routes: Routes = [
  {
    path:'', component: SortingAlgorithmComponent
  },
  {
    path: 'bubble-sort', component: BubbleSortComponent
  },
  {
    path: 'selection-sort', 
    data: pageMetaData.selectionSort,
    component: SelectionSortComponent
  },
  {
    path: 'insertion-sort', 
    data: pageMetaData.insertionSort,
    component: InsertionSortComponent
  },
  {
    path: 'merge-sort', 
    data: pageMetaData.mergeSort,
    component: MergeSortComponent
  },
  {
    path: 'quick-sort', 
    data: pageMetaData.quickSort,
    component: QuickSortComponent
  },
  {
    path: 'counting-sort', 
    data: pageMetaData.countingSort,
    component: CountingSortComponent
  },
  {
    path: 'radix-sort',
    data: pageMetaData.radixSort, 
    component: RadixSortComponent
  },
  {
    path: 'bucket-sort', 
    data: pageMetaData.bucketSort,
    component: BucketSortComponent
  },
  {
    path: 'shell-sort', 
    data: pageMetaData.shellSort,
    component: ShellSortComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortingRoutingModule {}