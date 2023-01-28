import { Projects, SocialLink } from "src/app/shared/interfaces/meta-data.interface";

export const projects: Projects[] = [
    {
        name: "DSA Visualisation",
        url: "https://raj-rathod.github.io/DSA-visualisation-in-angular/"
    },
    {
        name: "DSA methods npm package",
        url: "https://www.npmjs.com/package/@raj-rathod/dsa-methods"
    },
    {
        name: "Calendar without api",
        url: "https://raj-rathod.github.io/Calendar_without_Third_Party_api/"
    },
    {
        name: "Tic Tac Toe",
        url: "https://raj-rathod.github.io/tic-toc-game/"
    }
];

export const socialLinkes: SocialLink[] = [
    {
        name:"Facebook",
        image:"assets/icons/facebook.svg",
        url: "https://www.facebook.com/raj.n.143/"
    },
    {
        name:"Instagram",
        image:"assets/icons/instagram.svg",
        url: "https://www.instagram.com/dsa_visualization/"
    },
    {
        name: "Linkedin",
        image:"assets/icons/linkedin.svg",
        url: "https://www.linkedin.com/in/rajesh-rathore-0501/"

    },
    {
        name: "Twitter",
        image:"assets/icons/twitter.svg",
        url: "https://twitter.com/Rajesh946055"

    },
    {
        name: "github",
        image: "assets/icons/github.png",
        url: "https://github.com/raj-rathod"

    }
];

export const contact: string[] =[
    "rajeshrathore05011998@gmail.com",
    "9148002717",
];

