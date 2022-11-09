import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageMetaData } from './core/meta-data/meta-data';
import { AlgorithmComponent } from './layout/algorithm/algorithm.component';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    data: pageMetaData.home
  },
  {
    path: 'data-structure', 
    component: DataStructureComponent,
    data: pageMetaData.dataStructure
  },
  {
    path: 'algorithm', 
    data: pageMetaData.algorithms,
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
    path: '**', 
    component: PageNotFoundComponent,
    data: pageMetaData.pageNotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
