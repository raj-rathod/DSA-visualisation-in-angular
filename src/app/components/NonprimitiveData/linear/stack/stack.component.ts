import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  stackData: string[]= [];
  height = 250;

  constructor(
    private location: Location,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  operations(index: number): void {
     const opRef = this.elRef.nativeElement.querySelectorAll('.stkOp');
     for(let i = 0; i < opRef.length; i++){
       if(i === index){
         this.operationSelect(i);
         opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 stkOp';
       }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 stkOp'
       }
     }
  }

  operationSelect(index: number): void {
    switch (index) {
      case 1: { this.pop(); break; }
      case 2: { this.clearAll(); break; }
    }
  }

  clearAll(): void {
    this.stackData = [];
    this.height = 250;
  }
  pop(): void {
    if(this.stackData.length % 6 === 0 && this.stackData.length >= 6 ){
      this.height -= 250;
    }
    if(this.stackData.length>0){
     this.stackData.splice(0,1);
    }
  }

  pushElement(element: string): void {
    this.stackData.unshift(element);
    if(this.stackData.length % 6 === 0){
      this.height += 250;
    }
  }

  gotoBack(): void {
    this.location.back();
  }

  heightOfStacksection(): string{
    return `${this.height}px`;
  }

}
