import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { stackPushElement } from 'src/app/helper/single-input-meta-data';
import { stackMetaData } from 'src/app/core/data-structures/linear/stack/stack-meta-data';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
  stackMetaData = stackMetaData;
  stackData: string[]= [];
  height = 250;
  constructor(
    private elRef: ElementRef,
    private matDialog: MatDialog
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

  pushElement(): void {
    this.operations(0)
    const matDialogRef = this.matDialog.open(
      SingleValueInputDialogComponent,
      {
        disableClose: true,
        position:{
            top:'120px'
        },
        data: stackPushElement
      }
    );
    matDialogRef.afterClosed().subscribe(result => {
      if(result || result === 0){
        this.stackData.unshift(result);
        if(this.stackData.length % 6 === 0){
          this.height += 250;
        }
      }
    });
    
  }

  heightOfStacksection(): string{
    return `${this.height}px`;
  }

}
