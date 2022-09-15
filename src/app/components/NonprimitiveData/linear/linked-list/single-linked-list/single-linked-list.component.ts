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
import { Node } from '../node';
@Component({
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.css'],
})
export class SingleLinkedListComponent implements OnInit {
  helper = Helper;
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  singleLinkedList: SingleLinkedList;
  constructor( private matDialog: MatDialog) {
   this.singleLinkedList = new SingleLinkedList();
  }

  ngOnInit(): void {
   
  }

  operationSelection(index: number): void {
    this.operationStep = index;
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
