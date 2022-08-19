import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivideAndConqureRoutingModule } from './divide-and-conquer-routing.module';
import { DivideAndConquerAlgorithmComponent } from './divide-and-conquer-algorithm/divide-and-conquer-algorithm.component';
import { ClosestPairOfPointsComponent } from './closest-pair-of-points/closest-pair-of-points.component';
import { StrassenComponent } from './strassen/strassen.component';
import { KaratsubaComponent } from './karatsuba/karatsuba.component';


@NgModule({
  declarations: [
    DivideAndConquerAlgorithmComponent,
    ClosestPairOfPointsComponent,
    StrassenComponent,
    KaratsubaComponent
  ],
  imports: [CommonModule, DivideAndConqureRoutingModule]
})
export class DivideAndConquerModule {}