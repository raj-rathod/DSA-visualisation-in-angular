import { Component,  OnInit } from '@angular/core';
import { arrayData } from 'src/app/core/data-structures/linear/array/array-meta-data';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  state = 0;
  arrayMetaData = arrayData;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  tabChange(index: number): void {
    this.state = index;
  }

}
