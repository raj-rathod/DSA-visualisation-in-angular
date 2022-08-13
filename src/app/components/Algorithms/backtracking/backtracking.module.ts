import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacktrackingRoutingModule } from './backtracking-routing.module';
import { BacktrackingAlgorithmComponent } from './backtracking-algorithm/backtracking-algorithm.component';


@NgModule({
  declarations: [
  
    BacktrackingAlgorithmComponent
  ],
  imports: [CommonModule, BacktrackingRoutingModule]
})
export class BacktrackingModule {}