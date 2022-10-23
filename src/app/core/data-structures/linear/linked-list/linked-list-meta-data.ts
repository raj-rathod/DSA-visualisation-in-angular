import { Helper } from "src/app/helper/helper";
import { CodeHighLight } from "src/app/shared/interfaces/code-highlight.interface";
import { DS } from "src/app/shared/interfaces/data-structure.interface";

const defination: string = "A linked list is a linear data structure as well as a dynamic data structure."+
 "A linked list consists of nodes where each node contains a data field and reference(address) to the next node in the list";

const example: string ='assets/ds-image/linked-list.jpg';

const properties: string[] = [
     'It can be visualized as a chain of nodes where each node contains a data field and reference(address) to the next node',
     `The first node of the linked list is called <b class="text-warning">Head</b> of the linked list. 
      Through head, we can performe differnt operations on the linked list`,
     'The last node of the linked list is pointing to the NUll which indicates that it is the last node(TAIl)',
     'Unlike arrays, linked list elements are not stored at contiguous memory locations',
     'Linked lists are dynamic in nature'
];

const types: string[] = [
     `<b>Single linked list</b>:  A single linked list is the most common type of linked list. Each node have data 
     and an address field that contains a reference to the next node`,
     `<b>Double linked list</b>:  In the double linked list, there are three fields that are the previous pointer, 
     that contain a reference to the previous node.Then there is the data, and last you have the next pointer, that 
     containes a reference to the next node. Thus you can go in both direction`,
     `<b>Circular linked list</b>:  The circular linked listis extremely similar to the single linked list. 
     The only difference is that the last node is connected with first node, forming a circular loop in the circular linked list`,
];

const operations: string[] = [
     'Insertion', 'Deletion','Searching'
];

const advantage: string[] = [
     `<b>Dynamic data structure</b>:  A linked list is a dynamic arrangement so it can be grow and shrink at rntime by 
       allocating and deallocating memory. So there is no need to give the initial size of the linked list`,
     `<b>No memory wastage</b>:  In the linked list, efficient memory utilization can be achieved since the 
       size of the linked list increase or decrease at runtime so there is no memory wastage and there is no need 
       to previous the allocate memory`,
     '<b>Implementation</b>: Linear data structures like stack and queue are often easily implemented using linked list',
     `<b>Insertion and deletion</b>:  Insertion and deletion operations are quite easier in the linked list. There is no 
       need to shift elements after the insertion or deletion of the element only the address present in next pointer 
       needs to be update`,
];

const disadvantage: string[] = [
     `<b>Memory usage</b>:  More memory is required in the linked list as compared to an array. Because in linked list a 
       pointer is also required to store the address of the next element and it requires extra memory for itself`,
     `<b>Traversal</b>: In a linked list traversal is more time consuming as compared to an array. 
       Direct access to an element is not possible in linked list as in an array by index`,
     `<b>Reverse traversing</b>:  In a single linked list reverse traversal is not possible but in 
     the case of double linked list, it can be possible`,
     '<b>Random access</b>: Random access is not possible in a linked list due to its dynamic memory allocation',
];
const applications: string[] = [
     'Implementation of stack and queue',
     `Implementation of graphs: adjacency list representation of graphs is most popular 
       which is uses linked list to store adjacent vertices`,
     'Dynamic memory allocation: we use linked list of free blocks',
     'Maintaining directory of names',
     'Performing arithmetic operations on long integers',
     'Manipulation of polynomials by storing constant in the node of linked list',
     'Representation of sparse matrix',
     'Next and previous operations (Image viewer, Music player, web browser etc)',
     'Redo and undo functionality',
     'Most recently used section is represented by double linked list',
     'Binary tree can also be applied by double linked list'
];

export const linkedListMetaData: DS = {
     defination: Helper.setHeader(defination),
     type: Helper.setListwithTitleHtml('Type of linked lists', types),
     example: Helper.setExampleImage('Example', example),
     properties: Helper.setListwithTitleHtml('Properties', properties),
     operations: Helper.setListwithTitleHtml('Operations', operations),
     applications: Helper.setListwithTitleHtml('Applications', applications),
     advantage: Helper.setListwithTitleHtml('Advantages', advantage),
     disadvantage: Helper.setListwithTitleHtml('Disadvantage', disadvantage),
     
}

