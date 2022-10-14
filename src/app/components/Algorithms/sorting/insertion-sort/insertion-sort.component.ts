import { Component, OnInit } from '@angular/core';
import { insertionSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {
  insertionSortMetaData = insertionSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
