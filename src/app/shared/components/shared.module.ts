import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';
import { SingleValueInputDialogComponent } from './single-value-input-dialog/single-value-input-dialog.component';
import { DoubleValueInputDialogComponent } from './double-value-input-dialog/double-value-input-dialog.component';
import { MatrixInputDialogComponent } from './matrix-input-dialog/matrix-input-dialog.component';
import { CodeSyntaxComponent } from './code-syntax/code-syntax.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BreadcrumbsComponent } from 'src/app/layout/breadcrumbs/breadcrumbs.component';
import { PreviousNextRouteComponent } from 'src/app/layout/previous-next-route/previous-next-route.component';

@NgModule({
  declarations: [
     SingleValueInputDialogComponent,
     DoubleValueInputDialogComponent,
     MatrixInputDialogComponent,
     CodeSyntaxComponent,
     SearchResultComponent,
     BreadcrumbsComponent,
     PreviousNextRouteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    CodeSyntaxComponent,
    BreadcrumbsComponent,
    PreviousNextRouteComponent
  ]
  
})
export class SharedModule {}