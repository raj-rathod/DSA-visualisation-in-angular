import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './arrays/array/array.component';
import { OneDimensionComponent } from './arrays/one-dimension/one-dimension.component';
import { TwoDimensionComponent } from './arrays/two-dimension/two-dimension.component';
import { CircularLinkedListComponent } from './linked-list/circular-linked-list/circular-linked-list.component';
import { DoubleLinkedListComponent } from './linked-list/double-linked-list/double-linked-list.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { SingleLinkedListComponent } from './linked-list/single-linked-list/single-linked-list.component';
import { QueueComponent } from './queue/queue.component';
import { StackComponent } from './stack/stack.component';


const routes: Routes = [
  {
    path: '', redirectTo:'array', pathMatch:'full',
  },
  {
    path: 'array', component: ArrayComponent,
  },
  {
    path: 'stack', component: StackComponent
  },
  {
    path: 'queue', component: QueueComponent
  },
  {
    path: 'linked-list', component: LinkedListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinearDataRoutingModule {}