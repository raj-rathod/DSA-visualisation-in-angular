import { Helper } from "src/app/helper/helper";
import { DS } from "src/app/shared/interfaces/data-structure.interface";

const defination: string = "The stack data structure is a linear data structure that accompanies a principle known as <b class='text-warning'>LIFO(Last In First Out)</b>.";
const example: string = "assets/ds-image/stack.jpg";
const properties: string[] = [
     'The insertion and deletion happens at the same end i.e from the top of the stack',
     'Stack is implemented through Array or Linkrd list',
     'If the allocated space for stack is full, and any attempt to add more elements will lead to stack overflow. The opposite, any attempt to extract elements on an empty stack leads to stack underflow'
];
const operations: string[] = [
     'Push', 'Pop', 'Peek'
];
const applications: string[] = [
     'Expression evaluation and conversion',
     'Backtracking',
     'Function call (call stack function)',
     'Parentheses checking',
     'String reversal',
     'Syntax parsing',
     'Memory management',
     'The celebrity problem',
     'Iterative Tower of hanoi',
     'Find next greater elements (frequency)(left -right)' 
];

const advantage: string[] = [
   '<b>Efficient data management</b>: Stack helps you manage the data in a LIFO',
   '<b>Efficient management of functions</b>: When a function is called , the local variables are stored in stack, and it is automatically destroyed once returned',
   'Control over memory',
   'Smart memory management',
   'Not easily corrupted',
   'Does not allow resizing of variables',
];
const disadvantage: string[] = [
   'Limited memory size',
   'Chances of stack overflow',
   'Random access not possible',
   'Unreliable',
   'Undesires termination'
];

export const stackMetaData: DS = {
     defination: Helper.setHeader(defination),
     properties: Helper.setListwithTitleHtml('Properties',properties),
     example: Helper.setExampleImage('Example',example),
     operations: Helper.setListwithTitleHtml('Operations', operations),
     advantage: Helper.setListwithTitleHtml('Advantage',advantage),
     disadvantage: Helper.setListwithTitleHtml('Disadvantage',disadvantage),
     applications: Helper.setListwithTitleHtml('Applications', applications),
}