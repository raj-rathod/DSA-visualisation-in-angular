import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './layout/algorithm/algorithm.component';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'data-structure', component: DataStructureComponent
  },
  {
    path: 'algorithm', 
    loadChildren: () =>
    import('./components/Algorithms/algorithms.module').then(
      (m) => m.AlgorithmsModule),
  },

  {
    path:'primitive',
    loadChildren: () =>
          import('./components/primitiveData/primitivedata.module').then(
            (m) => m.PrimitiveDataModule),
  },
  {
    path:'non-primitive',
    loadChildren: () =>
          import('./components/NonprimitiveData/non-primitiveData.module').then(
            (m) => m.NonPrimitiveDataModule),
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
