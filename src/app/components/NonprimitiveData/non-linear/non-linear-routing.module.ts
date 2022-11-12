import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pageMetaData } from 'src/app/core/meta-data/meta-data';
import { GraphComponent } from './graph/graph.component';
import { HashTableComponent } from './hash-table/hash-table.component';
import { AvlTreeComponent } from './tree/avl-tree/avl-tree.component';
import { BTreeComponent } from './tree/b-tree/b-tree.component';
import { BinarySearchTreeComponent } from './tree/binary-search-tree/binary-search-tree.component';
import { BinaryTreeComponent } from './tree/binary-tree/binary-tree.component';
import { HeapTreeComponent } from './tree/heap-tree/heap-tree.component';
import { TreeComponent } from './tree/tree.component';
import { TrieComponent } from './trie/trie.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tree',
    pathMatch: 'full',
  },
  {
    path: 'tree',
    component: TreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'binary-tree',
    component: BinaryTreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'binary-search-tree',
    component: BinarySearchTreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'avl-tree',
    component: AvlTreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'b-tree',
    component: BTreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'heap-tree',
    component: HeapTreeComponent,
    data: pageMetaData.tree,
  },
  {
    path: 'graph',
    component: GraphComponent,
    data: pageMetaData.graph,
  },
  {
    path: 'trie',
    component: TrieComponent,
    data: pageMetaData.trie,
  },
  {
    path: 'hash-table',
    component: HashTableComponent,
    data: pageMetaData.hashTable,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonLinearDataRoutingModule {}
