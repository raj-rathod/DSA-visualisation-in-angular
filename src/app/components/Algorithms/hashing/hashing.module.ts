import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HashingRoutingModule } from './hashing-routing.module';
import { HashingAlgorithmComponent } from './hashing-algorithm/hashing-algorithm.component';


@NgModule({
  declarations: [
  
    HashingAlgorithmComponent
  ],
  imports: [CommonModule, HashingRoutingModule]
})
export class HashingModule {}