import { Component, OnInit } from '@angular/core';
import { jumpSearchMeatData } from 'src/app/core/algorithms/searching-meta-data';

@Component({
  selector: 'app-jump-search',
  templateUrl: './jump-search.component.html',
  styleUrls: ['./jump-search.component.css']
})
export class JumpSearchComponent implements OnInit {
  jumpSearchMeatData = jumpSearchMeatData;
  constructor() { }

  ngOnInit(): void {
  }

}
