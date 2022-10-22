import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingRoutingModule } from './sorting-routing.module';
import { SortingAlgorithmComponent } from './sorting-algorithm/sorting-algorithm.component';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';
import { CountingSortComponent } from './counting-sort/counting-sort.component';
import { RadixSortComponent } from './radix-sort/radix-sort.component';
import { BucketSortComponent } from './bucket-sort/bucket-sort.component';
import { ShellSortComponent } from './shell-sort/shell-sort.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    SortingAlgorithmComponent,
    BubbleSortComponent,
    SelectionSortComponent,
    InsertionSortComponent,
    MergeSortComponent,
    QuickSortComponent,
    CountingSortComponent,
    RadixSortComponent,
    BucketSortComponent,
    ShellSortComponent
  ],
  imports: [CommonModule, SortingRoutingModule,SharedModule]
})
export class SortingModule {}