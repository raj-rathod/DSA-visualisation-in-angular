import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchingRoutingModule } from './searching-routing.module';
import { SearchingAlgorithmComponent } from './searching-algorithm/searching-algorithm.component';


@NgModule({
  declarations: [
  
    SearchingAlgorithmComponent
  ],
  imports: [CommonModule, SearchingRoutingModule]
})
export class SearchingModule {}