import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooleanComponent } from './boolean/boolean.component';
import { CharacterComponent } from './character/character.component';
import { FloatComponent } from './float/float.component';
import { IntegerComponent } from './integer/integer.component';

const routes: Routes = [
  {
      path: '', redirectTo:'integer', pathMatch:'full',
  },
  {
      path: 'integer', component: IntegerComponent
  },
  {
      path: 'float', component: FloatComponent
  },
  {
      path: 'character', component: CharacterComponent
  },
  {
      path: 'boolean', component: BooleanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimitiveDataRoutingModule {}