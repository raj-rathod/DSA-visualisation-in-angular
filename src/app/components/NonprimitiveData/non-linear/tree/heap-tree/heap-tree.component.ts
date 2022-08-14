import { Component, OnInit } from '@angular/core';
import { heapMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-heap-tree',
  templateUrl: './heap-tree.component.html',
  styleUrls: ['./heap-tree.component.css']
})
export class HeapTreeComponent implements OnInit {
  heapMetaData = heapMetaData;
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
