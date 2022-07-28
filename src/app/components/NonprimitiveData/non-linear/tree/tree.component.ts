import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { treeMetaData, treeTypesMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  
  treeMetaData = treeMetaData;
  treeTypesMetaData = treeTypesMetaData;
  
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
    this.location.back();
  }

}
