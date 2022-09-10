import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrayData } from 'src/app/core/data-structures/linear/array/array-meta-data';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit, AfterViewInit {
  state = 0;
  arrayMetaData = arrayData;
  constructor(
    private router: Router,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
     this.tabChange(this.state);
  }
  tabChange(index: number): void {
    this.state = index;
  }

}
