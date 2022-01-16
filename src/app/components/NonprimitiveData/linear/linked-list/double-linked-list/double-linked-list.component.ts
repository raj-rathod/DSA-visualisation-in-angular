import { Component, ElementRef, OnInit } from '@angular/core';
import { Node } from '../node'

@Component({
  selector: 'app-double-linked-list',
  templateUrl: './double-linked-list.component.html',
  styleUrls: ['./double-linked-list.component.css']
})
export class DoubleLinkedListComponent implements OnInit {
  insertionShown: boolean = false;
  updationShown: boolean = false;
  deletionShown: boolean = false;
  doublelinkedlist:Node[] = [];
  doubleLinkedList:Node;
  head:Node;
  constructor(
    private elref: ElementRef,
  ) {
    this.doubleLinkedList = new Node();
    this.head = this.doubleLinkedList;
   }

  ngOnInit(): void {
 
  }

  

  operationSelection(index: number): void {
    const opRef = this.elref.nativeElement.querySelectorAll('.doubleOp');
    for (let i = 0; i < opRef.length; i++){
      if(i === index){
        this.oprationSelected(i);
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 doubleOp';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 doubleOp';
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

  createLinkedList(input: string): void {
    this.generateLinkedlist(input.split(' '));
    this.insertionShown = false;
    this.updationShown = false;
    this.deletionShown = false;
  }

  generateLinkedlist(arr:string[]): void {
    this.doubleLinkedList = new Node();
    for(let i = 0; i < arr.length; i++) {
      if(this.doubleLinkedList.data === null){
        this.doubleLinkedList.data = arr[i];
        this.head = this.doubleLinkedList;
      }else{
        let newNode = new Node(arr[i]);
        newNode.previous = this.head;
        this.head.next  = newNode;
        this.head = newNode
      }
    }
    this.updateAction();
  }

  updateAction(): void {
    this.doublelinkedlist = [];
    this.head = this.doubleLinkedList;
    while(this.head){
      this.doublelinkedlist.push(this.head);
      this.head = this.head.next;
    }
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
        this.deleteOperation(i);
        opRef[i].className = 'box box-active p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      }else{
        opRef[i].className = 'box p-lg-2 p-1 px-lg-3 px-2 btn me-lg-4 me-3 mb-2 sigleDel';
      }
    }
  }

  insertAtHead(data:{index: number, value: string}): void {
    let newNode = new Node(data.value);
    newNode.next = this.doubleLinkedList
    this.doubleLinkedList.previous = newNode;
    this.doubleLinkedList = newNode;
    this.updateAction();
 }

 insertAtTail(data:{index: number, value: string}): void {
   let newNode = new Node(data.value);
   this.head = this.doubleLinkedList
   while(this.head.next){
     this.head = this.head.next
   }
   newNode.previous = this.head;
   this.head.next = newNode;
   this.updateAction();
 }

 insertAtPosition(data:{index: number, value: string}): void {
    if(this.doublelinkedlist.length+1 < data.index || data.index < 1){
      alert("Enter valid Position")
    }else{
      if(data.index === 1){
        this.insertAtHead(data);
      }else if(data.index === this.doublelinkedlist.length + 1){
        this.insertAtTail(data);
      }else{
         let count = 1;
         this.head = this.doubleLinkedList;
         let previous = this.head;
         while(this.head){
           if(count === data.index){
              let newNode = new Node(data.value);
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

 updateAtHead(data:{index: number, value: string}): void {
    this.doubleLinkedList.data = data.value;
 }
  updateAtTail(data:{index: number, value: string}): void {
  this.head = this.doubleLinkedList
  while(this.head.next){
    this.head = this.head.next
  }
  this.head.data = data.value;
}
updateAtPosition(data:{index: number, value: string}): void {
 if(data.index < 1 || data.index > this.doublelinkedlist.length){
   alert('Invalid position  '+ data.index);
 }else{
   if(data.index === 1){
     this.updateAtHead(data);
   }else if(data.index === this.doublelinkedlist.length){
     this.updateAtTail(data);
   }else{
     let count = 1;
     this.head = this.doubleLinkedList
     while(this.head.next){
       if(count === data.index){
         this.head.data = data.value
         break;
       }
       this.head = this.head.next;
       count++;
     }

   }
 }
}

deleteOperation(index: number): void {
  switch (index) {
    case 0:{
      this.deleteAtFirst();
      break;
    }
    case 1:{
      this.deleteAtEnd();
      break;
    }
  }
}

deleteAtFirst(): void {
  if(this.doublelinkedlist.length === 1){
    this.doubleLinkedList = new Node();
    this.updateAction();
    this.deletionShown = false;
    this.doublelinkedlist = [];
  }else if(this.doublelinkedlist.length >1){
    this.doubleLinkedList = this.doubleLinkedList.next;
    this.doubleLinkedList.previous = null;
    this.updateAction();
  }else{
    this.deletionShown = false;
  }

}
deleteAtEnd(): void {
  if(this.doublelinkedlist.length >0){
    this.head = this.doubleLinkedList;
    if(this.head.next === null){
      this.doubleLinkedList = this.doubleLinkedList.next;
      this.doublelinkedlist = [];
      this.deletionShown = false;
    }else{
      while(this.head){
        if(this.head.next.next === null){
          this.head.next = null;
          break;
        }
        this.head = this.head.next;
      }
    }
    this.updateAction();
  }else{
    this.doublelinkedlist = [];
    this.deletionShown = false;
  }
}

deleteAtPosition(index: number): void {
  if(index > 0 && index < this.doublelinkedlist.length + 1){
    if(index === 1){
      this.deleteAtFirst();
    }else if(index === this.doublelinkedlist.length){
      this.deleteAtEnd();
    }else{
      let count = 1;
      this.head = this.doubleLinkedList;
      let prev = this.head;
      while(this.head){
        if(count === index){
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
  }else{
    alert("Invalid position: " + index);
  }
}

}
