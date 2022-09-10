(self.webpackChunkdsa_visualisation=self.webpackChunkdsa_visualisation||[]).push([[625],{625:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DivideAndConquerModule:()=>b});var n=i(8583),o=i(2389),s=i(3018);let r=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-closest-pair-of-points"]],decls:2,vars:0,template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"closest-pair-of-points works!"),s.qZA())},styles:[""]}),e})();var a=i(1077);const l={defination:a.W.setHeader("A divide and conquer algorithm is a strategy of solving a large problem by breaking the problem into smaller sub-problems, solving the sub-problems, and combining them to get the desired output."),terminologies:a.W.setListwithTitleHtml("Terminologies",["<b>Divide</b>:  This involves dividing the problem into smaller sub-problems","<b>Conquer</b>:  Solve sub-problems by calling recursively until solved","<b>Combine</b>:  Combine the sub-problems to get the final solution of the whole problem"]),algorithms:a.W.setListwithTitleHtml("Some Standard Algorithms",["<b>Quicksort</b>:  is a sorting algorithm. The algorithm picks a pivot element and rearranges the array elements so that all elements smaller than the picked pivot element move to the left side of the pivot, and all greater elements move to the right side. Finally, the algorithm recursively sorts the subarrays on the left and right of the pivot element","<b>Merge Sort</b>:  is also a sorting algorithm. The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halves","<b>Closest Pair of Points</b>:  The problem is to find the closest pair of points in a set of points in the x-y plane. The problem can be solved in O(n^2) time by calculating the distances of every pair of points and comparing the distances to find the minimum. The Divide and Conquer algorithm solves the problem in O(N log N) time","<b>Strassen\u2019s Algorithm</b>:  is an efficient algorithm to multiply two matrices. A simple method to multiply two matrices needs 3 nested loops and is O(n^3). Strassen\u2019s algorithm multiplies two matrices in O(n^2.8974) time","<b>Karatsuba algorithm</b>:  is a fast multiplication algorithm that uses a divide and conquer approach to multiply two numbers"]),timeComplexity:a.W.setTitleDescription("Time Complexity of Divide and Conquer Algorithm","T(n) = aT(n/b) + f(n),<br><br> where, <br> &nbsp &nbsp  n = size of input<br>&nbsp &nbsp  a = number of subproblems in the recursion<br>&nbsp &nbspn/b = size of each subproblem. All subproblems are assumed to have the same size.<br>&nbsp &nbspf(n) = cost of the work done outside the recursive call, which includes the cost of dividing the problem and cost of merging the solutions<br>"),comparison:a.W.setTitleDescription("Divide and Conquer (D & C) vs Dynamic Programming (DP)","Both paradigms (D & C and DP) divide the given problem into subproblems and solve subproblems. How do choose one of them for a given problem? Divide and Conquer should be used when the same subproblems are not evaluated many times. Otherwise Dynamic Programming or Memoization should be used. For example, Quicksort is a Divide and Conquer algorithm, we never evaluate the same subproblems again. On the other hand, for calculating the nth Fibonacci number, Dynamic Programming should be preferred"),advantage:a.W.setListwithTitleHtml("Advantages",["The difficult problem can be solved easily","It divides the entire problem into subproblems thus it can be solved parallelly ensuring multiprocessing","Efficiently uses cache memory without occupying much space","Reduces time complexity of the problem"]),disadvantage:a.W.setListwithTitleHtml("Disadvantages",["It involves recursion which is sometimes slow","Efficiency depends on the implementation of logic","It may crash the system if the recursion is performed rigorously"])};var m=i(4912);function d(e,t){if(1&e&&(s.ynx(0),s.TgZ(1,"div",4),s.TgZ(2,"p",5),s._uU(3),s.qZA(),s.qZA(),s.BQk()),2&e){const e=t.$implicit;s.xp6(1),s.Q6J("routerLink",e.route),s.xp6(2),s.Oqu(e.name)}}let p=(()=>{class e{constructor(){this.divideAndConquerMetaData=l,this.divideAndConquerLinks=m.FB}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-divide-and-conquer-algorithm"]],decls:11,vars:8,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"],[1,"mt-md-4","mt-3","d-flex","align-items-center","horizontal-scroll"],[4,"ngFor","ngForOf"],[1,"box","p-lg-2","p-1","px-lg-3","px-2","tab","me-lg-4","me-3",3,"routerLink"],[1,"m-0"]],template:function(e,t){1&e&&(s.TgZ(0,"h1",0),s._uU(1,"Divide And Conquer algorithms"),s.qZA(),s._UZ(2,"div",1),s._UZ(3,"div",1),s._UZ(4,"div",1),s._UZ(5,"div",1),s._UZ(6,"div",1),s._UZ(7,"div",1),s._UZ(8,"div",1),s.TgZ(9,"div",2),s.YNc(10,d,4,2,"ng-container",3),s.qZA()),2&e&&(s.xp6(2),s.Q6J("innerHtml",t.divideAndConquerMetaData.defination,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.terminologies,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.algorithms,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.timeComplexity,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.comparison,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.advantage,s.oJD),s.xp6(1),s.Q6J("innerHtml",t.divideAndConquerMetaData.disadvantage,s.oJD),s.xp6(2),s.Q6J("ngForOf",t.divideAndConquerLinks))},directives:[n.sg,o.rH],styles:[""]}),e})(),c=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-karatsuba"]],decls:2,vars:0,template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"karatsuba works!"),s.qZA())},styles:[""]}),e})();const u=[{path:"",component:p},{path:"closest-pair-of-points",component:r},{path:"strassen",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-strassen"]],decls:2,vars:0,template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"strassen works!"),s.qZA())},styles:[""]}),e})()},{path:"karatsuba",component:c}];let h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[o.Bz.forChild(u)],o.Bz]}),e})(),b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[n.ez,h]]}),e})()}}]);