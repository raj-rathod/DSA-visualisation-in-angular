(self.webpackChunkdsa_visualisation=self.webpackChunkdsa_visualisation||[]).push([[722],{3722:(e,t,a)=>{"use strict";a.r(t),a.d(t,{SearchingModule:()=>J});var i=a(8583),n=a(701),r=a(1077);const o={defination:r.W.setHeader("The searching algorithms are used to search or find one or more than one element from a dataset.\n     These type of algorithms are used to find elements from a specific data structures.<br> Searching may be \n     sequential or not. If the data in the dataset are random, then we need to use sequential searching. \n     Otherwise we can use other different techniques to reduce the complexity.<br> Search algorithms can \n     be classified based on their mechanism of searching into three types of algorithms: linear, binary, and hashing"),terminologies:r.W.setListwithTitleHtml("Types of Searchs",["<b>Sequential Search</b>:   In this, the list or array is traversed sequentially and every \n        element is checked. For example: Linear Search","<b>Interval Search</b>:  These algorithms are specifically designed for searching in sorted \n        data-structures. These type of searching algorithms are much more efficient than Linear Search\n        as they repeatedly target the center of the search structure and divide the search space in half. \n        For Example: Binary Search"])},s={defination:r.W.setHeader("Linear Search is defined as a sequential search algorithm that starts at one end and goes through each \n  element of a list until the desired element is found, otherwise the search continues till the end of the data set. \n  It is the easiest searching algorithm"),properties:r.W.setListwithTitleHtml("Properties of Linear Search",["It can be implemented on both a single and multidimensional array","It is preferrable for the small-sized data sets","The linear search can be implemented on any linear data structure such as an array, linked list, etc","In a linear search, the elements don't need to be arranged in sorted order"]),explainImage:r.W.setExampleImage("Linear Search Image","assets/ds-image/comming-soon.jpg"),flowChart:r.W.setExampleImage("Flowchart of Linear Search","assets/ds-image/comming-soon.jpg"),advantage:r.W.setListwithTitleHtml("Advantages of Linear Search",["Will perform fast searches of small to medium lists. With today's powerful computers, \n    small to medium arrays can be searched relatively quickly","The list does not need to sorted. Unlike a binary search, linear searching does not require an ordered list","Not affected by insertions and deletions. As the linear search does not require the list to be sorted, \n    additional elements can be added and deleted. As other searching algorithms may have to reorder the list \n    after insertions or deletions, this may sometimes mean a linear search will be more efficient"]),disadvantage:r.W.setListwithTitleHtml("Disadvantages of Linear Search",["Slow searching of large lists. For example, when searching through a database of everyone in the \n    Northern Ireland to find a particular name, it might be necessary to search through 1.8 million names \n    before you found the one you wanted. This speed disadvantage is why other search methods have been developed"]),applications:r.W.setListwithTitleHtml("Applications of Linear Search",["Linear search can be applied to both single-dimensional and multi-dimensional arrays","Linear search is easy to implement and effective when the array contains only a few elements","Linear Search is also efficient when the search is performed to fetch a single search in an unordered-List"]),other:r.W.setListwithTitleHtml("Performance of Linear Search",["<b>Best Case Complexity</b> - In Linear search, best case occurs when the element we are finding is at the first position of \n    the array. The best-case time complexity of linear search is O(1)","<b>Average Case Complexity</b> - The average case time complexity of linear search is O(n)","<b>Worst Case Complexity</b> - In Linear search, the worst case occurs when the element we are looking is present \n    at the end of the array. The worst-case in linear search could be when the target element is not present in the given\n     array, and we have to traverse the entire array. The worst-case time complexity of linear search is O(n)","<b>Space Complexity</b> - The space complexity of linear search is O(1)"]),workingProcedure:r.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Start from the leftmost element of arr and one by one compare 'x' with each element of arr","If 'x' matches with an element, return the index","If 'x' doesn\u2019t match with any of the elements, return -1"])},h={defination:r.W.setHeader("Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. \n  The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n)"),properties:r.W.setListwithTitleHtml("Properties of Binary Search",["The pre-condition for the binary search is that the elements must be arranged in a sorted order","The implementation of binary search is limited as it can be implemented only on those data structures \n    that have two-way traversal","It is based on the divide and conquer approach","It is preferrable for the large-size data sets","It can be implemented only on a singledimensional array"]),explainImage:r.W.setExampleImage("Binary Search Image","assets/ds-image/comming-soon.jpg"),flowChart:r.W.setExampleImage("Flowchart of Binary Search","assets/ds-image/comming-soon.jpg"),advantage:r.W.setListwithTitleHtml("Advantages of Binary Search",["It is better than a linear search algorithm since its run time complexity is O(Log n)","At each iteration, the binary search algorithm eliminates half of the list and significantly reduces the search space","The binary search algorithm works even when the array is rotated by some position and finds the target element"]),disadvantage:r.W.setListwithTitleHtml("Disadvantages of Binary Search",["The recursive method uses stack space","Programming binary search algorithm is error prone and difficult","The interaction of binary search with memory hierarchy i.e. caching is poor.\n    (because of its random access nature)"]),applications:r.W.setListwithTitleHtml("Applications of Binary Search",["Find an element in a sorted array","Find the first value greater than or equal to x in a given array of sorted integers","Find the frequency of a given target value in an array of integers","Dictionary: In the dictionary, all the words are arranged in lexicographical order, therefore, \n    to find a particular word, we can simply binary search to find the alphabets without having to go through each word","Find if a number is a square of any integer: To check if a number is a square of any integer, run a binary search from 1\n     to num and check if the square of mid is equal to num."]),other:r.W.setListwithTitleHtml("Performance of Binary Search",["Best Case Time Complexity of Binary Search: O(1)","Average Case Time Complexity of Binary Search: O(logN)","Worst Case Time Complexity of Binary Search: O(logN)","Space Complexity of Binary Search: O(1) for iterative, O(logN) for recursive"]),workingProcedure:r.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Compare 'x' with the middle element","If 'x' matches with the middle element, we return the mid index","Else If 'x' is greater than the mid element, then 'x' can only lie in the right half subarray after the mid element. \n    So we recur for the right half","Else ('x' is smaller) recur for the left half"])},l={defination:r.W.setHeader("Jump Search is a searching algorithm for sorted arrays. The basic idea is to check fewer elements by \n  jumping ahead by fixed steps or skipping some elements in place of searching all elements."),properties:r.W.setListwithTitleHtml("Properties of Jump Search",["This algorithm works only for sorted input arrays","Optimal size of the block to be skipped is \u221an, thus resulting in the time complexity O(\u221an2)","The time complexity of this algorithm lies in between linear search (O(n)) and binary search (O(log n))","It is also called block search algorithm","If we compare it with linear and binary search then it comes out then it is better than linear search but \n    not better than binary search","<b>linear search  <  jump search  <  binary search </b>"]),explainImage:r.W.setExampleImage("Jump Search Image","assets/ds-image/comming-soon.jpg"),flowChart:r.W.setExampleImage("Flowchart of Jump Search","assets/ds-image/comming-soon.jpg"),advantage:r.W.setListwithTitleHtml("Advantages of Jump Search",["It is faster than the linear search technique which has a time complexity of O(n) for searching an element"]),disadvantage:r.W.setListwithTitleHtml("Disadvantages of Jump Search",["It is slower than binary search algorithm which searches an element in O(log n)","It requires the input array to be sorted"]),applications:r.W.setListwithTitleHtml("Applications of Jump Search",["If jumping back in a list takes significantly more time than jumping forward then one should use this algorithm"]),other:r.W.setListwithTitleHtml("Performance of Jump Search",["Worst case time complexity: O(\u221aN)","Average case time complexity: O(\u221aN)","Best case time complexity: O(1)","Space complexity: O(1)"]),workingProcedure:r.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Start from index 0","Jump head by 'B'(B = \u221aN) elements. Current position = Current position + B. \n    If position is out of element list, set current position to last position","If element at current position < target element, then do Linear Search on element from position \n    current position -B to current position else go to step 2.If current position is last position. Exit. Element not found"])},c={defination:r.W.setHeader("The Interpolation Search is an improvement over Binary Search for instances, where the values in a sorted \n  array are uniformly distributed. Interpolation constructs new data points within the range of a discrete set of known \n  data points. Binary Search always goes to the middle element to check. On the other hand, interpolation search may go to\n  different locations according to the value of the key being searched. For example, if the value of the key is closer to the \n  last element, interpolation search is likely to start search toward the end side."),properties:r.W.setListwithTitleHtml("Properties of Interpolation Search",["Interpolation searching algorithm is only used when the elements in an array is sorted and uniformly distributed","pos = low + ((target \u2013 A[low]) * (high \u2013 low) / (A[high] \u2013 A[low]))"]),explainImage:r.W.setExampleImage("Interpolation Search Image","assets/ds-image/comming-soon.jpg"),flowChart:r.W.setExampleImage("Flowchart of Interpolation Search","assets/ds-image/comming-soon.jpg"),advantage:r.W.setListwithTitleHtml("Advantages of Interpolation Search",["When all elements in the list are sorted and evenly distributed, then executing time of \n    Interpolation search algorithm is log(log n)"]),disadvantage:r.W.setListwithTitleHtml("Disadvantages of Interpolation Search",["However, When the elements in the list are increased exponentially, then executing time of Interpolation search algorithm is 0(n)"]),applications:r.W.setListwithTitleHtml("Applications of Interpolation Search",["Since the major requirement to use Interpolation Search is that the data set must be sorted and uniformly distributed, it has a very \n    limited number of applications in real life, where data is actually quite randomised","Interpolation Search Algorithm is a search algorithm that has been inspired by the way humans search through a telephone book for a particular name,\n     the key value by which the book's entries are ordered"]),other:r.W.setListwithTitleHtml("Performance of Interpolation Search",["Worst case time complexity: O(N)","Average case time complexity: O(log log N)","Best case time complexity: O(1)","Space complexity: O(1)"]),workingProcedure:r.W.setListwithTitleHtml("Follow the below steps to solve the problem",["<b>pos = low + ((target \u2013 A[low]) * (high \u2013 low) / (A[high] \u2013 A[low]))</b>","In a loop, calculate the value of pos using the above formula","If it is a match, return the index of the item, and exit","If the item is less than the element at position pos, calculate the target position of the left sub-array. \n    Otherwise calculate the same in the right sub-array","Repeat until a match is found or the search space reduces to zero"])},m={defination:r.W.setHeader('Exponential search allows for searching through a sorted, unbounded list for a specified input value \n  (the search "key"). The algorithm consists of two stages. The first stage determines a range in which the search\n  key would reside if it were in the list. In the second stage, a binary search is performed on this range. In the first stage, \n  assuming that the list is sorted in ascending order, the algorithm looks for the first exponent, j, where the value 2^j is greater \n  than the search key. This value, 2^j becomes the upper bound for the binary search with the previous power of 2, 2^(j - 1), being the \n  lower bound for the binary search'),properties:r.W.setListwithTitleHtml("Properties of Exponential Search",["Finding the range in which the key could sit","Applying binary search in this range","Exponential search algorithm (also called doubling search, galloping search, Struzik search) is a search algorithm, \n    created by Jon Bentley and Andrew Chi-Chih Yao in 1976, for searching sorted, unbounded/infinite lists"]),explainImage:r.W.setExampleImage("Exponential Search Image","assets/ds-image/comming-soon.jpg"),flowChart:r.W.setExampleImage("Flowchart of Exponential Search","assets/ds-image/comming-soon.jpg"),advantage:r.W.setListwithTitleHtml("Advantages of Exponential Search",["Exponential Binary Search is useful for unbounded searches where size of array is infinite"]),disadvantage:r.W.setListwithTitleHtml("Disadvantages of Exponential Search",["The list should be sorted to perform the exponential search, if the list is unsorted, it will give wrong results"]),applications:r.W.setListwithTitleHtml("Applications of Exponential Search",["Exponential Binary Search is useful for unbounded searches where size of array is infinite","It works better than Binary Search for bounded arrays when the element to be searched is closer to the beginning of the array."]),other:r.W.setListwithTitleHtml("Performance of Exponential Search",["Worst case time complexity: O(log i) where i is the index of the element being searched","Average case time complexity: O(log i)","Best case time complexity: O(1)","Space complexity: O(1)"]),workingProcedure:r.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Start with value i=1","Check for a condition i < n and Array[i]<=key, where n is the number of items in the array and key is the element being sought","Increment value of I in powers of 2, that is, i=i*2","Keep on incrementing the value of 'i' until the condition is met","Apply binary on the range i/2 to the end of Array - binarySearch(Array, i/2, min(i,n-1))"])};var p=a(8720);let d=(()=>{class e{constructor(){this.binarySearchMetaData=h}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-binary-search"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Binary Search Algorithm"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p._UZ(4,"div",1),p._UZ(5,"div",1),p._UZ(6,"div",1),p._UZ(7,"div",1),p._UZ(8,"div",1),p._UZ(9,"div",1),p._UZ(10,"div",1)),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.binarySearchMetaData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.explainImage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.properties,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.flowChart,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.workingProcedure,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.applications,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.other,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.advantage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.binarySearchMetaData.disadvantage,p.oJD))},styles:[""]}),e})(),g=(()=>{class e{constructor(){this.exponentialSearchMetaData=m}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-exponential-search"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Exponential Search Algorithm"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p._UZ(4,"div",1),p._UZ(5,"div",1),p._UZ(6,"div",1),p._UZ(7,"div",1),p._UZ(8,"div",1),p._UZ(9,"div",1),p._UZ(10,"div",1)),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.exponentialSearchMetaData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.explainImage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.properties,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.flowChart,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.workingProcedure,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.applications,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.other,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.advantage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.exponentialSearchMetaData.disadvantage,p.oJD))},styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-fibonacci-search"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Coming soon"),p.qZA())},styles:[""]}),e})(),u=(()=>{class e{constructor(){this.interpolationSearchMetaData=c}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-interpolation-search"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Interpolation Search Algorithm"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p._UZ(4,"div",1),p._UZ(5,"div",1),p._UZ(6,"div",1),p._UZ(7,"div",1),p._UZ(8,"div",1),p._UZ(9,"div",1),p._UZ(10,"div",1)),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.interpolationSearchMetaData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.explainImage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.properties,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.flowChart,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.workingProcedure,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.applications,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.other,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.advantage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.interpolationSearchMetaData.disadvantage,p.oJD))},styles:[""]}),e})(),y=(()=>{class e{constructor(){this.jumpSearchMeatData=l}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-jump-search"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Jump Search Algorithm"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p._UZ(4,"div",1),p._UZ(5,"div",1),p._UZ(6,"div",1),p._UZ(7,"div",1),p._UZ(8,"div",1),p._UZ(9,"div",1),p._UZ(10,"div",1)),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.jumpSearchMeatData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.explainImage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.properties,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.flowChart,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.workingProcedure,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.applications,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.other,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.advantage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.jumpSearchMeatData.disadvantage,p.oJD))},styles:[""]}),e})(),w=(()=>{class e{constructor(){this.linearSearchMetaData=s}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-linear-search"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Linear Search Algorithm"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p._UZ(4,"div",1),p._UZ(5,"div",1),p._UZ(6,"div",1),p._UZ(7,"div",1),p._UZ(8,"div",1),p._UZ(9,"div",1),p._UZ(10,"div",1)),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.linearSearchMetaData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.explainImage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.properties,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.flowChart,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.workingProcedure,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.applications,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.other,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.advantage,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.linearSearchMetaData.disadvantage,p.oJD))},styles:[""]}),e})();var x=a(4912);function b(e,t){if(1&e&&(p.ynx(0),p.TgZ(1,"div",4),p.TgZ(2,"p",5),p._uU(3),p.qZA(),p.qZA(),p.BQk()),2&e){const e=t.$implicit;p.xp6(1),p.Q6J("routerLink",e.route),p.xp6(2),p.Oqu(e.name)}}const v=[{path:"",component:(()=>{class e{constructor(){this.searchingMetaData=o,this.searchingLinks=x.O7}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-searching-algorithm"]],decls:6,vars:3,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"],[1,"mt-md-4","mt-3","d-flex","align-items-center","horizontal-scroll"],[4,"ngFor","ngForOf"],[1,"box","p-lg-2","p-1","px-lg-3","px-2","tab","me-lg-4","me-3",3,"routerLink"],[1,"m-0"]],template:function(e,t){1&e&&(p.TgZ(0,"h1",0),p._uU(1,"Searching Algorithms"),p.qZA(),p._UZ(2,"div",1),p._UZ(3,"div",1),p.TgZ(4,"div",2),p.YNc(5,b,4,2,"ng-container",3),p.qZA()),2&e&&(p.xp6(2),p.Q6J("innerHtml",t.searchingMetaData.defination,p.oJD),p.xp6(1),p.Q6J("innerHtml",t.searchingMetaData.terminologies,p.oJD),p.xp6(2),p.Q6J("ngForOf",t.searchingLinks))},directives:[i.sg,n.rH],styles:[""]}),e})()},{path:"linear-search",component:w},{path:"binary-search",component:d},{path:"jump-search",component:y},{path:"interpolation-search",component:u},{path:"exponential-search",component:g},{path:"fibonacci-search",component:f}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[n.Bz.forChild(v)],n.Bz]}),e})(),J=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[i.ez,S]]}),e})()}}]);