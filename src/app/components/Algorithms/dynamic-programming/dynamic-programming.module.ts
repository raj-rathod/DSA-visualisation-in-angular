import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicProgrammingRoutingModule } from './dynamic-programming-routing.module';
import { DynamicProgrammingAlgorithmComponent } from './dynamic-programming-algorithm/dynamic-programming-algorithm.component';


@NgModule({
  declarations: [
  
    DynamicProgrammingAlgorithmComponent
  ],
  imports: [CommonModule, DynamicProgrammingRoutingModule]
})
export class DynamicProgrammingModule {}