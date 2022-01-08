import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo:'linear', pathMatch:'full',
  },
  {
      path: 'linear',
      loadChildren: () => import('./linear/linear.module').then((m) => m.LinearDataModule)
  },
  {
    path: 'non-linear',
    loadChildren: () => import('./non-linear/non-linear.module').then((m) => m.NonLinearDataModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonPrimitiveDataRoutingModule {}