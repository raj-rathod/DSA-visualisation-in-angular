import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
import { Helper } from 'src/app/helper/helper';
import { DoubleLinkedList } from '@raj-rathod/dsa-methods';
import {
  likedListInput,
  singleInput,
} from 'src/app/helper/single-input-meta-data';
import { DoubleValueInputDialogComponent } from 'src/app/shared/components/double-value-input-dialog/double-value-input-dialog.component';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { DeletionOperations, InsertionOperations, Operations, UpdationOperations } from 'src/app/shared/enums/basic.enum';
import { Node } from '../node';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.css'],
})
export class DoubleLinkedListComponent implements OnInit {
  helper = Helper;
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  doubleLinkedList: DoubleLinkedList;
  constructor(private matDialog: MatDialog) {
    this.doubleLinkedList = new DoubleLinkedList();
  }

  ngOnInit(): void {}

  operationSelection(index: number): void {
    this.operationStep = index;
    this.insertOperationStep = -1;
    this.deleteOperationStep = -1;
    this.updateOperationStep = -1;
  }

  operationInsertion(index: number): void {
    this.insertOperationStep = index;
  }

  operationUpdation(index: number): void {
    this.updateOperationStep = index;
  }

  operationDeletion(index: number): void {
   this.deleteOperationStep = index;
  }

  createLinkedList(): void {
    this.operationSelection(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: likedListInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.doubleLinkedList.createDoubleLinkedList(result);
      }
    });
  }





  insertAtHead(): void {
    this.operationInsertion(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
       this.doubleLinkedList.insertNodeAtFirst(result);
      }
    });
  }

  insertAtTail(): void {
    this.operationInsertion(1);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.doubleLinkedList.insertNodeAtEnd(result);
      }
    });
  }

  insertAtPosition(): void {
    this.operationInsertion(2);
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,

      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.firstInput < 1) {
            alert('Enter valid Position');
        } else {
          this.doubleLinkedList.insertNodeAtPosition(result.secondInput, result.firstInput);
        }
      }
    });
  }

  updateAtHead(): void {
    this.operationUpdation(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.doubleLinkedList.updateNodeAtFirst(result);
      }
    });
  }
  updateAtTail(): void {
    this.operationUpdation(1);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
       this.doubleLinkedList.updateNodeAtEnd(result);
      }
    });
  }
  updateAtPosition(): void {
    this.operationUpdation(2);
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,

      data: insertAtIndex,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (
          result.firstInput < 1
          
        ) {
          alert('Invalid position  ' + result.firstInput);
        } else {
         this.doubleLinkedList.updateNodeAtPosition(result.secondInput, result.firstInput);
        }
      }
    });
  }

  deleteOperation(index: number): void {
    switch (index) {
      case 0: {
        this.doubleLinkedList.deleteAtFirst();
        this.operationDeletion(0);
        break;
      }
      case 1: {
       this.doubleLinkedList.deleteAtEnd();
        this.operationDeletion(1);
        break;
      }
    }
  }

  deleteAtPosition(): void {
    this.operationDeletion(2);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result > 0) {
       this.doubleLinkedList.deleteAtPosition(result);
      } else {
        alert('Invalid position: ' + result);
      }
    });
  }
}
