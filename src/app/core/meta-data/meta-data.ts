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
    }

}