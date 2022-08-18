import { Component, OnInit } from '@angular/core';
import { divideAndConquerMetaData } from 'src/app/core/algorithms/divide-and-conquer-meta-data';
import { divideAndConquerLinks } from 'src/app/core/meta-data/router-meta-data';

@Component({
  selector: 'app-divide-and-conquer-algorithm',
  templateUrl: './divide-and-conquer-algorithm.component.html',
  styleUrls: ['./divide-and-conquer-algorithm.component.css']
})
export class DivideAndConquerAlgorithmComponent implements OnInit {
  divideAndConquerMetaData = divideAndConquerMetaData;
  divideAndConquerLinks = divideAndConquerLinks
  constructor() { }

  ngOnInit(): void {
  }

}
