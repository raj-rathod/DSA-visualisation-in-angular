import { Component, OnInit } from '@angular/core';
import { binarySearchTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-binary-search-tree',
  templateUrl: './binary-search-tree.component.html',
  styleUrls: ['./binary-search-tree.component.css']
})
export class BinarySearchTreeComponent implements OnInit {

  binarySearchTreeMetaData = binarySearchTreeMetaData;
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
