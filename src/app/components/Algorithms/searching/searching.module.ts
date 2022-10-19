import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingRoutingModule } from './searching-routing.module';
import { SearchingAlgorithmComponent } from './searching-algorithm/searching-algorithm.component';
import { LinearSearchComponent } from './linear-search/linear-search.component';
import { BinarySearchComponent } from './binary-search/binary-search.component';
import { JumpSearchComponent } from './jump-search/jump-search.component';
import { InterpolationSearchComponent } from './interpolation-search/interpolation-search.component';
import { ExponentialSearchComponent } from './exponential-search/exponential-search.component';
import { FibonacciSearchComponent } from './fibonacci-search/fibonacci-search.component';


@NgModule({
  declarations: [
    SearchingAlgorithmComponent,
    LinearSearchComponent,
    BinarySearchComponent,
    JumpSearchComponent,
    InterpolationSearchComponent,
    ExponentialSearchComponent,
    FibonacciSearchComponent
  ],
  imports: [CommonModule, SearchingRoutingModule]
})
export class SearchingModule {}