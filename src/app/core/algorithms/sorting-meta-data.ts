import { Helper } from "src/app/helper/helper"
import { Algorithms } from "src/app/shared/interfaces/algorithms.interface";

const sortData = {
    defination: `A sorting algorithm is a method for reorganizing a large number of items into a specific order, 
    such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms take lists of 
    items as input data, perform specific operations on those lists and deliver ordered arrays as output`,
    properties: [
        `<b>Speed (or better: time complexity)</b>: The most important criterion when selecting a sorting method is its speed. 
          The main point of interest here is how the speed changes depending on the number of elements to be sorted.<br> After all,
          one algorithm can be twice as fast as another at a hundred elements, but at a thousand elements, it can be five times slower`,
        `<b>Space complexity</b>: Not only time complexity is relevant for sorting methods, but also space complexity. 
          Space complexity specifies how much additional memory the algorithm requires depending on the number of 
          elements to be sorted. This does not refer to the memory required for the elements themselves, 
          but to the additional memory required for auxiliary variables, loop counters, and temporary arrays`,
        `<b>Stability</b>:  In stable sorting methods, the relative sequence of elements that have the same sort key is maintained. 
          This is not guaranteed for non-stable sort methods: The relative order can be maintained but does not have to be`,
        `<b>Comparison sorts / non-comparison sorts</b>:  Most of the well-known sorting methods are based on the comparison 
          of two elements on less, greater or equal. However, there are also non-comparison-based sorting algorithms.<br> 
          You can find out how this can work in the Counting Sort and Radix Sort sections`,
        `<b>Recursive / non-recursive</b>:  A recursive sorting algorithm requires additional memory on the stack. 
          If the recursion is too deep, the dreaded StackOverflowExecption is imminent`
    ],
    example:"assets/ds-image/sorting.jpg ",
}
export const sortingMetaData = {
    defination: Helper.setHeader(sortData.defination),
    properties: Helper.setListwithTitleHtml("Characteristics of Sorting Algorithms", sortData.properties),
    example: Helper.setExampleImage("Complexity and Stability of Sorting Algorithms", sortData.example),
}

// ------------------------------------------ Selection Sort Meta Data ------------------------------------------//

const selectionSortData = {
    defination: `Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based 
    algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.
    Initially, the sorted part is empty and the unsorted part is the entire list. <br>
    The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes 
    a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.`,
    flowChart:"assets/ds-image/selection-sort.jpg",
    workingProcedure:[
        'Initialize minimum value(minValue) to location 0.',
        'Traverse the array to find the minimum element in the array.',
        'While traversing if any element smaller than minValue is found then swap both the values.',
        'Then, increment minValue to point to the next element.',
        'Repeat until the array is sorted.'
    ],
    properties:[
        `This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, 
        the sorted part at the left end and the unsorted part at the right end`,
        `Selection Sort requires the minimum number of swaps.`
    ],
    applications:[
        'a small list is to be sorted',
        'cost of swapping does not matter',
        'checking of all the elements is compulsory',
        'cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)'
    ],
    advantages:[
        'The main advantage of the selection sort is that it performs well on a small list',
        `It is an in-place sorting algorithm, no additional temporary storage is required beyond 
          what is needed to hold the original list`
    ],
    disadvantages:[
        `The primary disadvantage of the selection sort is its poor efficiency when dealing with a huge list of items`,
        `Similar to the bubble sort, the selection sort requires n-squared number of steps for sorting n elements.`
    ]
};
export const selectionSortMetaData: Algorithms = {
    defination: Helper.setHeader(selectionSortData.defination),
    properties: Helper.setListwithTitleHtml('Selection Sort Properties', selectionSortData.properties),
    flowChart: Helper.setExampleImage('Selection Sort Flowchart',selectionSortData.flowChart),
    advantage: Helper.setListwithTitleHtml('Selection Sort Advantages',selectionSortData.advantages),
    disadvantage: Helper.setListwithTitleHtml('Selection Sort Disadvantages',selectionSortData.disadvantages),
    applications: Helper.setListwithTitleHtml('Selection Sort Applications',selectionSortData.applications),
    workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',selectionSortData.workingProcedure),
}