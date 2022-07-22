import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { InputDialogComponent } from './input-dialog/input-dialog.component';
import { InsertUpdateDataComponent } from './insert-update-data/insert-update-data.component';
import { EnterValueComponent } from './enter-value/enter-value.component';
import { MatrixInputComponent } from './matrix-input/matrix-input.component';



@NgModule({
  declarations: [
    InputDialogComponent,
    InsertUpdateDataComponent,
    EnterValueComponent,
    MatrixInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputDialogComponent,
    InsertUpdateDataComponent,
    EnterValueComponent,
    MatrixInputComponent
  ]
})
export class SharedModule {}