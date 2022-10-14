(self.webpackChunkdsa_visualisation=self.webpackChunkdsa_visualisation||[]).push([[838],{3838:(t,e,a)=>{"use strict";a.r(e),a.d(e,{BacktrackingModule:()=>h});var n=a(8583),i=a(2389),o=a(1077);const s={defination:o.W.setHeader("Think about a scenario where you are standing outside a maze, and you need to find the exit. \n    Now, you have a couple of ways you can try to find the exit door, uncertain of the outcome. You may either run into some wrong \n    path, backtrack(move back to the starting point) and try to find a new path, or one in many chances, you may land into the correct \n    path and reach your exit door. But out of multiple scenarios, you have only one path(marked in green) which will lead you \n    to the exit door.\n    </br>\n    For any backtracking problem, the backtracking algorithm tries to go through one of the paths to reach to the possible solution, \n    and if the path doesn't leads them there, then the problem backtracks through the same path and takes another path in search of \n    the solution.\n    </br>\n    To understand this clearly, consider the given example. Suppose you are standing in front of three roads, one of which is having \n    a bag of gold at it's end, but you don't know which one it is. Firstly you will go in Path 1 , if that is not the one, then come \n    out of it, and go into Path 2 , and again if that is not the one, come out of it and go into Path 3 . So, let's say we are standing \n    at 'A' and we divided our problem into three smaller sub-probelms 'B', 'D' and 'F'. And using this sub-problem, we have three \n    possible path to get to our solution -- 'C', 'E', & 'G'."),types:o.W.setListwithTitleHtml("There are three types of problems in backtracking",["Decision Problem \u2013 In this, we search for a feasible solution.","Optimization Problem \u2013 In this, we search for the best solution.","Enumeration Problem \u2013 In this, we find all feasible solutions."]),properties:o.W.setListwithTitleHtml("Backtracking Algorithm Properties",["A backtracking algorithm uses the depth-first search method. When it starts exploring the solutions, a bounding function is \n          applied so that the algorithm can check if the so-far built solution satisfies the constraints. If it does, it continues\n          searching. If it doesn\u2019t, the branch would be eliminated, and the algorithm goes back to the level before.","It uses recursive calling to find a solution set by building a solution step by step, increasing levels with time. \n          In order to find these solutions, a search tree named state-space tree is used. In a state-space tree, each branch \n          is a variable, and each level represents a solution.","Backtracking is used to solve a problem that have multiple solutions."]),example:o.W.setExampleImage("Backtracking Example","assets/ds-image/DSA1.jpg"),applications:o.W.setListwithTitleHtml("Application of Backtracking",["To find all Hamiltonian Paths present in a graph.","To solve the N Queen problem.","Maze solving problem.","The Knight's tour problem.","Binary Strings: generating all binary strings","Generating k \u2013 ary Strings","The Knapsack Problem","Graph Coloring Problem"]),advantage:o.W.setListwithTitleHtml("Advantage of Backtracking",["Backtracking can almost solve any problems, due to its brute-force nature,\n         although we use it to solve problems which have branching involved.","Backtracking is an easy method to implement and contains fewer lines of code."]),disadvantage:o.W.setListwithTitleHtml("Disadvantage of Backtracking",["More optimal algorithms for the given problem may exist.","When the branching factor is high, it is very time-consuming","Large space complexity because we are using recursion so function information is stored on stack."])};var r=a(3018);const l=[{path:"",component:(()=>{class t{constructor(){this.backtrackingMetaData=s}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-backtracking-algorithm"]],decls:9,vars:7,consts:[[1,"text-center"],[1,"mt-md-4","mt-3",3,"innerHtml"]],template:function(t,e){1&t&&(r.TgZ(0,"h1",0),r._uU(1,"Backtracking Algorithm"),r.qZA(),r._UZ(2,"div",1),r._UZ(3,"div",1),r._UZ(4,"div",1),r._UZ(5,"div",1),r._UZ(6,"div",1),r._UZ(7,"div",1),r._UZ(8,"div",1)),2&t&&(r.xp6(2),r.Q6J("innerHtml",e.backtrackingMetaData.defination,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.types,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.properties,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.example,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.applications,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.advantage,r.oJD),r.xp6(1),r.Q6J("innerHtml",e.backtrackingMetaData.disadvantage,r.oJD))},styles:[""]}),t})()}];let c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.Bz.forChild(l)],i.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[n.ez,c]]}),t})()}}]);