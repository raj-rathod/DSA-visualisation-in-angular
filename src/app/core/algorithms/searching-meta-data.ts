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
  flowChart: 'assets/ds-image/DSA-404.webp',
  explainImage: 'assets/ds-image/DSA-404.webp',
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
  flowChart: 'assets/ds-image/DSA-404.webp',
  explainImage: 'assets/ds-image/DSA-404.webp',
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