export const SingleLinkedListCode:CodeHighLight = {
     title:`Single Linked List`,
     codes:[
     {
          description:`Single link node class code snippet`,
          code:`export class SingleLinkNode {
          data: number;
          next: SingleLinkNode | any;
     
          constructor(data: number) {
          this.data = data;
          this.next = null;
          }
     }`
     },
     {
          description:'Convert an array into single linked list',
          code:`createSingleLinkedList(arr: number[]): void {
          for (let i = 0; i < arr.length; i++) {
            const node = new SingleLinkNode(arr[i]);
            if (i === 0) {
                 this.head = node;
                 this.currentNode = this.head;
            } else {
                 this.currentNode.next = node;
                 this.currentNode = node;
            }
          }
     }`
     },
     {
          description:'Insert Node at the start of the linked list',
          code:`insertNodeAtFirst(element: number): void {
          const node = new SingleLinkNode(element);
          this.currentNode = this.head;
          this.head = node;
          this.head.next = this.currentNode;
     }`
     },
     {
          description:'Insert Node at the end of the linked list',
          code:`insertNodeAtEnd(element: number): void {
          const node = new SingleLinkNode(element);
          if (this.head != null) {
               this.currentNode = this.head;
               while (this.currentNode.next !== null) {
               this.currentNode = this.currentNode.next;
               }
               this.currentNode.next = node;
          } else {
               this.head = node;
          }
     }`
     },
     {
          description:'Insert Node at the specific position of the linked list',
          code:`insertNodeAtPosition(element: number, position: number): void {
          if (position === 1 || this.head === null) {
               this.insertNodeAtFirst(element);
               return;
          }
          const node = new SingleLinkNode(element);
          let count = 1;
          this.currentNode = this.head;
          this.previousNode = this.head;
          while (this.currentNode.next !== null) {
               if (count === position) {
               break;
               }
               count++;
               this.previousNode = this.currentNode;
               this.currentNode = this.currentNode.next;
          }
          node.next = this.currentNode;
          this.previousNode.next = node;
     }`
     },
     {
          description:'Delete first node of the linked list',
          code:`deleteAtFirst(): void {
          if (this.head !== null) {
               this.head = this.head.next;
          }
     }`
     },
     {
          description:'Delete last node of the linked list',
          code:`deleteAtEnd(): void {
          if (this.head !== null) {
               this.currentNode = this.head;
               this.previousNode = null;
               while (this.currentNode.next != null) {
                    this.previousNode = this.currentNode;
                    this.currentNode = this.currentNode.next;
               }
               if (this.previousNode != null) {
                   this.previousNode.next = null;
               } else {
                   this.head = null;
               }
          }
     }`
     },
     {
          description:'Delete a specific position node of the linked list',
          code:`deleteAtPosition(position: number): void {
          if (position === 1 || this.head === null) {
               this.deleteAtFirst();
               return;
          }
          let count = 0;
          this.currentNode = this.head;
          while (this.currentNode.next !== null) {
               count++;
               if (count === position) {
               break;
               }
          
               this.previousNode = this.currentNode;
               this.currentNode = this.currentNode.next;
          }
          if (count === position) {
               this.previousNode.next = this.currentNode.next;
          }
     }`
     },
     {
          description:'Convert single linked list into circular linked list',
          code:` convertToCircularLinkedList(): void {
          if (this.head != null) {
               this.currentNode = this.head;
               while (this.currentNode.next !== null) {
                  this.currentNode = this.currentNode.next;
               }
               this.currentNode.next = this.head;
          }
     }`
     },
     {
          description:'Check single linked list is circular linked list or not',
          code:`isCircularLinkedList(): boolean {
          if (this.head === null) {
               return false;
          } else {
               this.currentNode = this.head.next;
               while (this.currentNode.next !== null) {
                    if (this.currentNode === this.head) {
                         return true;
                    }
                    this.currentNode = this.currentNode.next;
               }
               return false;
          }
     }`
     },
     {
          description:'Reverse a single linked list',
          code:`reverseASingleLinkedList(): SingleLinkNode | null {
          if (this.head === null) {
               return this.head;
          } else {
               this.currentNode = this.head.next;
               this.previousNode = this.head;
               this.previousNode.next = null;
               while (this.currentNode !== null) {
                    let temp = this.currentNode;
                    this.currentNode = this.currentNode.next;
                    temp.next = this.previousNode;
                    this.previousNode = temp;
               }
               return this.previousNode;
          }
     }`
     },
     
     ]
}
export const DoubleLinkedListCode:CodeHighLight = {
   title:`Double Linked List`,
   codes:[
     {
          description:`Node Class of double linked list`,
          code:`export class DoubleLinkNode {
          data: number;
          next: DoubleLinkNode | any;
          prev: DoubleLinkNode | any;
          constructor(data: number) {
               this.data = data;
               this.next = null;
               this.prev = null;
          }
     }`
     },
     {
          description:`Convert an array into double linked list`,
          code:`createDoubleLinkedList(arr: number[]): void {
          arr.forEach((item: number, index: number) => {
               const newNode = new DoubleLinkNode(item);
               if (index === 0) {
                    this.head = newNode;
                    this.currentNode = this.head;
               } else {
                    newNode.prev = this.currentNode;
                    this.currentNode.next = newNode;
                    this.currentNode = newNode;
               }
          });
     }`
     },
     {
          description:`Insert Node at the first of the double linked list`,
          code:`insertNodeAtFirst(element: number): void {
          const newNode = new DoubleLinkNode(element);
          this.head.prev = newNode;
          newNode.next = this.head;
          this.head = newNode;
     }`
     },
     {
          description:`Insert Node at the last of the double linked list`,
          code:`insertNodeAtEnd(element: number): void {
          const newNode = new DoubleLinkNode(element);
          if (this.head === null) {
               this.head = newNode;
          } else {
               this.currentNode = this.head;
               while (this.currentNode.next !== null) {
                    this.currentNode = this.currentNode.next;
               }
               newNode.prev = this.currentNode;
               this.currentNode.next = newNode;
          }
     }`
     },
     {
          description:`Insert Node at the specifice position of the double linked list`,
          code:`insertNodeAtPosition(element: number, position: number): void {
          const newNode = new DoubleLinkNode(element);
          if (position === 1 || this.head === null) {
               this.insertNodeAtFirst(element);
          } else {
               this.currentNode = this.head;
               let count = 1;
               while (this.currentNode.next !== null) {
                    if (count === position) {
                         break;
                    }
                    count++;
                    this.currentNode = this.currentNode.next;
               }
               newNode.prev = this.currentNode.prev;
               this.currentNode.prev.next = newNode;
               this.currentNode.prev = newNode;
               newNode.next = this.currentNode;
          }
     }`
     },
     {
          description:`Delete node at the first of the double linked list`,
          code:`deleteAtFirst(): void {
          if (this.head !== null && this.head.next !== null) {
               this.currentNode = this.head.next;
               this.currentNode.prev = null;
               this.head = this.currentNode;
          } else {
               this.head = null;
          }
     }`
     },
     {
          description:`Delete node at the end of the double linked list`,
          code:`deleteAtEnd(): void {
          if (this.head !== null) {
               this.currentNode = this.head;
               while (this.currentNode.next !== null) {
                    this.currentNode = this.currentNode.next;
               }
               if (this.currentNode.prev !== null) {
                    this.currentNode.prev.next = null;
               } else {
                    this.head = null;
               }
          }
     }`
     },
     {
          description:`Delete node at the specifice position of the double linked list`,
          code:`deleteAtPosition(position: number): void {
          if (position === 1 || this.head === null) {
               this.deleteAtFirst();
               return;
          } else {
               let count = 1;
               this.currentNode = this.head;
               while (this.currentNode.next !== null) {
                    if (count === position) {
                         break;
                    }
                    count++;
                    this.currentNode = this.currentNode.next;
               }
               if (count === position && this.currentNode.next !== null) {
                    this.currentNode.prev.next = this.currentNode.next;
                    this.currentNode.next.prev = this.currentNode.prev;
               } else {
                    this.deleteAtEnd();
               }
          }
     }`
     },
   ]
}