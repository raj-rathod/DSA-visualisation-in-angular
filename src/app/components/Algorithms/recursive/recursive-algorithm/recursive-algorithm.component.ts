import { Component, OnInit } from '@angular/core';
import { recursiveMetaData } from 'src/app/core/algorithms/recursive-meta-data';

@Component({
  selector: 'app-recursive-algorithm',
  templateUrl: './recursive-algorithm.component.html',
  styleUrls: ['./recursive-algorithm.component.css']
})
export class RecursiveAlgorithmComponent implements OnInit {
  recursiveMetaData = recursiveMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
