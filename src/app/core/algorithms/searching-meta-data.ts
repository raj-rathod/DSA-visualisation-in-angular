import { Helper } from 'src/app/helper/helper';
import { Algorithms } from 'src/app/shared/interfaces/algorithms.interface';

const searchingData = {
  defination: `The searching algorithms are used to search or find one or more than one element from a dataset.
     These type of algorithms are used to find elements from a specific data structures.<br> Searching may be 
     sequential or not. If the data in the dataset are random, then we need to use sequential searching. 
     Otherwise we can use other different techniques to reduce the complexity.<br> Search algorithms can 
     be classified based on their mechanism of searching into three types of algorithms: linear, binary, and hashing`,
  terminologies: [
    `<b>Sequential Search</b>:   In this, the list or array is traversed sequentially and every 
        element is checked. For example: Linear Search`,
    `<b>Interval Search</b>:  These algorithms are specifically designed for searching in sorted 
        data-structures. These type of searching algorithms are much more efficient than Linear Search
        as they repeatedly target the center of the search structure and divide the search space in half. 
        For Example: Binary Search`,
  ],
};

export const searchingMetaData = {
  defination: Helper.setHeader(searchingData.defination),
  terminologies: Helper.setListwithTitleHtml(
    'Types of Searchs',
    searchingData.terminologies
  ),
};

// ------------------------------- Linear Search Algorithm ---------------------------------//

const linearSearchData = {
  defination: `Linear Search is defined as a sequential search algorithm that starts at one end and goes through each 
  element of a list until the desired element is found, otherwise the search continues till the end of the data set. 
  It is the easiest searching algorithm`,
  flowChart: 'assets/ds-image/comming-soon.jpg',
  explainImage: 'assets/ds-image/comming-soon.jpg',
  workingProcedure: [
    `Start from the leftmost element of arr and one by one compare 'x' with each element of arr`,
    `If 'x' matches with an element, return the index`,
    `If 'x' doesn’t match with any of the elements, return -1`
  ],
  properties: [
    'It can be implemented on both a single and multidimensional array',
    'It is preferrable for the small-sized data sets',
    'The linear search can be implemented on any linear data structure such as an array, linked list, etc',
    `In a linear search, the elements don't need to be arranged in sorted order`
  ],
  advantages: [
    `Will perform fast searches of small to medium lists. With today's powerful computers, 
    small to medium arrays can be searched relatively quickly`,
    `The list does not need to sorted. Unlike a binary search, linear searching does not require an ordered list`,
    `Not affected by insertions and deletions. As the linear search does not require the list to be sorted, 
    additional elements can be added and deleted. As other searching algorithms may have to reorder the list 
    after insertions or deletions, this may sometimes mean a linear search will be more efficient`
  ],
  disadvantages: [
    `Slow searching of large lists. For example, when searching through a database of everyone in the 
    Northern Ireland to find a particular name, it might be necessary to search through 1.8 million names 
    before you found the one you wanted. This speed disadvantage is why other search methods have been developed`
  ],
  applications: [
    `Linear search can be applied to both single-dimensional and multi-dimensional arrays`,
    `Linear search is easy to implement and effective when the array contains only a few elements`,
    `Linear Search is also efficient when the search is performed to fetch a single search in an unordered-List`
  ],
  performance: [
    `<b>Best Case Complexity</b> - In Linear search, best case occurs when the element we are finding is at the first position of 
    the array. The best-case time complexity of linear search is O(1)`,
    `<b>Average Case Complexity</b> - The average case time complexity of linear search is O(n)`,
    `<b>Worst Case Complexity</b> - In Linear search, the worst case occurs when the element we are looking is present 
    at the end of the array. The worst-case in linear search could be when the target element is not present in the given
     array, and we have to traverse the entire array. The worst-case time complexity of linear search is O(n)`,
    `<b>Space Complexity</b> - The space complexity of linear search is O(1)`
  ],
};

export const linearSearchMetaData: Algorithms = {
    defination: Helper.setHeader(linearSearchData.defination),
    properties: Helper.setListwithTitleHtml('Properties of Linear Search', linearSearchData.properties),
    explainImage: Helper.setExampleImage('Linear Search Image', linearSearchData.explainImage),
    flowChart: Helper.setExampleImage('Flowchart of Linear Search', linearSearchData.flowChart),
    advantage: Helper.setListwithTitleHtml('Advantages of Linear Search', linearSearchData.advantages),
    disadvantage: Helper.setListwithTitleHtml('Disadvantages of Linear Search', linearSearchData.disadvantages),
    applications: Helper.setListwithTitleHtml('Applications of Linear Search', linearSearchData.applications),
    other: Helper.setListwithTitleHtml('Performance of Linear Search', linearSearchData.performance),
    workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem', linearSearchData.workingProcedure),
}

// -----------------------------------  End   ----------------------------------------------//

// ----------------------------------  Binary Search ---------------------------------------//

const binarySearchData = {
  defination:`Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
  The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n)`,
  flowChart: 'assets/ds-image/comming-soon.jpg',
  explainImage: 'assets/ds-image/comming-soon.jpg',
  properties: [
    `The pre-condition for the binary search is that the elements must be arranged in a sorted order`,
    `The implementation of binary search is limited as it can be implemented only on those data structures 
    that have two-way traversal`,
    `It is based on the divide and conquer approach`,
    `It is preferrable for the large-size data sets`,
    `It can be implemented only on a singledimensional array`
  ],
  workingProcedure:[
    `Compare 'x' with the middle element`,
    `If 'x' matches with the middle element, we return the mid index`,
    `Else If 'x' is greater than the mid element, then 'x' can only lie in the right half subarray after the mid element. 
    So we recur for the right half`,
    `Else ('x' is smaller) recur for the left half`
  ],
  advantage: [
    `It is better than a linear search algorithm since its run time complexity is O(Log n)`,
    `At each iteration, the binary search algorithm eliminates half of the list and significantly reduces the search space`,
    `The binary search algorithm works even when the array is rotated by some position and finds the target element`
  ],
  disadvantage: [
    `The recursive method uses stack space`,
    `Programming binary search algorithm is error prone and difficult`,
    `The interaction of binary search with memory hierarchy i.e. caching is poor.
    (because of its random access nature)`
  ],
  applications: [
    `Find an element in a sorted array`,
    `Find the first value greater than or equal to x in a given array of sorted integers`,
    `Find the frequency of a given target value in an array of integers`,
    `Dictionary: In the dictionary, all the words are arranged in lexicographical order, therefore, 
    to find a particular word, we can simply binary search to find the alphabets without having to go through each word`,
    `Find if a number is a square of any integer: To check if a number is a square of any integer, run a binary search from 1
     to num and check if the square of mid is equal to num.`
  ],
  performance: [
    `Best Case Time Complexity of Binary Search: O(1)`,
    `Average Case Time Complexity of Binary Search: O(logN)`,
    `Worst Case Time Complexity of Binary Search: O(logN)`,
    `Space Complexity of Binary Search: O(1) for iterative, O(logN) for recursive`
  ],

};

export const binarySearchMetaData : Algorithms = {
    defination: Helper.setHeader(binarySearchData.defination),
    properties: Helper.setListwithTitleHtml('Properties of Binary Search', binarySearchData.properties),
    explainImage: Helper.setExampleImage('Binary Search Image', binarySearchData.explainImage),
    flowChart: Helper.setExampleImage('Flowchart of Binary Search', binarySearchData.flowChart),
    advantage: Helper.setListwithTitleHtml('Advantages of Binary Search', binarySearchData.advantage),
    disadvantage: Helper.setListwithTitleHtml('Disadvantages of Binary Search', binarySearchData.disadvantage),
    applications: Helper.setListwithTitleHtml('Applications of Binary Search', binarySearchData.applications),
    other: Helper.setListwithTitleHtml('Performance of Binary Search', binarySearchData.performance),
    workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem', binarySearchData.workingProcedure),
}

// -----------------------------------  End   ----------------------------------------------//

// -----------------------------------  Jump Search   ----------------------------------------------//

const jumpSearchData = {
  defination:`Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements by 
  jumping ahead by fixed steps or skipping some elements in place of searching all elements.`,
  flowChart: 'assets/ds-image/comming-soon.jpg',
  explainImage: 'assets/ds-image/comming-soon.jpg',
  properties:[
    `This algorithm works only for sorted input arrays`,
    `Optimal size of the block to be skipped is √n, thus resulting in the time complexity O(√n2)`,
    `The time complexity of this algorithm lies in between linear search (O(n)) and binary search (O(log n))`,
    `It is also called block search algorithm`,
    `If we compare it with linear and binary search then it comes out then it is better than linear search but 
    not better than binary search`,
    `<b>linear search  <  jump search  <  binary search </b>`
  ],
  workingProcedure:[
    `Start from index 0`,
    `Jump head by 'B'(B = √N) elements. Current position = Current position + B. 
    If position is out of element list, set current position to last position`,
    `If element at current position < target element, then do Linear Search on element from position 
    current position -B to current position else go to step 2.If current position is last position. Exit. Element not found`
  ],
  applications:[
    `If jumping back in a list takes significantly more time than jumping forward then one should use this algorithm`
  ],
  advantages: [
    `It is faster than the linear search technique which has a time complexity of O(n) for searching an element`
  ],
  disadvantages: [
    `It is slower than binary search algorithm which searches an element in O(log n)`,
    `It requires the input array to be sorted`
  ],
  performance: [
    `Worst case time complexity: O(√N)`,
    `Average case time complexity: O(√N)`,
    `Best case time complexity: O(1)`,
    `Space complexity: O(1)`
  ],
};

export const jumpSearchMeatData : Algorithms = {
    defination: Helper.setHeader(jumpSearchData.defination),
    properties: Helper.setListwithTitleHtml('Properties of Jump Search', jumpSearchData.properties),
    explainImage: Helper.setExampleImage('Jump Search Image', jumpSearchData.explainImage),
    flowChart: Helper.setExampleImage('Flowchart of Jump Search', jumpSearchData.flowChart),
    advantage: Helper.setListwithTitleHtml('Advantages of Jump Search', jumpSearchData.advantages),
    disadvantage: Helper.setListwithTitleHtml('Disadvantages of Jump Search', jumpSearchData.disadvantages),
    applications: Helper.setListwithTitleHtml('Applications of Jump Search', jumpSearchData.applications),
    other: Helper.setListwithTitleHtml('Performance of Jump Search', jumpSearchData.performance),
    workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem', jumpSearchData.workingProcedure),
}

// -----------------------------------  End   ----------------------------------------------//

// -----------------------------  Interpolation Search  ------------------------------------//

const interpolationSearchData = {
  defination:`The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted 
  array are uniformly distributed. Interpolation constructs new data points within the range of a discrete set of known 
  data points. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to
  different locations according to the value of the key being searched. For example, if the value of the key is closer to the 
  last element, interpolation search is likely to start search toward the end side.`,
  flowChart: 'assets/ds-image/comming-soon.jpg',
  explainImage: 'assets/ds-image/comming-soon.jpg',
  properties: [
    `Interpolation searching algorithm is only used when the elements in an array is sorted and uniformly distributed`,
    `pos = low + ((target – A[low]) * (high – low) / (A[high] – A[low]))`
  ],
  workingProcedure: [
    `<b>pos = low + ((target – A[low]) * (high – low) / (A[high] – A[low]))</b>`,
    `In a loop, calculate the value of pos using the above formula`,
    `If it is a match, return the index of the item, and exit`,
    `If the item is less than the element at position pos, calculate the target position of the left sub-array. 
    Otherwise calculate the same in the right sub-array`,
    `Repeat until a match is found or the search space reduces to zero`
  ],
  applications: [
    `Since the major requirement to use Interpolation Search is that the data set must be sorted and uniformly distributed, it has a very 
    limited number of applications in real life, where data is actually quite randomised`,
    `Interpolation Search Algorithm is a search algorithm that has been inspired by the way humans search through a telephone book for a particular name,
     the key value by which the book's entries are ordered`
  ],
  advantages: [
    `When all elements in the list are sorted and evenly distributed, then executing time of 
    Interpolation search algorithm is log(log n)`
  ],
  disadvantages: [
    `However, When the elements in the list are increased exponentially, then executing time of Interpolation search algorithm is 0(n)`
  ],
  performance: [
    `Worst case time complexity: O(N)`,
    `Average case time complexity: O(log log N)`,
    `Best case time complexity: O(1)`,
    `Space complexity: O(1)`
  ]
};

export const interpolationSearchMetaData : Algorithms = {
  defination: Helper.setHeader(interpolationSearchData.defination),
  properties: Helper.setListwithTitleHtml('Properties of Interpolation Search', interpolationSearchData.properties),
  explainImage: Helper.setExampleImage('Interpolation Search Image', interpolationSearchData.explainImage),
  flowChart: Helper.setExampleImage('Flowchart of Interpolation Search', interpolationSearchData.flowChart),
  advantage: Helper.setListwithTitleHtml('Advantages of Interpolation Search', interpolationSearchData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Disadvantages of Interpolation Search', interpolationSearchData.disadvantages),
  applications: Helper.setListwithTitleHtml('Applications of Interpolation Search', interpolationSearchData.applications),
  other: Helper.setListwithTitleHtml('Performance of Interpolation Search', interpolationSearchData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem', interpolationSearchData.workingProcedure),
}

// -----------------------------------  End   ----------------------------------------------//

// --------------------------------  Exponential Search ------------------------------------//

const exponentialSearchData = {
  defination:`Exponential search allows for searching through a sorted, unbounded list for a specified input value 
  (the search "key"). The algorithm consists of two stages. The first stage determines a range in which the search
  key would reside if it were in the list. In the second stage, a binary search is performed on this range. In the first stage, 
  assuming that the list is sorted in ascending order, the algorithm looks for the first exponent, j, where the value 2^j is greater 
  than the search key. This value, 2^j becomes the upper bound for the binary search with the previous power of 2, 2^(j - 1), being the 
  lower bound for the binary search`,
  flowChart: 'assets/ds-image/comming-soon.jpg',
  explainImage: 'assets/ds-image/comming-soon.jpg',
  properties: [
    `Finding the range in which the key could sit`,
    `Applying binary search in this range`,
    `Exponential search algorithm (also called doubling search, galloping search, Struzik search) is a search algorithm, 
    created by Jon Bentley and Andrew Chi-Chih Yao in 1976, for searching sorted, unbounded/infinite lists`
  ],
  workingProcedure: [
    `Start with value i=1`,
    `Check for a condition i < n and Array[i]<=key, where n is the number of items in the array and key is the element being sought`,
    `Increment value of I in powers of 2, that is, i=i*2`,
    `Keep on incrementing the value of 'i' until the condition is met`,
    `Apply binary on the range i/2 to the end of Array - binarySearch(Array, i/2, min(i,n-1))`
  ],
  applications: [
    `Exponential Binary Search is useful for unbounded searches where size of array is infinite`,
    `It works better than Binary Search for bounded arrays when the element to be searched is closer to the beginning of the array.`
  ],
  advantages: [
    `Exponential Binary Search is useful for unbounded searches where size of array is infinite`,
  ],
  disadvantages: [
    `The list should be sorted to perform the exponential search, if the list is unsorted, it will give wrong results`
  ],
  performance: [
    `Worst case time complexity: O(log i) where i is the index of the element being searched`,
    `Average case time complexity: O(log i)`,
    `Best case time complexity: O(1)`,
    `Space complexity: O(1)`
  ]

};

export const exponentialSearchMetaData: Algorithms = {
  defination: Helper.setHeader(exponentialSearchData.defination),
  properties: Helper.setListwithTitleHtml('Properties of Exponential Search', exponentialSearchData.properties),
  explainImage: Helper.setExampleImage('Exponential Search Image', exponentialSearchData.explainImage),
  flowChart: Helper.setExampleImage('Flowchart of Exponential Search', exponentialSearchData.flowChart),
  advantage: Helper.setListwithTitleHtml('Advantages of Exponential Search', exponentialSearchData.advantages),
  disadvantage: Helper.setListwithTitleHtml('Disadvantages of Exponential Search', exponentialSearchData.disadvantages),
  applications: Helper.setListwithTitleHtml('Applications of Exponential Search', exponentialSearchData.applications),
  other: Helper.setListwithTitleHtml('Performance of Exponential Search', exponentialSearchData.performance),
  workingProcedure: Helper.setListwithTitleHtml('Follow the below steps to solve the problem', exponentialSearchData.workingProcedure),
}

// -----------------------------------  End   ----------------------------------------------//


