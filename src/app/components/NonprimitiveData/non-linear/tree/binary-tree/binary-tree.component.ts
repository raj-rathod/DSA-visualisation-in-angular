import { Component, OnInit } from '@angular/core';
import { binaryTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';
import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.css'],
})
export class BinaryTreeComponent implements OnInit {
  binaryTreeMetaData = binaryTreeMetaData;
  helper = Helper;
  rootNode = {
    data: 2,
    leftChild: {
      data: 4,
      leftChild: {
        data: 8,
        leftChild: {
          data: 10,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 12,
          leftChild: null,
          rightChild: null,
        },
      },
      rightChild: {
        data: 14,
        leftChild: {
          data: 16,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 18,
          leftChild: null,
          rightChild: null,
        },
      },
    },
    rightChild: {
      data: 6,
      leftChild: {
        data: 4,
      leftChild: {
        data: 8,
        leftChild: {
          data: 10,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 12,
          leftChild: null,
          rightChild: null,
        },
      },
      rightChild: {
        data: 14,
        leftChild: {
          data: 16,
          leftChild: null,
          rightChild: null,
        },
        rightChild: {
          data: 18,
          leftChild: null,
          rightChild: null,
        },
      },
      },
      rightChild: null,
    },
  };
  constructor() {}

  ngOnInit(): void {
    
  }
}
