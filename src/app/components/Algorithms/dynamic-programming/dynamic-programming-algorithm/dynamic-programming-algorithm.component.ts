import { Component, OnInit } from '@angular/core';
import { dpMetaData } from 'src/app/core/algorithms/dp-meta-data';

@Component({
  selector: 'app-dynamic-programming-algorithm',
  templateUrl: './dynamic-programming-algorithm.component.html',
  styleUrls: ['./dynamic-programming-algorithm.component.css']
})
export class DynamicProgrammingAlgorithmComponent implements OnInit {
  dpMetaData = dpMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
