import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphComponent } from './graph/graph.component';
import { HashTableComponent } from './hash-table/hash-table.component';
import { AvlTreeComponent } from './tree/avl-tree/avl-tree.component';
import { BTreeComponent } from './tree/b-tree/b-tree.component';
import { BinarySearchTreeComponent } from './tree/binary-search-tree/binary-search-tree.component';
import { BinaryTreeComponent } from './tree/binary-tree/binary-tree.component';
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
     path: 'binary-tree', component: BinaryTreeComponent,
    },
    {
      path: 'binary-search-tree', component: BinarySearchTreeComponent,
    },
    {
      path: 'avl-tree', component: AvlTreeComponent,
    },
    {
      path: 'b-tree', component: BTreeComponent
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