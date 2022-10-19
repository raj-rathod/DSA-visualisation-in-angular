import { Component, OnInit } from '@angular/core';
import { mergeSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.css']
})
export class MergeSortComponent implements OnInit {
  mergeSortMetaData = mergeSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
