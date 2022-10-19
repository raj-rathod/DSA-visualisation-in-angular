import { Helper } from "src/app/helper/helper";
import { DS } from "src/app/shared/interfaces/data-structure.interface";

const defination: string = "A Queue is a linear data structure which follows the particular order inwhich the operations are performed. The order is  <b class='text-warning'>FIFO(First In Firts Out)</b>.";
const example: string = "assets/ds-image/queue.jpg";
const properties: string[] = [];
const operations: string[] = [
     'Enqueue', 'Dequeue', 'Peek'
];
const applications: string[] = [
     '<b>Multi programming</b>:  Multi programming means when multiple programs are running in the main memory. It is essential to organize these multiple programs are organized as queues',
     '<b>Network</b>:  In a network , a queue is used in devices such as a router or a switch. Another application of a queue is a mail queue',
     '<b>Job Scheduling</b>:  The computer has a task to execute a particular number of jobs that are scheduled to be execute one after another. These jobs are assigned one by one to the processor which is organized using a queue',
     '<b>Shared resoures</b>:  Queues are used as waiting lists for a single resoure',
     'Breadth first traversal or BFS',
     'Level order tree traversal',
     'Reverse a path in BST using queue',
     'Construct complete binary tree from its link list representation',
     'Number of siblings of a given Node in n-ary tree',
     'Zig-zag tree traversal'
];
const advantage: string[] = [
     'A large amount of data can be managed efficiently with ease',
     'Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule',
     'Queues are useful when a particular service is used by multiple customers',
     'Queues are fast in speed for data inter process communication',
     'Queues can be used in the implementation of other data structures'
];
const disadvantage: string[] = [
     'The operations such as insertion and deletion of elements from the middle are time consuming',
     'Limited space',
     'In classical queue, a new element can only be inserted when the existing elements are deleted from the queue',
     'Searching an elements takes O(N) time',
     'Maximum size of a queue must be defined prior'
];

export const queueMetaData: DS = {
     defination: Helper.setHeader(defination),
     properties: Helper.setListwithTitleHtml('Properties',properties),
     example: Helper.setExampleImage('Example', example),
     operations: Helper.setListwithTitleHtml('Operations', operations),
     applications: Helper.setListwithTitleHtml('Applications', applications),
     advantage: Helper.setListwithTitleHtml('Advantage',advantage),
     disadvantage: Helper.setListwithTitleHtml('Disadvantage',disadvantage),
}