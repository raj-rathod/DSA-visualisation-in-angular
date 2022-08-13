import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivideAndConqureRoutingModule } from './divide-and-conquer-routing.module';
import { DivideAndConquerAlgorithmComponent } from './divide-and-conquer-algorithm/divide-and-conquer-algorithm.component';


@NgModule({
  declarations: [
  
    DivideAndConquerAlgorithmComponent
  ],
  imports: [CommonModule, DivideAndConqureRoutingModule]
})
export class DivideAndConquerModule {}