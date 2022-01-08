import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonLinearDataRoutingModule } from './non-linear-routing.module';
import { TreeComponent } from './tree/tree.component';
import { GraphComponent } from './graph/graph.component';
import { TrieComponent } from './trie/trie.component';
import { HashTableComponent } from './hash-table/hash-table.component';


@NgModule({
  declarations: [
    TreeComponent,
    GraphComponent,
    TrieComponent,
    HashTableComponent
  ],
  imports: [CommonModule, NonLinearDataRoutingModule]
})
export class NonLinearDataModule {}