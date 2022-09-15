import { Component,OnInit } from '@angular/core';
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
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.css'],
})
export class DoubleLinkedListComponent implements OnInit {
  operationStep = -1;
  insertOperationStep = -1;
  deleteOperationStep = -1;
  updateOperationStep = -1;
  operations = Operations;
  insertOperations = InsertionOperations;
  deleteOperations = DeletionOperations;
  updateOperations = UpdationOperations;
  doublelinkedlist: Node[] = [];
  doubleLinkedList: Node;
  head: Node;
  constructor(private matDialog: MatDialog) {
    this.doubleLinkedList = new Node();
    this.head = this.doubleLinkedList;
  }

  ngOnInit(): void {}

  operationSelection(index: number): void {
    this.operationStep = index;
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
        this.generateLinkedlist(result);
      }
    });
  }

  generateLinkedlist(arr: string[]): void {
    this.doubleLinkedList = new Node();
    for (let i = 0; i < arr.length; i++) {
      if (this.doubleLinkedList.data === null) {
        this.doubleLinkedList.data = arr[i];
        this.head = this.doubleLinkedList;
      } else {
        let newNode = new Node(arr[i]);
        newNode.previous = this.head;
        this.head.next = newNode;
        this.head = newNode;
      }
    }
    this.updateAction();
  }

  updateAction(): void {
    this.doublelinkedlist = [];
    this.head = this.doubleLinkedList;
    while (this.head) {
      this.doublelinkedlist.push(this.head);
      this.head = this.head.next;
    }
  }

  insertAtHead(): void {
    this.operationInsertion(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        let newNode = new Node(result);
        newNode.next = this.doubleLinkedList;
        this.doubleLinkedList.previous = newNode;
        this.doubleLinkedList = newNode;
        this.updateAction();
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
        let newNode = new Node(result);
        this.head = this.doubleLinkedList;
        while (this.head.next) {
          this.head = this.head.next;
        }
        newNode.previous = this.head;
        this.head.next = newNode;
        this.updateAction();
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
        if (
          this.doublelinkedlist.length + 1 < result.firstInput ||
          result.firstInput < 1
        ) {
          alert('Enter valid Position');
        } else {
          if (result.firstInput === 1) {
            let newNode = new Node(result.secondInput);
            newNode.next = this.doubleLinkedList;
            this.doubleLinkedList.previous = newNode;
            this.doubleLinkedList = newNode;
            this.updateAction();
          } else if (result.firstInput === this.doublelinkedlist.length + 1) {
            let newNode = new Node(result.secondInput);
            this.head = this.doubleLinkedList;
            while (this.head.next) {
              this.head = this.head.next;
            }
            newNode.previous = this.head;
            this.head.next = newNode;
            this.updateAction();
          } else {
            let count = 1;
            this.head = this.doubleLinkedList;
            let previous = this.head;
            while (this.head) {
              if (count === result.firstInput) {
                let newNode = new Node(result.secondInput);
                newNode.previous = previous;
                previous.next = newNode;
                this.head.previous = newNode;
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
    this.operationUpdation(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,

      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.doubleLinkedList.data = result;
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
        this.head = this.doubleLinkedList;
        while (this.head.next) {
          this.head = this.head.next;
        }
        this.head.data = result;
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
          result.firstInput < 1 ||
          result.firstInput > this.doublelinkedlist.length
        ) {
          alert('Invalid position  ' + result.firstInput);
        } else {
          if (result.firstInput === 1) {
            this.doubleLinkedList.data = result.secondInput;
          } else if (result.firstInput === this.doublelinkedlist.length) {
            this.head = this.doubleLinkedList;
            while (this.head.next) {
              this.head = this.head.next;
            }
            this.head.data = result.secondInput;
          } else {
            let count = 1;
            this.head = this.doubleLinkedList;
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
        this.operationDeletion(0);
        break;
      }
      case 1: {
        this.deleteAtEnd();
        this.operationDeletion(1);
        break;
      }
    }
  }

  deleteAtFirst(): void {
    if (this.doublelinkedlist.length === 1) {
      this.doubleLinkedList = new Node();
      this.updateAction();
      this.doublelinkedlist = [];
    } else if (this.doublelinkedlist.length > 1) {
      this.doubleLinkedList = this.doubleLinkedList.next;
      this.doubleLinkedList.previous = null;
      this.updateAction();
    }
  }
  deleteAtEnd(): void {
    if (this.doublelinkedlist.length > 0) {
      this.head = this.doubleLinkedList;
      if (this.head.next === null) {
        this.doubleLinkedList = this.doubleLinkedList.next;
        this.doublelinkedlist = [];
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
      this.doublelinkedlist = [];
      
    }
  }

  deleteAtPosition(): void {
    this.operationDeletion(2);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result > 0 && result < this.doublelinkedlist.length + 1) {
        if (result === 1) {
          this.deleteAtFirst();
        } else if (result === this.doublelinkedlist.length) {
          this.deleteAtEnd();
        } else {
          let count = 1;
          this.head = this.doubleLinkedList;
          let prev = this.head;
          while (this.head) {
            if (count === result) {
              this.head.next.previous = prev;
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
