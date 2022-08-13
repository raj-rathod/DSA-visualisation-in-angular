import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursiveRoutingModule } from './recursive-routing.module';
import { RecursiveAlgorithmComponent } from './recursive-algorithm/recursive-algorithm.component';


@NgModule({
  declarations: [
  
    RecursiveAlgorithmComponent
  ],
  imports: [CommonModule, RecursiveRoutingModule]
})
export class RecursiveModule {}