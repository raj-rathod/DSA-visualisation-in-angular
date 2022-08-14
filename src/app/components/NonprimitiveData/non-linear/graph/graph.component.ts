import { Component, OnInit } from '@angular/core';
import { graphMetaData } from 'src/app/core/data-structures/non-linear/graph/graph-meta-data';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  graphMetaData = graphMetaData;

  constructor(
  ) { }

  ngOnInit(): void {
  }

 

}
