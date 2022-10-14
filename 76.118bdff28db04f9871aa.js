(self.webpackChunkdsa_visualisation=self.webpackChunkdsa_visualisation||[]).push([[76],{6076:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SortingModule:()=>T});var o=n(8583),s=n(2389),i=n(3018);let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-bubble-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})(),a=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-bucket-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})(),l=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-counting-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})();var m=n(1077);const c={defination:m.W.setHeader("A sorting algorithm is a method for reorganizing a large number of items into a specific order, \n    such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms take lists of \n    items as input data, perform specific operations on those lists and deliver ordered arrays as output"),properties:m.W.setListwithTitleHtml("Characteristics of Sorting Algorithms",["<b>Speed (or better: time complexity)</b>: The most important criterion when selecting a sorting method is its speed. \n          The main point of interest here is how the speed changes depending on the number of elements to be sorted.<br> After all,\n          one algorithm can be twice as fast as another at a hundred elements, but at a thousand elements, it can be five times slower","<b>Space complexity</b>: Not only time complexity is relevant for sorting methods, but also space complexity. \n          Space complexity specifies how much additional memory the algorithm requires depending on the number of \n          elements to be sorted. This does not refer to the memory required for the elements themselves, \n          but to the additional memory required for auxiliary variables, loop counters, and temporary arrays","<b>Stability</b>:  In stable sorting methods, the relative sequence of elements that have the same sort key is maintained. \n          This is not guaranteed for non-stable sort methods: The relative order can be maintained but does not have to be","<b>Comparison sorts / non-comparison sorts</b>:  Most of the well-known sorting methods are based on the comparison \n          of two elements on less, greater or equal. However, there are also non-comparison-based sorting algorithms.<br> \n          You can find out how this can work in the Counting Sort and Radix Sort sections","<b>Recursive / non-recursive</b>:  A recursive sorting algorithm requires additional memory on the stack. \n          If the recursion is too deep, the dreaded StackOverflowExecption is imminent"]),classifications:m.W.setListwithTitleHtml("Classification of Sorting Algorithm",["Based on Number of Swaps or Inversion This is the number of times the algorithm swaps elements to sort the input. \n        Selection Sort requires the minimum number of swaps","Based on Number of Comparisons This is the number of times the algorithm compares elements to sort the input. \n        Using Big-O notation, the sorting algorithm examples listed above require at least O(nlogn) comparisons in the best \n        case and O(n^2) comparisons in the worst case for most of the outputs","Based on Recursion or Non-Recursion Some sorting algorithms, such as Quick Sort, use recursive techniques to sort the input. \n        Other sorting algorithms, such as Selection Sort or Insertion Sort, use non-recursive techniques. Finally, some sorting \n        algorithm, such as Merge Sort, make use of both recursive as well as non-recursive techniques to sort the input","Based on Stability Sorting algorithms are said to be stable if the algorithm maintains the relative order of elements with \n        equal keys. In other words, two equivalent elements remain in the same order in the sorted output as they were in the input","Insertion sort, Merge Sort, and Bubble Sort are stable","Heap Sort and Quick Sort are not stable","Based on Extra Space Requirement Sorting algorithms are said to be in place if they require a constant O(1) extra \n        space for sorting","Insertion sort and Quick-sort are in place sort as we move the elements about the pivot and do not actually use a \n        separate array which is NOT the case in merge sort where the size of the input must be allocated beforehand to store \n        the output during the sort","Merge Sort is an example of out place sort as it require extra memory space for it\u2019s operations"]),example:m.W.setExampleImage("Complexity and Stability of Sorting Algorithms","assets/ds-image/sorting.jpg ")},p={defination:m.W.setHeader("Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based \n    algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.\n    Initially, the sorted part is empty and the unsorted part is the entire list. <br>\n    The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes \n    a part of the sorted array. This process continues moving unsorted array boundary by one element to the right."),properties:m.W.setListwithTitleHtml("Selection Sort Properties",["This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, \n        the sorted part at the left end and the unsorted part at the right end","Selection Sort requires the minimum number of swaps."]),explainImage:m.W.setExampleImage("Selection Sort Explain Image","assets/ds-image/DSA1.jpg"),flowChart:m.W.setExampleImage("Selection Sort Flowchart","assets/ds-image/DSA1.jpg"),advantage:m.W.setListwithTitleHtml("Selection Sort Advantages",["The main advantage of the selection sort is that it performs well on a small list","It is an in-place sorting algorithm, no additional temporary storage is required beyond \n          what is needed to hold the original list"]),disadvantage:m.W.setListwithTitleHtml("Selection Sort Disadvantages",["The primary disadvantage of the selection sort is its poor efficiency when dealing with a huge list of items","Similar to the bubble sort, the selection sort requires n-squared number of steps for sorting n elements."]),applications:m.W.setListwithTitleHtml("Selection Sort Applications",["a small list is to be sorted","cost of swapping does not matter","checking of all the elements is compulsory","cost of writing to a memory matters like in flash memory (number of writes/swaps is O(n) as compared to O(n2) of bubble sort)"]),workingProcedure:m.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Initialize minimum value(minValue) to location 0.","Traverse the array to find the minimum element in the array.","While traversing if any element smaller than minValue is found then swap both the values.","Then, increment minValue to point to the next element.","Repeat until the array is sorted."])},h={defination:m.W.setHeader("Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards \n    in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part \n    are picked and placed at the correct position in the sorted part"),properties:m.W.setListwithTitleHtml("Insertion Sort Properties",["This algorithm is one of the simplest algorithm with simple implementation","Basically, Insertion sort is efficient for small data values","Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted","Insertion sort is an in-place algorithm, meaning it requires no extra space","Maintains relative order of the input data in case of two equal values (stable)","the bubble sort performs poorly compared to the insertion sort. Due to the high number of swaps, \n      it's expected to generate twice as many write operations and twice as many cache misses","Insertion sort's advantage is that it only scans as many elements as it needs in order to place the k+1st element,\n      while selection sort must scan all remaining elements to find the k+1st element. Experiments show that insertion \n      sort usually performs about half as many comparisons as selection sort"]),explainImage:m.W.setExampleImage("Insertion Sort Explain Image","assets/ds-image/DSA1.jpg"),flowChart:m.W.setExampleImage("Insertion Sort Flowchart","assets/ds-image/DSA1.jpg"),advantage:m.W.setListwithTitleHtml("Insertion Sort Advantages",["The main advantage of the insertion sort is its simplicity. It also exhibits a good performance when dealing with a small list. \n      The insertion sort is an in-place sorting algorithm so the space requirement is minimal"]),disadvantage:m.W.setListwithTitleHtml("Insertion Sort Disadvantages",["The disadvantage of the insertion sort is that it does not perform as well as other, better sorting algorithms. \n     With n-squared steps required for every n element to be sorted, the insertion sort does not deal well with a huge list. \n     Therefore, the insertion sort is particularly useful only when sorting a list of few items"]),applications:m.W.setListwithTitleHtml("Insertion Sort Applications",["One more real-world example of insertion sort is how tailors arrange shirts in a cupboard, they always keep them in sorted \n     order of size and thus insert new shirts at the right position very quickly by moving other shirts forward to keep the right \n     place for a new shirt"]),other:m.W.setListwithTitleHtml("Insertion Sort Performance",["Worst-case performance of insertion sort is O(n\xb2) comparisons and swaps","Best-case performance is O(n) comparisons and O(1) swaps","Average-case performance is O(n\xb2) comparisons and swaps"]),workingProcedure:m.W.setListwithTitleHtml("Follow the below steps to solve the problem",["Iterate from arr[1] to arr[N] over the array","Compare the current element (key) to its predecessor","If the key element is smaller than its predecessor, compare it to the elements before. \n    Move the greater elements one position up to make space for the swapped element"])};let d=(()=>{class e{constructor(){this.insertionSortMetaData=h}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-insertion-sort"]],decls:11,vars:9,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1,"Insertion Sort"),i.qZA(),i._UZ(2,"div",1),i._UZ(3,"div",1),i._UZ(4,"div",1),i._UZ(5,"div",1),i._UZ(6,"div",1),i._UZ(7,"div",1),i._UZ(8,"div",1),i._UZ(9,"div",1),i._UZ(10,"div",1)),2&e&&(i.xp6(2),i.Q6J("innerHtml",t.insertionSortMetaData.defination,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.explainImage,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.properties,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.flowChart,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.workingProcedure,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.applications,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.other,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.advantage,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.insertionSortMetaData.disadvantage,i.oJD))},styles:[""]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-merge-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})(),g=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-quick-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})(),f=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-radix-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})(),w=(()=>{class e{constructor(){this.selectionSortMetaData=p}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-selection-sort"]],decls:10,vars:8,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1,"Selection Sort"),i.qZA(),i._UZ(2,"div",1),i._UZ(3,"div",1),i._UZ(4,"div",1),i._UZ(5,"div",1),i._UZ(6,"div",1),i._UZ(7,"div",1),i._UZ(8,"div",1),i._UZ(9,"div",1)),2&e&&(i.xp6(2),i.Q6J("innerHtml",t.selectionSortMetaData.defination,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.explainImage,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.properties,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.flowChart,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.workingProcedure,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.applications,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.advantage,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.selectionSortMetaData.disadvantage,i.oJD))},styles:[""]}),e})(),v=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-shell-sort"]],decls:2,vars:0,consts:[[1,"text-center"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1," Coming soon"),i.qZA())},styles:[""]}),e})();var b=n(4912);function y(e,t){if(1&e&&(i.TgZ(0,"div",5),i.TgZ(1,"p",6),i._uU(2),i.qZA(),i.qZA()),2&e){const e=i.oxw().$implicit;i.Q6J("routerLink",e.route),i.xp6(2),i.Oqu(e.name)}}function S(e,t){if(1&e&&(i.ynx(0),i.YNc(1,y,3,2,"div",4),i.BQk()),2&e){const e=t.index;i.xp6(1),i.Q6J("ngIf",0!=e)}}const x=[{path:"",component:(()=>{class e{constructor(){this.sortingMetaData=c,this.sortingType=b.wr}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-sorting-algorithm"]],decls:8,vars:5,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"],[1,"mt-md-4","mt-3","d-flex","align-items-center","horizontal-scroll"],[4,"ngFor","ngForOf"],["class","box p-lg-2 p-1 px-lg-3 px-2 tab me-lg-4 me-3",3,"routerLink",4,"ngIf"],[1,"box","p-lg-2","p-1","px-lg-3","px-2","tab","me-lg-4","me-3",3,"routerLink"],[1,"m-0"]],template:function(e,t){1&e&&(i.TgZ(0,"h1",0),i._uU(1,"Sorting Algorithms"),i.qZA(),i._UZ(2,"div",1),i._UZ(3,"div",1),i.TgZ(4,"div",2),i.YNc(5,S,2,1,"ng-container",3),i.qZA(),i._UZ(6,"div",1),i._UZ(7,"div",1)),2&e&&(i.xp6(2),i.Q6J("innerHtml",t.sortingMetaData.defination,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.sortingMetaData.properties,i.oJD),i.xp6(2),i.Q6J("ngForOf",t.sortingType),i.xp6(1),i.Q6J("innerHtml",t.sortingMetaData.classifications,i.oJD),i.xp6(1),i.Q6J("innerHtml",t.sortingMetaData.example,i.oJD))},directives:[o.sg,o.O5,s.rH],styles:[""]}),e})()},{path:"bubble-sort",component:r},{path:"selection-sort",component:w},{path:"insertion-sort",component:d},{path:"merge-sort",component:u},{path:"quick-sort",component:g},{path:"counting-sort",component:l},{path:"radix-sort",component:f},{path:"bucket-sort",component:a},{path:"shell-sort",component:v}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.Bz.forChild(x)],s.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.ez,D]]}),e})()}}]);