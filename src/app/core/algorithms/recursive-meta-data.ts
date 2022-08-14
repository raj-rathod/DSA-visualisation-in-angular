import { Helper } from "src/app/helper/helper"

const recursiveData = {
    defination: "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. Using a recursive algorithm, certain problems can be solved quite easily. Examples of such problems are Towers of Hanoi (TOH), Inorder/Preorder/Postorder Tree Traversals, DFS of Graph, etc. A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems. Many more recursive calls can be generated as and when required. It is essential to know that we should provide a certain case in order to terminate this recursion process. So we can say that every time the function calls itself with a simpler version of the original problem",
    properties:[
        "Performing the same operations multiple times with different inputs",
        "In every step, we try smaller inputs to make the problem smaller",
        "Base condition is needed to stop the recursion otherwise infinite loop will occur"
    ],
    example:"assets/ds-image/recursion.jpg",
    types:[
        "<b>Tail Recursion</b>:A recursive function is tail recursive when a recursive call is the last thing executed by the function. The tail recursive functions considered better than non tail recursive functions as tail-recursion can be optimized by the compiler. Compilers usually execute recursive procedures by using a stack. This stack consists of all the pertinent information, including the parameter values, for each recursive call. When a procedure is called, its information is pushed onto a stack, and when the function terminates the information is popped out of the stack. Thus for the non-tail-recursive functions, the stack depth (maximum amount of stack space used at any time during compilation) is more. The idea used by compilers to optimize tail-recursive functions is simple, since the recursive call is the last statement, there is nothing left to do in the current function, so saving the current function’s stack frame is of no use",
        "<b>Non-tail Recursion</b>:A recursive function is said to be non-tail recursive in case the recursion call isn’t the final thing performed by the function. After reverting back, there’s another thing still there to assess"
    ],
    notes:[
        "There are two types of cases in recursion i.e. recursive case and a base case",
        "The base case is used to terminate the recursive function when the case turns out to be true",
        "Each recursive call makes a new copy of that method in the stack memory",
        "Infinite recursion may lead to running out of stack memory",
        "Examples of Recursive algorithms: Merge Sort, Quick Sort, Tower of Hanoi, Fibonacci Series, Factorial Problem, etc",
        "QuickSort is also tail recursive (Note that MergeSort is not tail recursive, this is also one of the reasons why QuickSort performs better)"
    ],
    memoryRepresntation: "Recursion uses more memory, because the recursive function adds to the stack with each recursive call, and keeps the values there until the call is finished. The recursive function uses LIFO (LAST IN FIRST OUT) Structure just like the stack data structure. A recursive function calls itself, the memory for a called function is allocated on top of memory allocated to the calling function and a different copy of local variables is created for each function call. When the base case is reached, the function returns its value to the function by whom it is called and memory is de-allocated and the process",
    disadvantage:"Note that both recursive and iterative programs have the same problem-solving powers, i.e., every recursive program can be written iteratively and vice versa is also true. The recursive program has greater space requirements than the iterative program as all functions will remain in the stack until the base case is reached. It also has greater time requirements because of function calls and returns overhead.<br>Moreover, due to the smaller length of code, the codes are difficult to understand and hence extra care has to be practiced while writing the code. The computer may run out of memory if the recursive calls are not properly checked",
    advantage:"Recursion provides a clean and simple way to write code. Some problems are inherently recursive like tree traversals, Tower of Hanoi, etc. For such problems, it is preferred to write recursive code. We can write such codes also iteratively with the help of a stack data structure. For example refer Inorder Tree Traversal without Recursion, Iterative Tower of Hanoi."
}

export const recursiveMetaData = {
    defination: Helper.setHeader(recursiveData.defination),
    properties: Helper.setListwithTitleHtml("Properties", recursiveData.properties),
    example: Helper.setExampleImage("Example", recursiveData.example),
    types: Helper.setListwithTitleHtml("Types", recursiveData.types),
    notes: Helper.setListwithTitleHtml("Summary of Recursion", recursiveData.notes),
    memoryRepresntation: Helper.setTitleDescription("How are recursive functions stored in memory", recursiveData.memoryRepresntation),
    advantage: Helper.setTitleDescription("What are the advantages of recursive programming over iterative programming", recursiveData.advantage),
    disadvantage: Helper.setTitleDescription("What are the disadvantages of recursive programming over iterative programming", recursiveData.disadvantage)
}