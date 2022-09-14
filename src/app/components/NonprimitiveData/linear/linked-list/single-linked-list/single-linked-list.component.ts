import { Component,  OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
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
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  linkedlist: Node[] = [];
  head: Node;
  singleLinkedList: Node;
  constructor( private matDialog: MatDialog) {
    this.singleLinkedList = new Node();
    this.head = this.singleLinkedList;
  }

  ngOnInit(): void {}

  operationSelection(index: number): void {
    this.operationStep = index;
  }

  createLinkedList(): void {
    this.operationSelection(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: likedListInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.generateLinkedlist(result);
      }
    });
  }

  generateLinkedlist(arr: string[]): void {
    this.singleLinkedList = new Node();
    for (let i = 0; i < arr.length; i++) {
      if (this.singleLinkedList.data === null) {
        this.singleLinkedList.data = arr[i];
        this.head = this.singleLinkedList;
      } else {
        let newNode = new Node(arr[i]);
        this.head.next = newNode;
        this.head = newNode;
      }
    }
    this.updateAction();
  }

  updateAction(): void {
    this.head = this.singleLinkedList;
    this.linkedlist = [];
    while (this.head) {
      this.linkedlist.push(this.head);
      this.head = this.head.next;
    }
  }

  insertAtHead(): void {
    this.insertOperationStep = this.insertOperations.InsertAtFirst;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        let newNode = new Node(result);
        newNode.next = this.singleLinkedList;
        this.singleLinkedList = newNode;
        this.updateAction();
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
        let newNode = new Node(result);
        this.head = this.singleLinkedList;
        while (this.head.next) {
          this.head = this.head.next;
        }
        this.head.next = newNode;
        this.updateAction();
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
         if (this.linkedlist.length + 1 < result.firstInput || result.firstInput < 1) {
          alert('Enter valid Position');
        } else {
          if (result.firstInput === 1) {
            let newNode = new Node(result.secondInput);
            newNode.next = this.singleLinkedList;
            this.singleLinkedList = newNode;
            this.updateAction();
          } else if (result.firstInput === this.linkedlist.length + 1) {
            let newNode = new Node(result.secondInput);
            this.head = this.singleLinkedList;
            while (this.head.next) {
              this.head = this.head.next;
            }
            this.head.next = newNode;
            this.updateAction();
          } else {
            let count = 1;
            this.head = this.singleLinkedList;
            let previous = this.head;
            while (this.head) {
              if (count === result.firstInput) {
                let newNode = new Node(result.secondInput);
                previous.next = newNode;
                newNode.next = this.head;
                this.updateAction();
                break;
              }
              previous = this.head;
              this.head = this.head.next;
              count++;
            }
          }
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
        this.singleLinkedList.data = result;
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
        this.head = this.singleLinkedList;
        while (this.head.next) {
          this.head = this.head.next;
        }
        this.head.data = result;
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
        if (result.firstInput < 1 || result.firstInput > this.linkedlist.length) {
          alert('Invalid position  ' + result.firstInput);
        } else {
          if (result.firstInput === 1) {
            this.singleLinkedList.data = result.second;
          } else if (result.firstInput === this.linkedlist.length) {
            this.head = this.singleLinkedList;
            while (this.head.next) {
              this.head = this.head.next;
            }
            this.head.data = result.secondInput;
          } else {
            let count = 1;
            this.head = this.singleLinkedList;
            while (this.head.next) {
              if (count === result.firstInput) {
                this.head.data = result.secondInput;
                break;
              }
              this.head = this.head.next;
              count++;
            }
          }
        }
      }
    });
  }

  deleteOperation(index: number): void {
    switch (index) {
      case 0: {
        this.deleteAtFirst();
        this.deleteOperationStep = this.deleteOperations.DeleteAtFirst;
        break;
      }
      case 1: {
        this.deleteAtEnd();
        this.deleteOperationStep = this.deleteOperations.DeleteAtEnd;
        break;
      }
    }
  }

  deleteAtFirst(): void {
    if (this.linkedlist.length === 1) {
      this.singleLinkedList = this.singleLinkedList.next;
      this.updateAction();
      this.linkedlist = [];
    } else if (this.linkedlist.length > 1) {
      this.singleLinkedList = this.singleLinkedList.next;
      this.updateAction();
    } else {
      this.linkedlist = [];
    }
  }
  deleteAtEnd(): void {
    if (this.linkedlist.length > 0) {
      this.head = this.singleLinkedList;
      if (this.head.next === null) {
        this.singleLinkedList = this.singleLinkedList.next;
        this.linkedlist = [];
      } else {
        while (this.head) {
          if (this.head.next.next === null) {
            this.head.next = null;
            break;
          }
          this.head = this.head.next;
        }
      }
      this.updateAction();
    } else {
      this.linkedlist = [];
    }
  }

  deleteAtPosition(): void {
    this.deleteOperationStep = this.deleteOperations.DeleteAtPosition;
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
     
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result > 0 && result < this.linkedlist.length + 1) {
        if (result === 1) {
          this.deleteAtFirst();
        } else if (result === this.linkedlist.length) {
          this.deleteAtEnd();
        } else {
          let count = 1;
          this.head = this.singleLinkedList;
          let prev = this.head;
          while (this.head) {
            if (count === result) {
              prev.next = this.head.next;
              this.updateAction();
              break;
            }
            prev = this.head;
            this.head = this.head.next;
            count++;
          }
        }
      } else {
        alert('Invalid position: ' + result);
      }

    });
    
  }
}
