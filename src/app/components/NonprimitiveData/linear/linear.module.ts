import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearDataRoutingModule } from './linear-routing.module';
import { ArrayComponent } from './array/array.component';
import { StackComponent } from './stack/stack.component';
import { QueueComponent } from './queue/queue.component';
import { LinkedListComponent } from './linked-list/linked-list.component';


@NgModule({
  declarations: [
    ArrayComponent,
    StackComponent,
    QueueComponent,
    LinkedListComponent
  ],
  imports: [CommonModule, LinearDataRoutingModule]
})
export class LinearDataModule {}