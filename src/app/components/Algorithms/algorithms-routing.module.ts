import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlgorithmComponent } from 'src/app/layout/algorithm/algorithm.component';

const routes: Routes = [
  {
      path: '', component: AlgorithmComponent 
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlgorithmsRoutingModule {}