import { Component, OnInit } from '@angular/core';
import { sortingMetaData } from 'src/app/core/algorithms/sorting-meta-data';
import { sorting } from 'src/app/core/meta-data/router-meta-data';

@Component({
  selector: 'app-sorting-algorithm',
  templateUrl: './sorting-algorithm.component.html',
  styleUrls: ['./sorting-algorithm.component.css']
})
export class SortingAlgorithmComponent implements OnInit {
  sortingMetaData  = sortingMetaData;
  sortingType = sorting
  constructor() { }

  ngOnInit(): void {
  }

}
