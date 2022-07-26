import { Helper } from "src/app/helper/helper";
import { DS } from "src/app/shared/interfaces/data-structure.interface";


export const arrayHeader = "An Array is a linear data structure that collects elements of the same data type and store them in <b class='text-warning'>Contiguous and Adjacent memory location</b>. Array works on an indexing system start from 0 to (n-1) where n is the size of the array"
export const properties: string[] = [
  'It is a derived data type, compose of a collection of various primitive data types',
  'Elements of an array are stored in <b class="text-warning"> contiguous blocks in prime memory</b>',
  'The name of the array stored the base address of the array. It acts as a pointer to the memory block where the first element has been stored'
];

export const example: string = 'assets/ds-image/array.jpg';

export const operations: string[] = [
  'Insertion','Deletion', 'Updation','Searching','Sorting',
];

export const algorithms: string[] = [
  'Kadn`s',
  'Flody cycle detection',
  'KMPC',
  'Quick select',
  'Boyer-more majority vote'
];

export const applications: string[] = [
  'Arrays in data structures help to solve some high level problems like the <b class="text-warning">Longest consecutve subsequence</b> program or some easy task like arranging the same things in ascending order',
];

export const advantage: string[] = [
  'Arrays store multiple elements of the same type with the same name',
  'You can randomly access elements in the array using an index number',
  'Array memory is predefined, so there is no extra memory loss',
  'Arrays avoid memory overflow',
  '2D arrays an efficiently represent the tabular data'
];

export const disadvantage: string[] = [
     'The number of elements in the array should be predefined',
     'An array is static it can not alter its size after declaration',
     '<b class="text-warning"> Insertion and deletion</b> operations in the array is quite tricky as the array stores elements in continuous form',
     'Allocating excess memory than required may lead to memory wastage'
];


export const arrayData:DS = {
     defination: Helper.setHeader(arrayHeader),
     properties: Helper.setListwithTitleHtml('Properties',properties),
     example: Helper.setExampleImage('Example', example),
     operations: Helper.setListwithTitleHtml('Operations',operations),
     algorithms: Helper.setListwithTitleHtml('Algorithms',algorithms),
     applications: Helper.setListwithTitleHtml('Applications', applications),
     advantage: Helper.setListwithTitleHtml('Advantage',advantage),
     disadvantage: Helper.setListwithTitleHtml('Disadvantage',disadvantage)
}

