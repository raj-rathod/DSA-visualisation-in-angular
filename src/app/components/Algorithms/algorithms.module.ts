import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlgorithmComponent } from 'src/app/layout/algorithm/algorithm.component';
import { AlgorithmsRoutingModule } from './algorithms-routing.module';

@NgModule({
  declarations: [
    AlgorithmComponent
  ],
  imports: [CommonModule, AlgorithmsRoutingModule]
})
export class AlgorithmsModule {}