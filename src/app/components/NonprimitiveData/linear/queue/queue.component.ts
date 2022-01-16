import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {
  queueData:string[] = [];
  constructor(
    private location: Location,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  gotoBack(): void {
    this.location.back();
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
  this.queueData = [];
}
pop(): void {
  if(this.queueData.length>0){
   this.queueData.splice(0,1);
  }
}

pushElement(element: string): void {
  this.queueData.push(element);
}

classIndicator(index: number): string {
   if(index === 0){
     return `data-box data-box-head me-1`;
   }else if(index === this.queueData.length-1){
    return `data-box data-box-tail me-1`;
   }else{
     return `data-box me-1`;
   }
}

}
