import { Helper } from "src/app/helper/helper"
const algorithmsData = {
    defination:"An algorithm is a procedure used for solving a problem or performing a computation. Algorithms act as an exact list of instructions that conduct specified actions step by step in either hardware- or software-based routines",
    characteristics:[
        "<b>Clear and Unambiguous</b>:  The algorithm should be clear and unambiguous. Each of its steps should be clear in all aspects and must lead to only one meaning",
        "<b>Well-Defined Inputs</b>:  If an algorithm says to take inputs, it should be well-defined inputs",
        "<b>Well-Defined Outputs</b>: The algorithm must clearly define what output will be yielded and it should be well-defined as well",
        "<b>Finite-ness</b>: The algorithm must be finite, i.e. it should terminate after a finite time",
        "<b>Feasible</b>:  The algorithm must be simple, generic, and practical, such that it can be executed with the available resources. It must not contain some future technology or anything",
        "<b>Language Independent</b>:  The Algorithm designed must be language-independent, i.e. it must be just plain instructions that can be implemented in any language, and yet the output will be the same, as expected",
    ],
    properties: [
        "It should terminate after a finite time",
        "It should produce at least one output",
        "It should take zero or more input",
        "It should be deterministic means giving the same output for the same input case",
        "Every step in the algorithm must be effective i.e. every step should do some work"
    ],
    types:[
        "<b>Brute Force Algorithm</b>: It is the simplest approach for a problem. A brute force algorithm is the first approach that comes to finding when we see a problem",
        "<b>Recursive Algorithm</b>:  A recursive algorithm is based on recursion. In this case, a problem is broken into several sub-parts and called the same function again and again",
        "<b>Sorting Algorithm</b>:  Sorting is arranging a group of data in a particular manner according to the requirement. The algorithms which help in performing this function are called sorting algorithms. Generally sorting algorithms are used to sort groups of data in an increasing or decreasing manner",
        "<b>Searching Algorithm</b>:  Searching algorithms are the ones that are used for searching elements or groups of elements from a particular data structure. They can be of different types based on their approach or the data structure in which the element should be found",
        "<b>Hashing Algorithm</b>: Hashing algorithms work similarly to the searching algorithm. But they contain an index with a key ID. In hashing, a key is assigned to specific data",
        "<b>Divide and Conquer Algorithm</b>: This algorithm breaks a problem into sub-problems, solves a single sub-problem and merges the solutions together to get the final solution. It consists of the following three steps:<br>Divide<br>Solve<br>Combine",
        "<b>Dynamic Programming Algorithm</b>:  This algorithm uses the concept of using the already found solution to avoid repetitive calculation of the same part of the problem. It divides the problem into smaller overlapping subproblems and solves them",
        "<b>Greedy Algorithm</b>: In this type of algorithm the solution is built part by part. The solution of the next part is built based on the immediate benefit of the next part. The one solution giving the most benefit will be chosen as the solution for the next part",
        "<b>Backtracking Algorithm</b>: The backtracking algorithm basically builds the solution by searching among all possible solutions. Using this algorithm, we keep on building the solution following criteria. Whenever a solution fails we trace back to the failure point and build on the next solution and continue this process till we find the solution or all possible solutions are looked after",
        "<b>Randomized Algorithm</b>: In the randomized algorithm we use a random number so it gives immediate benefit. The random number helps in deciding the expected outcome",
    ],
    advantages: [
        "It is easy to understand",
        "An algorithm is a step-wise representation of a solution to a given problem",
        "In Algorithm the problem is broken down into smaller pieces or steps hence, it is easier for the programmer to convert it into an actual program"
    ],
    disadvantages: [
        "Writing an algorithm takes a long time so it is time-consuming",
        "Understanding complex logic through algorithms can be very difficult",
        "Branching and Looping statements are difficult to show in Algorithms"
    ],
    others:[
        "The problem that is to be solved by this algorithm i.e. clear problem definition",
        "The constraints of the problem must be considered while solving the problem",
        "The input to be taken to solve the problem",
        "The output to be expected when the problem is solved",
        "The solution to this problem, is within the given constraints"
    ]
}

export const algorithmMetaData = {
    defination: Helper.setHeader(algorithmsData.defination),
    characteristics: Helper.setListwithTitleHtml("What are the Characteristics of an Algorithm", algorithmsData.characteristics),
    properties: Helper.setListwithTitleHtml("Properties of Algorithm", algorithmsData.properties),
    types: Helper.setListwithTitleHtml("Types of Algorithm", algorithmsData.types),
    others: Helper.setListwithTitleHtml("How to Design an Algorithm", algorithmsData.others),
    advantages: Helper.setListwithTitleHtml("Advantages", algorithmsData.advantages),
    disadvantages: Helper.setListwithTitleHtml("Disadvantages", algorithmsData.disadvantages),
}