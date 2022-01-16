import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular-linked-list',
  templateUrl: './circular-linked-list.component.html',
  styleUrls: ['./circular-linked-list.component.css']
})
export class CircularLinkedListComponent implements OnInit {

  constructor(
    private elref: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  operationSelection(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.circularOp');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 circularOp';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 circularOp';
      }
    }
  }

}
