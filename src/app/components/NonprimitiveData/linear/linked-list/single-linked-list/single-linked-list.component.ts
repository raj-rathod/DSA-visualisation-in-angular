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
  selector: 'app-single-linked-list',
  templateUrl: './single-linked-list.component.html',
  styleUrls: ['./single-linked-list.component.css'],
})
export class SingleLinkedListComponent implements OnInit {
  insertionShown: boolean = false;
  updationShown: boolean = false;
  deletionShown: boolean = false;
  linkedlist: Node[] = [];
  head: Node;
  singleLinkedList: Node;
  constructor(private elref: ElementRef, private matDialog: MatDialog) {
    this.singleLinkedList = new Node();
    this.head = this.singleLinkedList;
  }

  ngOnInit(): void {}

  operationSelection(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.sigleOp');
    for (let i = 0; i < opRef.length; i++) {
      if (i === index) {
        this.oprationSelected(i);
        opRef[i].className =
          'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleOp';
      } else {
        opRef[i].className =
          'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleOp';
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
      position: {
        top: '120px',
      },
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
    this.operationInsertion(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
    this.operationInsertion(1);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
    this.operationInsertion(2);
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
    this.operationUpdation(0);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
      data: singleInput,
    });
    matDialogRef.afterClosed().subscribe((result) => {
      if (result || result === 0) {
        this.singleLinkedList.data = result;
      }
    });
    
  }

  updateAtTail(): void {
    this.operationUpdation(1);
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
    this.operationUpdation(2);
    const matDialogRef = this.matDialog.open(DoubleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
        break;
      }
      case 1: {
        this.deleteAtEnd();
        break;
      }
    }
  }

  deleteAtFirst(): void {
    if (this.linkedlist.length === 1) {
      this.singleLinkedList = this.singleLinkedList.next;
      this.updateAction();
      this.linkedlist = [];
      this.deletionShown = false;
    } else if (this.linkedlist.length > 1) {
      this.singleLinkedList = this.singleLinkedList.next;
      this.updateAction();
    } else {
      this.linkedlist = [];
      this.deletionShown = false;
    }
  }
  deleteAtEnd(): void {
    if (this.linkedlist.length > 0) {
      this.head = this.singleLinkedList;
      if (this.head.next === null) {
        this.singleLinkedList = this.singleLinkedList.next;
        this.linkedlist = [];
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
      this.linkedlist = [];
      this.deletionShown = false;
    }
  }

  deleteAtPosition(): void {
    this.operationDeletion(2)
    const matDialogRef = this.matDialog.open(SingleValueInputDialogComponent, {
      disableClose: true,
      position: {
        top: '120px',
      },
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
