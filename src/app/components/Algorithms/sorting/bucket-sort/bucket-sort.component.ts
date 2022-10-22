import { Component, OnInit } from '@angular/core';
import { bucketSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';
import { HighlightService } from 'src/app/shared/services/highlight-syntax.service';

@Component({
  selector: 'app-bucket-sort',
  templateUrl: './bucket-sort.component.html',
  styleUrls: ['./bucket-sort.component.css']
})
export class BucketSortComponent implements OnInit {
  bucketSortMetaData = bucketSortMetaData;
  constructor(
    private highlightSyntax: HighlightService
  ) { }

  ngOnInit(): void {
    this.highlightSyntax.highlightAll();
  }

}
