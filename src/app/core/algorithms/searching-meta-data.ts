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
