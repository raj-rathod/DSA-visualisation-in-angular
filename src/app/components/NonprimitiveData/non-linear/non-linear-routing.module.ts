import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { HashTableComponent } from './hash-table/hash-table.component';
import { TreeComponent } from './tree/tree.component';
import { TrieComponent } from './trie/trie.component';


const routes: Routes = [
   {
     path: '', redirectTo:'tree', pathMatch:'full'
   },
   {
     path: 'tree', component: TreeComponent,
   },
   {
     path: 'graph', component: GraphComponent,
   },
   {
     path: 'trie', component: TrieComponent,
   },
   {
     path: 'hash-table', component: HashTableComponent,
   }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonLinearDataRoutingModule {}