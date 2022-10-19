import { Component, OnInit } from '@angular/core';
import { selectionSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['./selection-sort.component.css']
})
export class SelectionSortComponent implements OnInit {
  selectionSortMetaData = selectionSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
