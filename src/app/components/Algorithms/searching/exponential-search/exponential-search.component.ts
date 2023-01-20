import { Component, OnInit } from '@angular/core';
import { exponentialSearchMetaData } from 'src/app/core/algorithms/searching-meta-data';

@Component({
  selector: 'app-exponential-search',
  templateUrl: './exponential-search.component.html',
  styleUrls: ['./exponential-search.component.css']
})
export class ExponentialSearchComponent implements OnInit {
  exponentialSearchMetaData = exponentialSearchMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
