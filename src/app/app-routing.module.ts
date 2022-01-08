import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmComponent } from './layout/algorithm/algorithm.component';
import { DataStructureComponent } from './layout/data-structure/data-structure.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch:'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'data-structure', component: DataStructureComponent
  },
  {
    path: 'algorithm', component: AlgorithmComponent
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
