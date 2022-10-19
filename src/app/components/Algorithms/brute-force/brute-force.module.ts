import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BruteForceRoutingModule } from './brute-force-routing.module';
import { BruteForceAlgorithmComponent } from './brute-force-algorithm/brute-force-algorithm.component';


@NgModule({
  declarations: [
  
    BruteForceAlgorithmComponent
  ],
  imports: [CommonModule,BruteForceRoutingModule]
})
export class BruteForceModule {}