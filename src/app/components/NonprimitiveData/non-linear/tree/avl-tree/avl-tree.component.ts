import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { avlTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-avl-tree',
  templateUrl: './avl-tree.component.html',
  styleUrls: ['./avl-tree.component.css']
})
export class AvlTreeComponent implements OnInit {
  avlTreeMetaData = avlTreeMetaData;
  
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
    this.location.back();
  }

}
