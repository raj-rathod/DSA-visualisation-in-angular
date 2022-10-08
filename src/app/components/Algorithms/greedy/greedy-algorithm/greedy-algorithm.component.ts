import { Component, OnInit } from '@angular/core';
import { greedyMetaData } from 'src/app/core/algorithms/greedy-meta-data';

@Component({
  selector: 'app-greedy-algorithm',
  templateUrl: './greedy-algorithm.component.html',
  styleUrls: ['./greedy-algorithm.component.css']
})
export class GreedyAlgorithmComponent implements OnInit {
  greedyMetaData = greedyMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
