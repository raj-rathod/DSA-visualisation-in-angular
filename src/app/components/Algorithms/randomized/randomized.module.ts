import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomizedRoutingModule } from './randomized-routing.module';
import { RandomizedAlgorithmComponent } from './randomized-algorithm/randomized-algorithm.component';


@NgModule({
  declarations: [
  
    RandomizedAlgorithmComponent
  ],
  imports: [CommonModule, RandomizedRoutingModule]
})
export class RandomizedModule {}