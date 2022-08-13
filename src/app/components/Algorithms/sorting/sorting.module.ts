import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortingRoutingModule } from './sorting-routing.module';
import { SortingAlgorithmComponent } from './sorting-algorithm/sorting-algorithm.component';


@NgModule({
  declarations: [
  
    SortingAlgorithmComponent
  ],
  imports: [CommonModule, SortingRoutingModule]
})
export class SortingModule {}