import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { FormsModule } from '@angular/forms';
import { InsertUpdateDataComponent } from './insert-update-data/insert-update-data.component';
import { EnterValueComponent } from './enter-value/enter-value.component';



@NgModule({
  declarations: [
    InputDialogComponent,
    InsertUpdateDataComponent,
    EnterValueComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputDialogComponent,
    InsertUpdateDataComponent,
    EnterValueComponent
  ]
})
export class SharedModule {}