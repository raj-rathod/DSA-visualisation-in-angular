import { Component, OnInit } from '@angular/core';
import {bTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-b-tree',
  templateUrl: './b-tree.component.html',
  styleUrls: ['./b-tree.component.css']
})
export class BTreeComponent implements OnInit {
  bTreeMetaData = bTreeMetaData;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

}
