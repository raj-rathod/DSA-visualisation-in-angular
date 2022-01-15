import { Component, ElementRef, OnInit } from '@angular/core';
import { Node } from '../node'
@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.css']
})
export class SingleLinkedListComponent implements OnInit {
   insertionShown: boolean = false;
   updationShown: boolean = false;
   deletionShown: boolean = false;
  constructor(
    private elref: ElementRef,
  ) { }

  ngOnInit(): void {
  }

  operationSelection(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleOp');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        this.oprationSelected(i);
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleOp';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleOp';
      }
    }
  }

  oprationSelected(index: number): void {
    switch (index) {
      case 1: {
        this.insertionShown = true;
        this.updationShown = false;
        this.deletionShown = false;
        break;
      }
      case 2: {
        this.insertionShown = false;
        this.updationShown = true;
        this.deletionShown = false;
        break;
      }
      case 3: {
        this.insertionShown = false;
        this.updationShown = false;
        this.deletionShown = true;
        break;
      }
    }
  }

  operationInsertion(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleIn');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleIn';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleIn';
      }
    }
  }

  createLinkedList(): void {
    this.insertionShown = false;
    this.updationShown = false;
    this.deletionShown = false;
  }

  operationUpdation(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleUp');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleUp';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleUp';
      }
    }
  }

  operationDeletion(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleDel');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      }
    }
  }

}
