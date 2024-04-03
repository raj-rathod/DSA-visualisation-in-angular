import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pageMetaData } from './core/meta-data/meta-data';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { DsaMainComponent } from './layout/dsa-main/dsa-main.component';
import { InterviewQuestionComponent } from './layout/interview-question/interview-question.component';

const routes: Routes = [
  {
    path:'',
    component: DsaMainComponent,
    children:[
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
        data: pageMetaData.primitiveDataType,
        loadChildren: () =>
              import('./components/primitiveData/primitivedata.module').then(
                (m) => m.PrimitiveDataModule),
      },
      {
        path:'non-primitive',
        data: pageMetaData.nonPrimitiveDataType,
        loadChildren: () =>
              import('./components/NonprimitiveData/non-primitiveData.module').then(
                (m) => m.NonPrimitiveDataModule),
      },
    ]
  },
  {
    path:'interview-questions',
    component: InterviewQuestionComponent,
    children:[
      {
        path:'angular',
        loadChildren: () => import('./components/Interview/angular/angular.module').then(
          (m) => m.AngularModule
        )
      },
      {
        path:'javascript',
        loadChildren: () => import('./components/Interview/javascript/javascript.module').then(
          (m) => m.JavascriptModule
        )
      }
    ]
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
