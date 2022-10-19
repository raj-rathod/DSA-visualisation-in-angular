import { Component, OnInit } from '@angular/core';
import { searchingMetaData } from 'src/app/core/algorithms/searching-meta-data';
import { searchingLinks } from 'src/app/core/meta-data/router-meta-data';

@Component({
  selector: 'app-searching-algorithm',
  templateUrl: './searching-algorithm.component.html',
  styleUrls: ['./searching-algorithm.component.css']
})
export class SearchingAlgorithmComponent implements OnInit {
  searchingMetaData = searchingMetaData;
  searchingLinks = searchingLinks;
  constructor() { }

  ngOnInit(): void {
  }

}
