import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayComponent } from './array/array.component';
import { LinkedListComponent } from './linked-list/linked-list.component';
import { QueueComponent } from './queue/queue.component';
import { StackComponent } from './stack/stack.component';


const routes: Routes = [
  {
    path: '', redirectTo:'array', pathMatch:'full',
  },
  {
    path: 'array', component: ArrayComponent
  },
  {
    path: 'stack', component: StackComponent
  },
  {
    path: 'queue', component: QueueComponent
  },
  {
    path: 'linked-list', component: LinkedListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinearDataRoutingModule {}