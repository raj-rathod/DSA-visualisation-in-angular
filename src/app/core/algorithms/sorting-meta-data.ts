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
    classifications:[
      `Based on Number of Swaps or Inversion This is the number of times the algorithm swaps elements to sort the input. 
        Selection Sort requires the minimum number of swaps`,
      `Based on Number of Comparisons This is the number of times the algorithm compares elements to sort the input. 
        Using Big-O notation, the sorting algorithm examples listed above require at least O(nlogn) comparisons in the best 
        case and O(n^2) comparisons in the worst case for most of the outputs`,
      `Based on Recursion or Non-Recursion Some sorting algorithms, such as Quick Sort, use recursive techniques to sort the input. 
        Other sorting algorithms, such as Selection Sort or Insertion Sort, use non-recursive techniques. Finally, some sorting 
        algorithm, such as Merge Sort, make use of both recursive as well as non-recursive techniques to sort the input`,
      `Based on Stability Sorting algorithms are said to be stable if the algorithm maintains the relative order of elements with 
        equal keys. In other words, two equivalent elements remain in the same order in the sorted output as they were in the input`,
      `Insertion sort, Merge Sort, and Bubble Sort are stable`,
      `Heap Sort and Quick Sort are not stable`,
      `Based on Extra Space Requirement Sorting algorithms are said to be in place if they require a constant O(1) extra 
        space for sorting`,
      `Insertion sort and Quick-sort are in place sort as we move the elements about the pivot and do not actually use a 
        separate array which is NOT the case in merge sort where the size of the input must be allocated beforehand to store 
        the output during the sort`,
      `Merge Sort is an example of out place sort as it require extra memory space for it’s operations`
    ],
    example:"assets/ds-image/sorting.jpg ",
}
export const sortingMetaData = {
    defination: Helper.setHeader(sortData.defination),
    properties: Helper.setListwithTitleHtml("Characteristics of Sorting Algorithms", sortData.properties),
    classifications: Helper.setListwithTitleHtml("Classification of Sorting Algorithm", sortData.classifications),
    example: Helper.setExampleImage("Complexity and Stability of Sorting Algorithms", sortData.example),
}

// ------------------------------- Selection Sort Meta Data ----------------------------------------------//

const selectionSortData = {
    defination: `Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based 
    algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.
    Initially, the sorted part is empty and the unsorted part is the entire list. <br>
    The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes 
    a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.`,
    flowChart:"assets/ds-image/DSA1.jpg",
    explainImage:"assets/ds-image/DSA1.jpg",
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
    explainImage: Helper.setExampleImage('Selection Sort Explain Image', selectionSortData.explainImage),
    flowChart: Helper.setExampleImage('Selection Sort Flowchart',selectionSortData.flowChart),
    advantage: Helper.setListwithTitleHtml('Selection Sort Advantages',selectionSortData.advantages),
    disadvantage: Helper.setListwithTitleHtml('Selection Sort Disadvantages',selectionSortData.disadvantages),
    applications: Helper.setListwithTitleHtml('Selection Sort Applications',selectionSortData.applications),
    workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',selectionSortData.workingProcedure),
}

// ------------------------------------- End ----------------------------------------------------------------//

// --------------------------------- Insertion Sort ---------------------------------------------------------//

const insertionSortData = {
  defination: `Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards 
    in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part 
    are picked and placed at the correct position in the sorted part`,
  flowChart:"assets/ds-image/DSA1.jpg",
  explainImage:"assets/ds-image/DSA1.jpg",
  workingProcedure:[
    'Iterate from arr[1] to arr[N] over the array',
    'Compare the current element (key) to its predecessor',
    `If the key element is smaller than its predecessor, compare it to the elements before. 
    Move the greater elements one position up to make space for the swapped element`
  ],
  properties:[
    'This algorithm is one of the simplest algorithm with simple implementation',
    'Basically, Insertion sort is efficient for small data values',
    'Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted',
    'Insertion sort is an in-place algorithm, meaning it requires no extra space',
    'Maintains relative order of the input data in case of two equal values (stable)',
    `the bubble sort performs poorly compared to the insertion sort. Due to the high number of swaps, 
      it's expected to generate twice as many write operations and twice as many cache misses`,
    `Insertion sort's advantage is that it only scans as many elements as it needs in order to place the k+1st element,
      while selection sort must scan all remaining elements to find the k+1st element. Experiments show that insertion 
      sort usually performs about half as many comparisons as selection sort`
  ],
  applications:[
    `One more real-world example of insertion sort is how tailors arrange shirts in a cupboard, they always keep them in sorted 
     order of size and thus insert new shirts at the right position very quickly by moving other shirts forward to keep the right 
     place for a new shirt`
  ],
  advantages: [
    `The main advantage of the insertion sort is its simplicity. It also exhibits a good performance when dealing with a small list. 
      The insertion sort is an in-place sorting algorithm so the space requirement is minimal`
  ],
  disadvantages: [
    `The disadvantage of the insertion sort is that it does not perform as well as other, better sorting algorithms. 
     With n-squared steps required for every n element to be sorted, the insertion sort does not deal well with a huge list. 
     Therefore, the insertion sort is particularly useful only when sorting a list of few items`
  ],
  performance:[
    'Worst-case performance of insertion sort is O(n²) comparisons and swaps',
    'Best-case performance is O(n) comparisons and O(1) swaps',
    'Average-case performance is O(n²) comparisons and swaps'
  ]
}

