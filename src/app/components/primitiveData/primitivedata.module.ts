import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimitiveDataRoutingModule } from './primitivedata-routing.module';
import { IntegerComponent } from './integer/integer.component';
import { FloatComponent } from './float/float.component';
import { CharacterComponent } from './character/character.component';
import { BooleanComponent } from './boolean/boolean.component';


@NgModule({
  declarations: [
    IntegerComponent,
    FloatComponent,
    CharacterComponent,
    BooleanComponent
  ],
  imports: [CommonModule, PrimitiveDataRoutingModule]
})
export class PrimitiveDataModule {}