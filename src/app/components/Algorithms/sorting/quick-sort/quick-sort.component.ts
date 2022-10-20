import { Component, OnInit } from '@angular/core';
import { quickSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.css']
})
export class QuickSortComponent implements OnInit {
  quickSortMetaData = quickSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
