import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {
  

  primitiveTypeShow = false;
  nonprimitiveTypeShow = false;
  linearData = false;
  nonLinearData = false;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
   this.location.back();
  }

  primitiveDataTypeShow(): void {
    this.primitiveTypeShow = true;
    this.nonprimitiveTypeShow = false;
  }

  nonprimitiveDataTypeShow(): void {
    this.primitiveTypeShow = false;
    this.nonprimitiveTypeShow = true;
  }

  linearDataShow(): void {
    this.nonLinearData = false;
    this.linearData = true;
  }

  nonlinearDataShow(): void {
    this.nonLinearData = true;
    this.linearData = false;
  }

}
