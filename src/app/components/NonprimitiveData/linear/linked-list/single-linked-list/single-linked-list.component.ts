import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
import { SingleLinkedList } from '@raj-rathod/dsa-methods';
import { Helper } from 'src/app/helper/helper';
import {
  likedListInput,
  singleInput,
} from 'src/app/helper/single-input-meta-data';
import { DoubleValueInputDialogComponent } from 'src/app/shared/components/double-value-input-dialog/double-value-input-dialog.component';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { DeletionOperations, InsertionOperations, Operations, UpdationOperations } from 'src/app/shared/enums/basic.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CodeHighLight } from 'src/app/shared/interfaces/code-highlight.interface';
import { SingleLinkedListCode } from 'src/app/core/data-structures/linear/linked-list/linked-list-meta-data';
@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.css'],
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
export class SingleLinkedListComponent implements OnInit {
  helper = Helper;
  menuState = 'out';
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  singleLinkedList: SingleLinkedList;
  codeHighlightData: CodeHighLight = SingleLinkedListCode;
  constructor( private matDialog: MatDialog) {
   this.singleLinkedList = new SingleLinkedList();
  }

  ngOnInit(): void {
  }

  sideDrawer(): void{
    if(this.menuState === 'out'){
      this.menuState = 'in';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '8px';
    }else{
      this.menuState = 'out';
      document.body.style.overflow = 'visible';
      document.body.style.marginRight = '0px';
    }
  }

  viewSourceCode(): void {
    this.operationSelection(this.operations.SourceCode);
    this.sideDrawer();

  }

  operationSelection(index: number): void {
    this.operationStep = index;
    this.insertOperationStep = -1;
    this.deleteOperationStep = -1;
    this.updateOperationStep = -1;
  }

  createLinkedList(): void {
    this.operationSelection(this.operations.Creation);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: likedListInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.singleLinkedList.createSingleLinkedList(result);
      }
    });
  }
  reverseLinkedList(): void {
    this.singleLinkedList.head = this.singleLinkedList.reverseASingleLinkedList();
    this.operationSelection(this.operations.Reverse);
  }


  insertAtHead(): void {
    this.insertOperationStep = this.insertOperations.InsertAtFirst;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.singleLinkedList.insertNodeAtFirst(result);
      }
    });
  }

  insertAtTail(): void {
    this.insertOperationStep = this.insertOperations.InsertAtEnd;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
     
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
       this.singleLinkedList.insertNodeAtEnd(result);
      }
    });
  }

  insertAtPosition(): void {
    this.insertOperationStep = this.insertOperations.InsertAtPosition;
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,
     
      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
         if (result.firstInput < 1) {
          alert('Enter valid Position');
        } else {
          this.singleLinkedList.insertNodeAtPosition(result.secondInput, result.secondInput);
        }
      }
    });
    
  }

  updateAtHead(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtFirst;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.singleLinkedList.updateNodeAtFirst(result);
      }
    });
    
  }

  updateAtTail(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtEnd;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
   
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
       this.singleLinkedList.updateNodeAtEnd(result);
      }
    });
    
  }

  updateAtPosition(): void {
    this.updateOperationStep = this.updateOperations.UpdateAtPosition;
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,
     
      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.firstInput < 1) {
          alert('Invalid position  ' + result.firstInput);
        } else {
          this.singleLinkedList.updateNodeAtPosition(result.firstInput, result.secondInput);
        }
      }
    });
  }

  deleteOperation(index: number): void {
    switch (index) {
      case 0: {
        this.singleLinkedList.deleteAtFirst();
        this.deleteOperationStep = this.deleteOperations.DeleteAtFirst;
        break;
      }
      case 1: {
        this.singleLinkedList.deleteAtEnd();
        this.deleteOperationStep = this.deleteOperations.DeleteAtEnd;
        break;
      }
    }
  }


  deleteAtPosition(): void {
    this.deleteOperationStep = this.deleteOperations.DeleteAtPosition;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
     
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result > 0 ) {
       this.singleLinkedList.deleteAtPosition(result);
      } else {
        alert('Invalid position: ' + result);
      }

    });
    
  }
}
