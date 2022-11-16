import { Component, OnInit } from '@angular/core';
import { shellSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-shell-sort',
  templateUrl: './shell-sort.component.html',
  styleUrls: ['./shell-sort.component.css']
})
export class ShellSortComponent implements OnInit {
  shellSortMetaData = shellSortMetaData;
  constructor() { }

  ngOnInit(): void {
  }

}
