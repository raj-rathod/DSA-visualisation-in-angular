import { Component, OnInit } from '@angular/core';
import { interpolationSearchMetaData } from 'src/app/core/algorithms/searching-meta-data';

@Component({
  selector: 'app-interpolation-search',
  templateUrl: './interpolation-search.component.html',
  styleUrls: ['./interpolation-search.component.css']
})
export class InterpolationSearchComponent implements OnInit {
  interpolationSearchMetaData = interpolationSearchMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
