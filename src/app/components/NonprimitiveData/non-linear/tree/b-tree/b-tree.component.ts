import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { avlTreeMetaData } from 'src/app/core/data-structures/non-linear/tree/tree-meta-data';

@Component({
  selector: 'app-b-tree',
  templateUrl: './b-tree.component.html',
  styleUrls: ['./b-tree.component.css']
})
export class BTreeComponent implements OnInit {
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