export const insertionSortMetaData: Algorithms = {
  defination: Helper.setHeader(insertionSortData.defination),
  properties: Helper.setListwithTitleHtml('Insertion Sort Properties', insertionSortData.properties),
  explainImage: Helper.setExampleImage('Insertion Sort Explain Image', insertionSortData.explainImage),
  flowChart: Helper.setExampleImage('Insertion Sort Flowchart',insertionSortData.flowChart),
  advantage: Helper.setListwithTitleHtml('Insertion Sort Advantages',insertionSortData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Insertion Sort Disadvantages',insertionSortData.disadvantages),
  applications: Helper.setListwithTitleHtml('Insertion Sort Applications',insertionSortData.applications),
  other: Helper.setListwithTitleHtml('Insertion Sort Performance',insertionSortData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',insertionSortData.workingProcedure),
}

// ------------------------------------- End ----------------------------------------------------------------//

// ------------------------------------- Merge sort ---------------------------------------------------------//

const mergeSortData = {
  defination: `The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. In this algorithm, 
    the array is initially divided into two equal halves and then they are combined in a sorted manner
    </br>
    Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided. 
    This means that if the array becomes empty or has only one element left, the dividing will stop, 
    i.e. it is the base case to stop the recursion. If the array has multiple elements, split the array into 
    halves and recursively invoke the merge sort on each of the halves. Finally, when both halves are sorted, 
    the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and 
    combining them to eventually make a larger one
  `,
  flowChart:"assets/ds-image/DSA1.jpg",
  explainImage:"assets/ds-image/DSA1.jpg",
  workingProcedure:[
    'mergeSort(arr[], l,  r)',
    'If r > l',
    `Find the middle point to divide the array into two halves: middle m = l + (r – l)/2`,
    `Call mergeSort for first half: mergeSort(arr, l, m)`,
    `Call mergeSort for second half: mergeSort(arr, m + 1, r)`,
    `Merge the two halves sorted in steps 2 and 3: merge(arr, l, m, r)`
  ],
  properties:[
    `Merge Sort is useful for sorting linked lists.`,
    `Merge Sort is a stable sort which means that the same element in an array maintain 
      their original positions with respect to each other.`,
    `Overall time complexity of Merge sort is O(nLogn). It is more efficient as it is in worst 
      case also the runtime is O(nlogn)`,
    `The space complexity of Merge sort is O(n). This means that this algorithm takes a lot of space and may 
      slower down operations for the last data sets.`
  ],
  applications:[
    `Merge Sort is useful for sorting linked lists in O(n Log n) time`,
    `Merge sort can be implemented without extra space for linked lists`,
    `Merge sort is used for counting inversions in a list`,
    `Merge sort is used in external sorting`
  ],
  advantages: [
    `Merge sort can efficiently sort a list in O(n*log(n)) time`,
    `Fast for large arrays unlike selection, insertion, and bubble sort it doesn't go through the whole array many times`,
  ],
  disadvantages: [
    `For small datasets, merge sort is slower than other sorting algorithms`,
    `For the temporary array, mergesort requires an additional space of O(n)`,
    `Even if the array is sorted, the merge sort goes through the entire process`
  ],
  performance:[
    'Worst Case Time Complexity [ Big-O ]: O(n*log n)',
    'Best Case Time Complexity [Big-omega]: O(n*log n)',
    'Average Time Complexity [Big-theta]: O(n*log n)',
    'Space Complexity: O(n)'
  ]

}

export const mergeSortMetaData: Algorithms = {
  defination: Helper.setHeader(mergeSortData.defination),
  properties: Helper.setListwithTitleHtml('Merge Sort Properties', mergeSortData.properties),
  explainImage: Helper.setExampleImage('Merge Sort Explain Image', mergeSortData.explainImage),
  flowChart: Helper.setExampleImage('Merge Sort Flowchart',mergeSortData.flowChart),
  advantage: Helper.setListwithTitleHtml('Merge Sort Advantages',mergeSortData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Merge Sort Disadvantages',mergeSortData.disadvantages),
  applications: Helper.setListwithTitleHtml('Merge Sort Applications',mergeSortData.applications),
  other: Helper.setListwithTitleHtml('Merge Sort Performance',mergeSortData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',mergeSortData.workingProcedure),
}

// ------------------------------------- End ----------------------------------------------------------------//

// -------------------------------- Quick Sort --------------------------------------------------------------//

const quickSortData = {
  defination:`Quick sort is a fast sorting algorithm used to sort a list of elements. Quick sort algorithm is 
    invented by C. A. R. Hoare.
    </br>
    The quick sort algorithm attempts to separate the list of elements into two parts and then sort each part recursively. 
    That means it use divide and conquer strategy. In quick sort, the partition of the list is performed based on the 
    element called pivot. Here pivot element is one of the elements in the list.
    </br>
    The list is divided into two partitions such that "all elements to the left of pivot are smaller than the pivot 
    and all elements to the right of pivot are greater than or equal to the pivot".
  `,
  flowChart:"assets/ds-image/DSA1.jpg",
  explainImage:"assets/ds-image/DSA1.jpg",
  workingProcedure:[
    'Consider the first element of the list as pivot (i.e., Element at first position in the list)',
    'Define two variables i and j. Set i and j to first and last elements of the list respectively',
    'Increment i until list[i] > pivot then stop',
    'Decrement j until list[j] < pivot then stop',
    'If i < j then exchange list[i] and list[j]',
    'Repeat steps 3,4 & 5 until i > j',
    'Exchange the pivot element with list[j] element'
  ],
  properties:[
    'Quick Sort is useful for sorting arrays',
    `In efficient implementations Quick Sort is not a stable sort, meaning that the relative order of equal 
      sort items is not preserved`,
    `Overall time complexity of Quick Sort is O(nlogn). In the worst case, it makes O(n**2) comparisons, 
      though this behavior is rare`,
    `The space complexity of Quick Sort is O(logn). It is an in-place sort (i.e. it doesn’t require any extra storage)`
  ],
  applications:[
    `Commercial Computing is used in various government and private organizations for the purpose of sorting various data like 
      sorting files by name/date/price, sorting of students by their roll no., sorting of account profile by given id, etc.`,
    `The sorting algorithm is used for information searching and as Quicksort is the fastest algorithm so it is 
      widely used as a better way of searching`,
    `It is used everywhere where a stable sort is not needed`,
    `Quicksort is a cache-friendly algorithm as it has a good locality of reference when used for arrays`,
    `It is tail -recursive and hence all the call optimization can be done`,
    `It is an in-place sort that does not require any extra storage memory`,
    `Variants of Quicksort are used to separate the Kth smallest or largest elements`
  ],
  advantages: [
    `It is in-place since it uses only a small auxiliary stack`,
    `It requires only n (log n) time to sort n items`,
    `It has an extremely short inner loop`,
  ],
  disadvantages: [
    `It is recursive. Especially, if recursion is not available, the implementation is extremely complicated`,
    `It requires quadratic (i.e., n**2) time in the worst-case`,
    `It is fragile, i.e. a simple mistake in the implementation can go unnoticed and cause it to perform badly`
  ],
  performance:[
    'Worst Case Time Complexity [ Big-O ]: O(n**2)',
    'Best Case Time Complexity [Big-omega]: O(nlog n)',
    'Average Time Complexity [Big-theta]: O(nlog n)',
    'Space Complexity: O(logn)'
  ]

}

export const quickSortMetaData: Algorithms = {
  defination: Helper.setHeader(quickSortData.defination),
  properties: Helper.setListwithTitleHtml('Quick Sort Properties',quickSortData.properties),
  explainImage: Helper.setExampleImage('Quick Sort Explain Image', quickSortData.explainImage),
  flowChart: Helper.setExampleImage('Quick Sort Flowchart',quickSortData.flowChart),
  advantage: Helper.setListwithTitleHtml('Quick Sort Advantages',quickSortData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Quick Sort Disadvantages',quickSortData.disadvantages),
  applications: Helper.setListwithTitleHtml('Quick Sort Applications',quickSortData.applications),
  other: Helper.setListwithTitleHtml('Quick Sort Performance',quickSortData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',quickSortData.workingProcedure),
}

// ------------------------------------- End ----------------------------------------------------------------//

// ------------------------------------- Counting Sort ------------------------------------------------------//

const countingSortData = {
  defination: `Counting sort is a sorting algorithm that sorts the elements of an array by counting the number 
    of occurrences of each unique element in the array. The count is stored in an auxiliary array and 
    the sorting is done by mapping the count as an index of the auxiliary array.`,
  flowChart:"assets/ds-image/DSA1.jpg",
  explainImage:"assets/ds-image/DSA1.jpg",
  workingProcedure:[
    `Iterate through the input array to find the highest value`,
    `Declare a new array with the value 0 and a size of max+1`,
    `Count each element in the array and increment its value in the auxiliary array generated at the corresponding index`,
    `Add current and previous frequency to the auxiliary array to find the cumulative sum`,
    `The cumulative value now represents the element's actual position in the sorted input array`,
    `Begin iterating through the auxiliary array from 0 to max`,
    `Put 0 at the corresponding index and reduce the count by 1, which will indicate the element's 
      second position in the input array if it exists`,
    `Now put the array you got in the previous step into the actual input array`
  ],
  properties:[
    `Like other algorithms this sorting algorithm is not a comparison-based algorithm, 
     it hashes the value in a temporary count array and uses them for sorting`,
    `It uses a temporary array making it a non In Place algorithm`,
    `Counting sort is not a stable algorithm. But it can be made stable with some code changes`,
    `It is often used as a sub-routine to another sorting algorithm like radix sort`,
    `Counting sort can be extended to work for negative inputs also`
  ],
  applications:[
    `If the range of input data is not much bigger than the number of objects to be sorted, counting sort is efficient
      </br>
      Consider the following scenario: the data is 10, 5, 10K, 5K, and the input sequence is 1 to 10K
    `,
    `It isn't a sorting system based on comparisons. It has an O(n) running time complexity, 
     with space proportional to the data range`,
    `Counting sort counts the occurrences of the data object in O using partial hashing (1)`

  ],
  advantages: [
    `Counting sort generally performs faster than all comparison-based sorting algorithms, 
    such as merge sort and quicksort, if the range of input is of the order of the number of input`,
    `Counting sort is easy to code`
  ],
  disadvantages: [
    `Counting sort doesn’t work on decimal values`,
    `Counting sort is inefficient if the range of values to be sorted is very large`
  ],
  performance:[
    'Worst Case Time Complexity [ Big-O ]: O(N+M)',
    'Best Case Time Complexity [Big-omega]: O(N+M)',
    'Average Time Complexity [Big-theta]: O(N+M)',
    'Space Complexity: O(N+M)'
  ]
}

export const countingSortMetaData: Algorithms = {
  defination: Helper.setHeader(countingSortData.defination),
  properties: Helper.setListwithTitleHtml('Counting Sort Properties',countingSortData.properties),
  explainImage: Helper.setExampleImage('Counting Sort Explain Image',countingSortData.explainImage),
  flowChart: Helper.setExampleImage('Counting Sort Flowchart',countingSortData.flowChart),
  advantage: Helper.setListwithTitleHtml('Counting Sort Advantages',countingSortData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Counting Sort Disadvantages',countingSortData.disadvantages),
  applications: Helper.setListwithTitleHtml('Counting Sort Applications',countingSortData.applications),
  other: Helper.setListwithTitleHtml('Counting Sort Performance',countingSortData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem',countingSortData.workingProcedure),
}

// ------------------------------------- End ----------------------------------------------------------------//

// ------------------------------------- End ----------------------------------------------------------------//



// ------------------------------------- End ----------------------------------------------------------------//