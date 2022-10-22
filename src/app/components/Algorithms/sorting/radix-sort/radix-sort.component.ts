import { Component, OnInit } from '@angular/core';
import { radixSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-radix-sort',
  templateUrl: './radix-sort.component.html',
  styleUrls: ['./radix-sort.component.css']
})
export class RadixSortComponent implements OnInit {
  radixSortMetaData = radixSortMetaData;
  constructor() { }

  ngOnInit(): void { 
  }
}
