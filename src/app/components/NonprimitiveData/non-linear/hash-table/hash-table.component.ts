import { Component, OnInit } from '@angular/core';
import { hashTableMetaData } from 'src/app/core/data-structures/non-linear/hash-table/hash-table-meta-data';

@Component({
  selector: 'app-hash-table',
  templateUrl: './hash-table.component.html',
  styleUrls: ['./hash-table.component.css']
})
export class HashTableComponent implements OnInit {
  hashTableMetaData = hashTableMetaData;
  constructor(

  ) { }

  ngOnInit(): void {
  }



}