export const pageMetaData = {
    home:{
        title:"Data Structures and Algorithms | DSA Visualization",
        description:`All the points of data structures and algorithms like as working approach, properties, 
          operations, applications, advantages and disadvantages are well explained and visualize the operations 
          for better understanding`,
        keywords:`Algorithms, Leetcode, Dsa, Data Structures and Algorithms, Data Structures, Dsa Learning Series, Dsa questions, 
          Dsa practice, Placemnet Preparation, DSA Visualization, Dsa problems, Faang interview, Faang preparation, 
          Faang questions, Dsa short notes`
    },
    dataStructure:{
        title:"Data structure | DSA Visualization",
        description:`Complete list of Data Structure, Practice Problems, Array, Matrix, Linked List, Stack, Queue, 
          Trees, Trie, Heap, Graph, Hash Table ,Advanced Data Structures`,
        keywords:`Data Structure, Properties, Data Structure Visualization, Advandage, Array, Matrix, Linked List, 
          Stack, Queue, Trees, Trie, Heap, Graph, Hash Table, Advanced Data Structures`
    },
    algorithms:{
        title:"Algorithms | DSA Visualization",
        description:`Complete list of algorithms, Practice Algorithms and Visualization, Sort, Search, Divide and Conquer,
           Recursive, Dynamic Programming, Greedy, Backtracking, Advanced Algorithms`,
        keywords:`Algorithms, Algorithms Visualization, Sort, Search, Divide and conquer, Recursive, Advanced Algorithms, 
           Backtracking, Greedy, Dynamic Programming, Properties, Time Complexity, Space Complexity, Working Approach, Flowchart`,
    },
    primitiveDataType:{
        title:"Primitive Data Types | DSA Visualization",
        description:`Primitive data types are a set of basic data types from which all other data types are constructed`,
        keywords:`Primitive Data Types, Integer, Float, Double, Boolean, String, Character`
    },
    nonPrimitiveDataType:{
        title:"Non-primitive Data Types | DSA Visualization",
        description:`Non-Primitive data types are user-defined data types and they can be easily created or modified by 
        the users. They can be used to store multiple values and invoke methods to perform certain operations`,
        keywords:`Non-Primitive data types, Array, Object, Class, Stack, Queue, Linked List, Single Linked List, 
        Double Linked List, Circular Linked List, Trees, Trie, Heap, Graph, Hash Table , Advanced Data Structures`
    },
    pageNotFound:{
        title:"404 Page Not Found | DSA Visualization",
        description:"Looking for something? We're sorry. The Web address you entered is not a functioning page on our site",
        noIndex:"noindex"
    },
    array:{
        title: "Array and Matrix Operations | DSA Visualization",
        description: `What is an array and matrix, properties of array and matrix, algorithms of array and matrix operations,
        applications of array and matrix, advantages and disadvantages of the array and matrix data structures`,
        keywords:`Array, Multi-dimensional array, Matrix, Algorithms, Visual, Array Operations, Array Representation, Array Questions`
    },
    stack:{
        title:"Stack Operations and Visualization | DSA Visualization",
        description:`What is the stack, what is the use of the stack, stack operations and visualization, push and 
        pop operations in stack, applications of the stack, properties of the stack, advantages and disadvantages of the stack`,
        keywords:`Stack, Use Of Stack, Stack Operations, Stack Properties, Stack Applications, Push, Pop, Stack Overflow`
    },
    queue:{
        title:"Queue Operations and Visualization | DSA Visualization",
        description:`What is the queue, what is the use of the queue, queue operations and visualizations, enqueue and dequeue 
        operations in the queue, application and properties of the queue, advantages and disadvantages of the queue`,
        keywords:`Queue, Priority Queue, Queue Operations, Queue Properties, Queue Applications, Queue Advantages, 
        Queue Disadvantages, Enqueue and Dequeue Operations`
    },
    linkedList:{
        title:"Linked List Operations and Visualization | DSA Visualization",
        description:`What is the linked list, what is the use of the linked list, what is the single linked list, 
        what is the use of the single linked list, what is the double linked list, what is the use of the double linked list,
        application of the linked list and advantages and disadvantages of the linked list`,
        keywords:`Linked List, Single Linked List, Double Linked List, Circular Linked List, Linked List Operations, 
        Linked List Visualization, Linked List Properties, Linked List Operations, Reverse Linked List`
    },
    tree:{
        title:"Tree Operations and Visualization | DSA Visualization",
        description:`What is the tree in data structure, and what is the tree structure, and what is the application 
        of the tree structure, and what is binary tree , binary search tree, avl tree etc. and what is the properties 
        of tree structure, advantages and disadvantages of the tree structure`,
        keywords: `Tree structure, Binary Tree, Avl Tree, Binary Search Tree, Delete A Node, Insert A Node, 
        Height Of Tree, Level Of Tree, In-order Traversal, Pre-order Traversal, Post-order Traversal, Leaf Node, Root Node`,
    },
    graph:{
        title:" Graph Operations and Visualization | DSA Visualization",
        description:`What is the graph structure, and what is the application of the graph structure, graph operations 
        and visualization, properties of the graph structure, advantages and disadvantages of the graph structure`,
        keywords:`Graph Structure, Graph Operations, Graph Visualization, Graph Properties, Graph Advantages, Graph Disadvantages
        Königsberg Bridge Problem, Shortest Path, Spanning Tree, Minimum Spanning Tree, Single Shortest Path, Dijkstra's Algorithm`
    },
    trie:{
        title:"Trie Structure and Visualization | DSA Visualization",
        description:`What is the trie structure, and what is the application of trie structure, properties of the trie structure,
        advantages and disadvantages of the trie structure`,
        keywords:`Trie Structure, Trie Properties, Trie Applications, Trie Advantages, Trie Disadvantages, Dictionary Search
        Phone Directory Search, Auto Suggestion`,
    },
    hashTable:{
        title:"Hashing and Hash table | Hash Function | DSA Visualization",
        description:`What is hashing and hash function and what is hash table, properties of the hash function and hashing, 
        sufficient hash function, applications of the hash table and hash function, advantages and disadvantages of hashing and hash table`,
        keywords:`Hash Function, Hash Table, Hashing, Encription, Decription, Fastest Search Method`
    },
    sorting:{
        title:'Sorting Algorithms | Sorting Algorithms Type | DSA Visualization',
        description:`What is sorting algorithms, it's different types, properties of sorting algorithms and time complexity`,
        keywords:`Sorting Algorithms, Sorting Algorithms Type, Merge Sort, Quick Sort, Insertion Sort, Selection Sort, Counting Sort
        , Bucket Sort, Radix Sort, Heap Sort, Shell Sort`,
    },
    searching:{
        title: `Search Algorithms | Search Algorithms Type | DSA Visualization`,
        description: `What is search algorithms, it's different types, properties of search algorithms, applications and time complexity`,
        keywords:`Search Algorithms, Searching Algorithms, Linear Search, Binary Search, Jump Search, 
        Interpolation Search, Exponential Search`,
    },
    bruteForce:{
        title:`Brute Force Algorithms | Brute Force Approach | DSA Visualization`,
        description:`What is the brute force, properties of brute force algorithms and advantage and disadvantage of brute force algorithms`,
        keywords:`Brute Force Algorithms, Brute Force Approach, Simple Problems`,
    },
    backtracking:{
        title: `Backtracking Algorithm | Backtracking Algorithm Properties | Application of Backtracking | DSA Visualization`,
        description:`What is the backtracking algorithm, properties of backtracking algorithms, applications of backtracking algorithms
        and types of backtracking algorithms problems`,
        keywords:`Backtracking, Backtracking Algorithms, Applications of Backtracking, Properties of Backtracking, 
        Backtracking Algorithms Flowchart`,
    },
    divideAndConquer:{
        title:`Divide and Conquer Algorithms | Properties of  Divide and Conquer Algorithms | DSA Visualization`,
        description:`What is the divide and conquer algorithm, properties of divide and conquer algorithms, 
        applications of the divide and conquer algorithm and examples of the algorithm`,
        keywords:`Divide And Conquer Algorithms, Examples of Divide and Conquer, Properties of Divide and Conquer`
    },
    dynamicPrograming:{
        title: `Dynamic Programming | Dynamic Programming Algorithms | Dynamic Programming Approach | DSA Visualization`,
        description: `What is dynamic programming, properties and applications of dynamic programming, advantage and disadvantage of 
        dynamic programming and examples of dynamic programming`,
        keywords: `Dynamic Programming, Properties and Applications of Dynamic Programming, Examples of Dynamic Programming`,
    },
    greedy:{
        title:`Greedy Algorithms | Properties of Greedy Algorithms | Types Greedy Algorithms | DSA Visualization`,
        description:`What is greedy algorithms, properties and applications of greedy algorithms, advantage and disadvantage of
        greedy algorithms and examples of greedy algorithms`,
        keywords:`Greedy algorithms, Properties and Applications of Greedy Algorithms, Example of Greedy Algorithms,`
    },
    recursive: {
        title:`Recursive algorithms | Recursion | Use Of Recursion | DSA Visualization `,
        description:`What is the recursion, properties of the recursion, types of the recursion, What is the role 
        of the stack in recursion, what is the call stack`,
        keywords:`Recursion, Recursion Algorithms, Call Stack, Recursion Types, Application of the recursion`
    },
    selectionSort: {
        title: `Selection Sort | Selection Sort Algorithms | Selection Sort Flowcahrt | DSA Visualization`,
        description:`What is the selection sort, flowchat and algorithm of selection sort, working procedure and visualization 
        of selection sort, properties and applications of selection sort and time complexity`,
        keywords:`Selection Sort, Selection Sort Algorithms, Selection Sort Flowchart, Selection Sort time complexity, 
        Selection Sort Advantage and Disadvantage`
    },
    insertionSort: {
        title: `Insertion Sort | Insertion Sort Algorithms | Insertion Sort Flowcahrt | DSA Visualization`,
        description:`What is the Insertion sort, flowchat and algorithm of Insertion sort, working procedure and visualization 
        of Insertion sort, properties and applications of Insertion sort and time complexity`,
        keywords:`Insertion Sort, Insertion Sort Algorithms, Insertion Sort Flowchart, Insertion Sort time complexity, 
        Insertion Sort Advantage and Disadvantage`
    },
    mergeSort: {
        title: `Merge Sort | Merge Sort Algorithms | Merge Sort Flowcahrt | DSA Visualization`,
        description:`What is the Merge sort, flowchat and algorithm of Merge sort, working procedure and visualization 
        of Merge sort, properties and applications of Merge sort and time complexity`,
        keywords:`Merge Sort, Merge Sort Algorithms, Merge Sort Flowchart, Merge Sort time complexity, 
        Merge Sort Advantage and Disadvantage`
    },
    quickSort: {
        title: `Quick Sort | Quick Sort Algorithms | Quick Sort Flowcahrt | DSA Visualization`,
        description:`What is the Quick sort, flowchat and algorithm of Quick sort, working procedure and visualization 
        of Quick sort, properties and applications of Quick sort and time complexity`,
        keywords:`Quick Sort, Quick Sort Algorithms, Quick Sort Flowchart, Quick Sort time complexity, 
        Quick Sort Advantage and Disadvantage`
    },
    countingSort: {
        title: `Counting Sort | Counting Sort Algorithms | Counting Sort Flowcahrt | DSA Visualization`,
        description:`What is the Counting sort, flowchat and algorithm of Counting sort, working procedure and visualization 
        of Counting sort, properties and applications of Counting sort and time complexity`,
        keywords:`Counting Sort, Counting Sort Algorithms, Counting Sort Flowchart, Counting Sort time complexity, 
        Counting Sort Advantage and Disadvantage`
    },
    radixSort: {
        title: `Radix Sort | Radix Sort Algorithms | Radix Sort Flowcahrt | DSA Visualization`,
        description:`What is the Radix sort, flowchat and algorithm of Radix sort, working procedure and visualization 
        of Radix sort, properties and applications of Radix sort and time complexity`,
        keywords:`Radix Sort, Radix Sort Algorithms, Radix Sort Flowchart, Radix Sort time complexity, 
        Radix Sort Advantage and Disadvantage`
    },
    bucketSort: {
        title: `Bucket Sort | Bucket Sort Algorithms | Bucket Sort Flowcahrt | DSA Visualization`,
        description:`What is the Bucket sort, flowchat and algorithm of Bucket sort, working procedure and visualization 
        of Bucket sort, properties and applications of Bucket sort and time complexity`,
        keywords:`Bucket Sort, Bucket Sort Algorithms, Bucket Sort Flowchart, Bucket Sort time complexity, 
        Bucket Sort Advantage and Disadvantage`
    },
    shellSort: {
        title: `Shell Sort | Shell Sort Algorithms | Shell Sort Flowcahrt | DSA Visualization`,
        description:`What is the Shell sort, flowchat and algorithm of Shell sort, working procedure and visualization 
        of Shell sort, properties and applications of Shell sort and time complexity`,
        keywords:`Shell Sort, Shell Sort Algorithms, Shell Sort Flowchart, Shell Sort time complexity, 
        Shell Sort Advantage and Disadvantage`
    },
    linearSearch: {
        title: `Linear Search | Linear Search Algorithms | Linear Search Flowcahrt | DSA Visualization`,
        description:`What is the Linear Search, flowchat and algorithm of Linear Search, working procedure and visualization 
        of Linear Search, properties and applications of Linear Search and time complexity`,
        keywords:`Linear Search, Linear Search Algorithms, Linear Search Flowchart, Linear Search time complexity, 
        Linear Search Advantage and Disadvantage`
    },
    binarySearch: {
        title: `Binary Search | Binary Search Algorithms | Binary Search Flowcahrt | DSA Visualization`,
        description:`What is the Binary Search, flowchat and algorithm of Binary Search, working procedure and visualization 
        of Binary Search, properties and applications of Binary Search and time complexity`,
        keywords:`Binary Search, Binary Search Algorithms, Binary Search Flowchart, Binary Search time complexity, 
        Binary Search Advantage and Disadvantage`
    },
    jumpSearch: {
        title: `Jump Search | Jump Search Algorithms | Jump Search Flowcahrt | DSA Visualization`,
        description:`What is the Jump Search, flowchat and algorithm of Jump Search, working procedure and visualization 
        of Jump Search, properties and applications of Jump Search and time complexity`,
        keywords:`Jump Search, Jump Search Algorithms, Jump Search Flowchart, Jump Search time complexity, 
        Jump Search Advantage and Disadvantage`
    },
    interpolationSearch: {
        title: `Interpolation Search | Interpolation Search Algorithms | Interpolation Search Flowcahrt | DSA Visualization`,
        description:`What is the Interpolation Search, flowchat and algorithm of Interpolation Search, working procedure and visualization 
        of Interpolation Search, properties and applications of Interpolation Search and time complexity`,
        keywords:`Interpolation Search, Interpolation Search Algorithms, Interpolation Search Flowchart, Interpolation Search time complexity, 
        Interpolation Search Advantage and Disadvantage`
    },
    exponentialSearch: {
        title: `Exponential Search | Exponential Search Algorithms | Exponential Search Flowcahrt | DSA Visualization`,
        description:`What is the Exponential Search, flowchat and algorithm of Exponential Search, working procedure and visualization 
        of Exponential Search, properties and applications of Exponential Search and time complexity`,
        keywords:`Exponential Search, Exponential Search Algorithms, Exponential Search Flowchart, Exponential Search time complexity, 
        Exponential Search Advantage and Disadvantage`
    },

}