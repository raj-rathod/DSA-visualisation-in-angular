import { Helper } from "src/app/helper/helper"

const backtracking = {
    defination: `Think about a scenario where you are standing outside a maze, and you need to find the exit. 
    Now, you have a couple of ways you can try to find the exit door, uncertain of the outcome. You may either run into some wrong 
    path, backtrack(move back to the starting point) and try to find a new path, or one in many chances, you may land into the correct 
    path and reach your exit door. But out of multiple scenarios, you have only one path(marked in green) which will lead you 
    to the exit door.
    </br>
    For any backtracking problem, the backtracking algorithm tries to go through one of the paths to reach to the possible solution, 
    and if the path doesn't leads them there, then the problem backtracks through the same path and takes another path in search of 
    the solution.
    </br>
    To understand this clearly, consider the given example. Suppose you are standing in front of three roads, one of which is having 
    a bag of gold at it's end, but you don't know which one it is. Firstly you will go in Path 1 , if that is not the one, then come 
    out of it, and go into Path 2 , and again if that is not the one, come out of it and go into Path 3 . So, let's say we are standing 
    at 'A' and we divided our problem into three smaller sub-probelms 'B', 'D' and 'F'. And using this sub-problem, we have three 
    possible path to get to our solution -- 'C', 'E', & 'G'.`,

    example:'assets/ds-image/backtracking.jpg',

    properties:[
        `A backtracking algorithm uses the depth-first search method. When it starts exploring the solutions, a bounding function is 
          applied so that the algorithm can check if the so-far built solution satisfies the constraints. If it does, it continues
          searching. If it doesn’t, the branch would be eliminated, and the algorithm goes back to the level before.`,
        `It uses recursive calling to find a solution set by building a solution step by step, increasing levels with time. 
          In order to find these solutions, a search tree named state-space tree is used. In a state-space tree, each branch 
          is a variable, and each level represents a solution.`,
        `Backtracking is used to solve a problem that have multiple solutions.`
    ],
    types:[
       `Decision Problem – In this, we search for a feasible solution.`,
       `Optimization Problem – In this, we search for the best solution.`,
       `Enumeration Problem – In this, we find all feasible solutions.`
    ],
    advantage:[
        `Backtracking can almost solve any problems, due to its brute-force nature,
         although we use it to solve problems which have branching involved.`,
         `Backtracking is an easy method to implement and contains fewer lines of code.`
    ],
    disadvantage: [
        `More optimal algorithms for the given problem may exist.`,
        `When the branching factor is high, it is very time-consuming`,
        `Large space complexity because we are using recursion so function information is stored on stack.`
    ],
    applications:[
        `To find all Hamiltonian Paths present in a graph.`,
        `To solve the N Queen problem.`,
        `Maze solving problem.`,
        `The Knight's tour problem.`,
        `Binary Strings: generating all binary strings`,
        `Generating k – ary Strings`,
        `The Knapsack Problem`,
        `Graph Coloring Problem`
    ]
}

export const backtrackingMetaData = {
    defination: Helper.setHeader(backtracking.defination),
    types: Helper.setListwithTitleHtml('There are three types of problems in backtracking',backtracking.types),
    properties: Helper.setListwithTitleHtml('Backtracking Algorithm Properties',backtracking.properties),
    example: Helper.setExampleImage('Backtracking Example',backtracking.example),
    applications: Helper.setListwithTitleHtml('Application of Backtracking',backtracking.applications),
    advantage: Helper.setListwithTitleHtml('Advantage of Backtracking',backtracking.advantage),
    disadvantage: Helper.setListwithTitleHtml('Disadvantage of Backtracking',backtracking.disadvantage)

}