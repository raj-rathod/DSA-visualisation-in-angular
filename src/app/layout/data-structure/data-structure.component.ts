import { Component, OnInit } from '@angular/core';
import { dataStructureMetaData } from 'src/app/core/data-structures/data-structure-meta-data';
@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.css']
})
export class DataStructureComponent implements OnInit {
  dataStructureMetaData = dataStructureMetaData;
  primitiveTypeShow = false;
  nonprimitiveTypeShow = false;
  linearData = false;
  nonLinearData = false;
  constructor(
  ) { }

  ngOnInit(): void {
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
