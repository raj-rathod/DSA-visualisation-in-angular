import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { insertAtIndex } from 'src/app/helper/double-input-field-meta-data';
import {
  likedListInput,
  singleInput,
} from 'src/app/helper/single-input-meta-data';
import { DoubleValueInputDialogComponent } from 'src/app/shared/components/double-value-input-dialog/double-value-input-dialog.component';
import { SingleValueInputDialogComponent } from 'src/app/shared/components/single-value-input-dialog/single-value-input-dialog.component';
import { Node } from '../node';

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.css'],
})
export class DoubleLinkedListComponent implements OnInit {
  insertionShown: boolean = false;
  updationShown: boolean = false;
  deletionShown: boolean = false;
  doublelinkedlist: Node[] = [];
  doubleLinkedList: Node;
  head: Node;
  constructor(private elref: ElementRef, private matDialog: MatDialog) {
    this.doubleLinkedList = new Node();
    this.head = this.doubleLinkedList;
  }

  ngOnInit(): void {}

  operationSelection(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.doubleOp');
    for (let i = 0; i < opRef.length; i++) {
      if (i === index) {
        this.oprationSelected(i);
        opRef[i].className =
          'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 doubleOp';
      } else {
        opRef[i].className =
          'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 doubleOp';
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
    for (let i = 0; i < opRef.length; i++) {
      if (i === index) {
        opRef[i].className =
          'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleIn';
      } else {
        opRef[i].className =
          'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleIn';
      }
    }
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
        this.insertionShown = false;
        this.updationShown = false;
        this.deletionShown = false;
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

  operationUpdation(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleUp');
    for (let i = 0; i < opRef.length; i++) {
      if (i === index) {
        opRef[i].className =
          'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleUp';
      } else {
        opRef[i].className =
          'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleUp';
      }
    }
  }

  operationDeletion(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleDel');
    for (let i = 0; i < opRef.length; i++) {
      if (i === index) {
        this.deleteOperation(i);
        opRef[i].className =
          'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      } else {
        opRef[i].className =
          'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      }
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
        break;
      }
      case 1: {
        this.deleteAtEnd();
        break;
      }
    }
  }

  deleteAtFirst(): void {
    if (this.doublelinkedlist.length === 1) {
      this.doubleLinkedList = new Node();
      this.updateAction();
      this.deletionShown = false;
      this.doublelinkedlist = [];
    } else if (this.doublelinkedlist.length > 1) {
      this.doubleLinkedList = this.doubleLinkedList.next;
      this.doubleLinkedList.previous = null;
      this.updateAction();
    } else {
      this.deletionShown = false;
    }
  }
  deleteAtEnd(): void {
    if (this.doublelinkedlist.length > 0) {
      this.head = this.doubleLinkedList;
      if (this.head.next === null) {
        this.doubleLinkedList = this.doubleLinkedList.next;
        this.doublelinkedlist = [];
        this.deletionShown = false;
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
      this.deletionShown = false;
    }
  }

  deleteAtPosition(): void {
    this.operationDeletion(2);
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
