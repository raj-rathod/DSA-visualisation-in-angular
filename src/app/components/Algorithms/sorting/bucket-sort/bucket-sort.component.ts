import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bucketSortMetaData } from 'src/app/core/algorithms/sorting-meta-data';

@Component({
  selector: 'app-bucket-sort',
  templateUrl: './bucket-sort.component.html',
  styleUrls: ['./bucket-sort.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class BucketSortComponent implements OnInit {
  bucketSortMetaData = bucketSortMetaData;
  menuState = 'out';
  constructor(
  ) { }

  ngOnInit(): void {
  }

  sideDrawer(): void{
    if(this.menuState === 'out'){
      this.menuState = 'in';
    }else{
      this.menuState = 'out';
    }
   
  }

}
