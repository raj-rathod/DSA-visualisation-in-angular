import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-dsa-main',
  templateUrl: './dsa-main.component.html',
  styleUrls: ['./dsa-main.component.css']
})
export class DsaMainComponent implements OnInit {
  routesData = Helper.allRoutesData();
  constructor() { }

  ngOnInit(): void {
  }

}
