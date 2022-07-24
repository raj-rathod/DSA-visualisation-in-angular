import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { SingleValueInputDialogComponent } from './single-value-input-dialog/single-value-input-dialog.component';
import { DoubleValueInputDialogComponent } from './double-value-input-dialog/double-value-input-dialog.component';
import { MatrixInputDialogComponent } from './matrix-input-dialog/matrix-input-dialog.component';

@NgModule({
  declarations: [
     SingleValueInputDialogComponent,
     DoubleValueInputDialogComponent,
     MatrixInputDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  
})
export class SharedModule {}