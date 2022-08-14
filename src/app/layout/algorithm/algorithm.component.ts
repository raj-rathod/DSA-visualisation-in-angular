import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { algorithmMetaData } from 'src/app/core/algorithms/algorithms-meta-data';
import { algorithms } from 'src/app/core/meta-data/router-meta-data';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.css']
})
export class AlgorithmComponent implements OnInit {
  algorithmMetaData = algorithmMetaData;
  algorithms = algorithms;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
    this.location.back();
  }

}
