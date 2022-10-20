import { Component, OnInit } from '@angular/core';
import { countingSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-counting-sort',
  templateUrl: './counting-sort.component.html',
  styleUrls: ['./counting-sort.component.css']
})
export class CountingSortComponent implements OnInit {
  countingSortMetaData = countingSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
