import { Component, OnInit } from '@angular/core';
import { binarySearchMetaData } from 'src/app/core/algorithms/searching-meta-data';

@Component({
  selector: 'app-binary-search',
  templateUrl: './binary-search.component.html',
  styleUrls: ['./binary-search.component.css']
})
export class BinarySearchComponent implements OnInit {
  binarySearchMetaData = binarySearchMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
