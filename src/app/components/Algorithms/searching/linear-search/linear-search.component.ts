import { Component, OnInit } from '@angular/core';
import { linearSearchMetaData } from 'src/app/core/algorithms/searching-meta-data';

@Component({
  selector: 'app-linear-search',
  templateUrl: './linear-search.component.html',
  styleUrls: ['./linear-search.component.css']
})
export class LinearSearchComponent implements OnInit {
  linearSearchMetaData = linearSearchMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
