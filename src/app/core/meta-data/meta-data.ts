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
        url: "https://www.instagram.com/raj_rathod1313/"
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
        title:"Data Structures and Algorithms | Visualization",
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
    pageNotFound:{
        title:"404 Page Not Found | DSA Visualization",
        description:"Looking for something? We're sorry. The Web address you entered is not a functioning page on our site",
        noIndex:"noindex"
    }
}