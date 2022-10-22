import { Component, OnInit } from '@angular/core';
import { bucketSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-bucket-sort',
  templateUrl: './bucket-sort.component.html',
  styleUrls: ['./bucket-sort.component.css']
})
export class BucketSortComponent implements OnInit {
  bucketSortMetaData = bucketSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
