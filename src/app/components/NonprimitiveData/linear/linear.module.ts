import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { LinearDataRoutingModule } from './linear-routing.module';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { ArrayComponent } from './arrays/array/array.component';
import { OneDimensionComponent } from './arrays/one-dimension/one-dimension.component';
import { TwoDimensionComponent } from './arrays/two-dimension/two-dimension.component';
import { SingleLinkedListComponent } from './linked-list/single-linked-list/single-linked-list.component';
import { DoubleLinkedListComponent } from './linked-list/double-linked-list/double-linked-list.component';
import { CircularLinkedListComponent } from './linked-list/circular-linked-list/circular-linked-list.component';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    ArrayComponent,
    StackComponent,
    QueueComponent,
    LinkedListComponent,
    OneDimensionComponent,
    TwoDimensionComponent,
    SingleLinkedListComponent,
    DoubleLinkedListComponent,
    CircularLinkedListComponent
  ],
  imports: [
    CommonModule, 
    LinearDataRoutingModule,
    MatDialogModule ,
    SharedModule
  ]
})
export class LinearDataModule {}