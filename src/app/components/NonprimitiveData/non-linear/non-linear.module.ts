import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonLinearDataRoutingModule } from './non-linear-routing.module';
import { TreeComponent } from './tree/tree.component';
import { GraphComponent } from './graph/graph.component';
import { TrieComponent } from './trie/trie.component';
import { HashTableComponent } from './hash-table/hash-table.component';
import { BinaryTreeComponent } from './tree/binary-tree/binary-tree.component';
import { BinarySearchTreeComponent } from './tree/binary-search-tree/binary-search-tree.component';
import { AvlTreeComponent } from './tree/avl-tree/avl-tree.component';
import { BTreeComponent } from './tree/b-tree/b-tree.component';
import { HeapTreeComponent } from './tree/heap-tree/heap-tree.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/components/shared.module';


@NgModule({
  declarations: [
    TreeComponent,
    GraphComponent,
    TrieComponent,
    HashTableComponent,
    BinaryTreeComponent,
    BinarySearchTreeComponent,
    AvlTreeComponent,
    BTreeComponent,
    HeapTreeComponent
  ],
  imports: [
    CommonModule, 
    NonLinearDataRoutingModule,
    MatDialogModule,
    SharedModule
  ]
})
export class NonLinearDataModule {}