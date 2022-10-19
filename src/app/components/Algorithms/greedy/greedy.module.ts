import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreedyRoutingModule } from './greedy-routing.module';
import { GreedyAlgorithmComponent } from './greedy-algorithm/greedy-algorithm.component';


@NgModule({
  declarations: [
  
    GreedyAlgorithmComponent
  ],
  imports: [CommonModule, GreedyRoutingModule]
})
export class GreedyModule {}