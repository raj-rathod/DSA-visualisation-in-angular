import { Component, OnInit } from '@angular/core';
import { bruteForceMetaData } from 'src/app/core/algorithms/brute-force-meta-data';

@Component({
  selector: 'app-brute-force-algorithm',
  templateUrl: './brute-force-algorithm.component.html',
  styleUrls: ['./brute-force-algorithm.component.css']
})
export class BruteForceAlgorithmComponent implements OnInit {
  bruteForceMetaData = bruteForceMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
