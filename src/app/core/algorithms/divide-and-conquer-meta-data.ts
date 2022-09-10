import { Helper } from "src/app/helper/helper"

const divideAndConquerData = {
    defination: "A divide and conquer algorithm is a strategy of solving a large problem by breaking the problem into smaller sub-problems, solving the sub-problems, and combining them to get the desired output.",
    terminologies:[
        "<b>Divide</b>:  This involves dividing the problem into smaller sub-problems",
        "<b>Conquer</b>:  Solve sub-problems by calling recursively until solved",
        "<b>Combine</b>:  Combine the sub-problems to get the final solution of the whole problem",
    ],
    algorithms: [
       "<b>Quicksort</b>:  is a sorting algorithm. The algorithm picks a pivot element and rearranges the array elements so that all elements smaller than the picked pivot element move to the left side of the pivot, and all greater elements move to the right side. Finally, the algorithm recursively sorts the subarrays on the left and right of the pivot element", 
       "<b>Merge Sort</b>:  is also a sorting algorithm. The algorithm divides the array into two halves, recursively sorts them, and finally merges the two sorted halves", 
       "<b>Closest Pair of Points</b>:  The problem is to find the closest pair of points in a set of points in the x-y plane. The problem can be solved in O(n^2) time by calculating the distances of every pair of points and comparing the distances to find the minimum. The Divide and Conquer algorithm solves the problem in O(N log N) time", 
       "<b>Strassen’s Algorithm</b>:  is an efficient algorithm to multiply two matrices. A simple method to multiply two matrices needs 3 nested loops and is O(n^3). Strassen’s algorithm multiplies two matrices in O(n^2.8974) time", 
       "<b>Karatsuba algorithm</b>:  is a fast multiplication algorithm that uses a divide and conquer approach to multiply two numbers", 
    ],
    comparison:"Both paradigms (D & C and DP) divide the given problem into subproblems and solve subproblems. How do choose one of them for a given problem? Divide and Conquer should be used when the same subproblems are not evaluated many times. Otherwise Dynamic Programming or Memoization should be used. For example, Quicksort is a Divide and Conquer algorithm, we never evaluate the same subproblems again. On the other hand, for calculating the nth Fibonacci number, Dynamic Programming should be preferred",
    timeComplexity:"T(n) = aT(n/b) + f(n),<br><br> where, <br> &nbsp &nbsp  n = size of input<br>&nbsp &nbsp  a = number of subproblems in the recursion<br>&nbsp &nbspn/b = size of each subproblem. All subproblems are assumed to have the same size.<br>&nbsp &nbspf(n) = cost of the work done outside the recursive call, which includes the cost of dividing the problem and cost of merging the solutions<br>",
    advantage:[
        "The difficult problem can be solved easily",
        "It divides the entire problem into subproblems thus it can be solved parallelly ensuring multiprocessing",
        "Efficiently uses cache memory without occupying much space",
        "Reduces time complexity of the problem"
    ],
    disadvantage:[
        "It involves recursion which is sometimes slow",
        "Efficiency depends on the implementation of logic",
        "It may crash the system if the recursion is performed rigorously"
    ]
}

export const divideAndConquerMetaData = {
    defination: Helper.setHeader(divideAndConquerData.defination),
    terminologies: Helper.setListwithTitleHtml("Terminologies", divideAndConquerData.terminologies),
    algorithms: Helper.setListwithTitleHtml("Some Standard Algorithms", divideAndConquerData.algorithms),
    timeComplexity: Helper.setTitleDescription("Time Complexity of Divide and Conquer Algorithm", divideAndConquerData.timeComplexity),
    comparison: Helper.setTitleDescription("Divide and Conquer (D & C) vs Dynamic Programming (DP)", divideAndConquerData.comparison),
    advantage: Helper.setListwithTitleHtml("Advantages", divideAndConquerData.advantage),
    disadvantage: Helper.setListwithTitleHtml("Disadvantages", divideAndConquerData.disadvantage)

}