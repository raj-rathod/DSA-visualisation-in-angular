import { Component, OnInit } from '@angular/core';
import { backtrackingMetaData } from 'src/app/core/algorithms/backtracking-meta-data';

@Component({
  selector: 'app-backtracking-algorithm',
  templateUrl: './backtracking-algorithm.component.html',
  styleUrls: ['./backtracking-algorithm.component.css']
})
export class BacktrackingAlgorithmComponent implements OnInit {
  backtrackingMetaData = backtrackingMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
