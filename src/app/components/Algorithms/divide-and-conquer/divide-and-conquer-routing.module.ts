import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClosestPairOfPointsComponent } from './closest-pair-of-points/closest-pair-of-points.component';
import { DivideAndConquerAlgorithmComponent } from './divide-and-conquer-algorithm/divide-and-conquer-algorithm.component';
import { KaratsubaComponent } from './karatsuba/karatsuba.component';
import { StrassenComponent } from './strassen/strassen.component';

const routes: Routes = [
  {
    path: '', component: DivideAndConquerAlgorithmComponent
  },
  {
    path: 'closest-pair-of-points', component: ClosestPairOfPointsComponent,

  },
  {
    path: 'strassen', component: StrassenComponent
  },
  {
    path: 'karatsuba', component: KaratsubaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivideAndConqureRoutingModule {}