import { Helper } from "src/app/helper/helper"
import { DS } from "src/app/shared/interfaces/data-structure.interface"

const treeData = {
     defination:"A tree is a non-linear type of data structure that organizes data hierarchically. It consists of nodes connected by edges. Each node contains a value and may or may not have a child node",
     example:"assets/ds-image/tree.jpg",
     type: [
          'Binary Tree','Binary Search Tree','AVL Tree','B-Tree'
     ],
     terminologies: [
          '<b>Node</b>: Node is the main component of a tree that stores the data along with the links to other nodes',
          '<b>Edge</b>: Edge( also called branch) connects two nodes of a tree. A node can have more than one edge',
          '<b>Parent</b>: Parent node is a predecessor to any other node. In simple words, it is a node in the tree that has branches to other nodes',
          '<b>Child</b>: The node which is connected below to another node is called a child of that node. All nodes except the root node are child nodes',
          '<b>Root</b>: The first node of the tree which originates it is called the root of the tree. A tree can have only one root',
          '<b>Leaf node(External node)</b>: Nodes with no child are called leaf nodes or external nodes',
          '<b>Internal node(Non-Leaf node)</b>: Nodes with at least one child is called an internal node or non-leaf nodes',
          '<b>Siblings</b>: Nodes having the same parent are called siblings',
          '<b>Cousins</b>: The nodes belonging to the same level with different parent nodes',
          '<b>Degree</b>:Degree of a node is defined as the number of children of that node. The degree of the tree is the highest degree of a node among all the nodes',
          '<b>Path</b>: The nodes in the tree has to be reachable from other nodes through a unique sequence of edges called path. The number of edges in a path is called the length of the path',
          '<b>Level of a node</b>: The level of a node is defined as the number of edges in the unique path between the root and the node',
          '<b>Subtree</b>: A tree formed by a node and all of its descendants in the tree is called a subtree'
     ],
     properties: [
          '<b>Number of edges</b>: An edge can be defined as the connection between two nodes. If a tree has N nodes then it will have (N-1) edges. There is only one path from each node to any other node of the tree',
          '<b>Depth of a node</b>: The depth of a node is defined as the length of the path from the root to that node. Each edge adds 1 unit of length to the path. So, it can also be defined as the number of edges in the path from the root of the tree to the node',
          '<b>Height of a node</b>: The height of a node can be defined as the length of the longest path from the node to a leaf node of the tree',
          '<b>Height of the tree</b>: The height of a tree is the length of the longest path from the root of the tree to a leaf node of the tree',
          '<b>Degree of a Node</b>: The total count of subtrees attached to that node is called the degree of the node. The degree of a leaf node must be 0. The degree of a tree is the maximum degree of a node among all the nodes in the tree',
          'Traversing in a tree is done by depth first search and breadth first search algorithm',
          'It has no loop and no circuit',
          'It has no self-loop',
          'Its hierarchical model'
     ],
     applications: [
          'Trees can be used to store data which are in hierarchical form',
          'Different types of trees are used in various fields like in databases, computer graphics, computer networks',
          'Tree data structure are used by operating system to manage file directory',
          'Databases use tree data structure for indexing',
          'Tree data structure is used in file directory management',
          'DNS uses tree data structure',
          'Trees are used in several games like moves in chess',
          'Decision based algorithms in machine learning uses tree algorithms'
     ],
     advantage: [
          'Trees provide hierarchical representation for the data',
          'Trees are dynamic in nature so the number of nodes are not limited',
          'Insertion and deletion in a tree can be done in moderate time'
     ],
     disadvantage: [
          'Some trees can only be stored using sequential or chained storage'
     ]
};

export const treeMetaData:DS = {
     defination: Helper.setHeader(treeData.defination),
     properties: Helper.setListwithTitleHtml('Properties',treeData.properties),
     terminologies: Helper.setListwithTitleHtml("Terminologies", treeData.terminologies),
     example: Helper.setExampleImage("Example", treeData.example),
     operations: "",
     type: Helper.setListwithTitleHtml("Type of tree", treeData.type),
     applications: Helper.setListwithTitleHtml("Applications", treeData.applications),
     advantage: Helper.setListwithTitleHtml("Advantage", treeData.advantage),
     disadvantage: Helper.setListwithTitleHtml("Disadvantage", treeData.disadvantage)
};
export const treeTypesMetaData = [
     {
          type: treeData.type[0],
          url:'/non-primitive/non-linear/binary-tree'
     },
     {
          type: treeData.type[1],
          url:'/non-primitive/non-linear/binary-search-tree'
     },
     {
          type: treeData.type[2],
          url:'/non-primitive/non-linear/avl-tree'
     },
     {
          type: treeData.type[3],
          url:'/non-primitive/non-linear/b-tree'
     }
];
const binaryTree = {
     defination: "A binary tree is a tree data structure in which each node has at most two children, which are referred to as the left child and the right child.",
     example: "assets/ds-image/binary-tree.jpg",
     properties: [
          "The maximum number of nodes at level ‘l’ of a binary tree is 2l",
          "The Maximum number of nodes in a binary tree of height ‘h’ is 2h – 1",
          "In a Binary Tree with N nodes, minimum possible height or the minimum number of levels is Log2(N+1)",
          "A Binary Tree with L leaves has at least | Log2L |+ 1   levels",
          " In Binary tree where every node has 0 or 2 children, the number of leaf nodes is always one more than nodes with two children",
          "In a non empty binary tree, if n is the total number of nodes and e is the total number of edges, then e = n-1"
     ],
     operations: [],
     type:[
          '<b>Full Binary Tree</b>: A Binary Tree is a full binary tree if every node has 0 or 2 children. The following are the examples of a full binary tree. We can also say a full binary tree is a binary tree in which all nodes except leaf nodes have two children. It is also known as a proper binary tree',
          '<b>Complete Binary Tree</b>: A Binary Tree is a Complete Binary Tree if all the levels are completely filled except possibly the last level and the last level has all keys as left as possible.A complete binary tree is just like a full binary tree, but with two major differences.(I)Every level must be completely filled. (II)All the leaf elements must lean towards the left',
          '<b>Perfect Binary Tree</b>: A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children and all leaf nodes are at the same level',
          '<b>Balanced Binary Tree</b>: A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes. For Example, the AVL tree maintains O(Log n) height by making sure that the difference between the heights of the left and right subtrees is at most 1. Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths is the same and there are no adjacent red nodes. Balanced Binary Search trees are performance-wise good as they provide O(log n) time for search, insert and delete',
          '<b>A degenerate (or pathological) tree</b>: A Tree where every internal node has one child. Such trees are performance-wise same as linked list.A degenerate or pathological tree is the tree having a single child either left or right',
          '<b>Skewed Binary Tree</b>: A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree: left-skewed binary tree and right-skewed binary tree'
     ],
     applications: [
          'Huffman coding tree is an application of binary trees that are used in data compression algorithms',
          'In compilers, Expression Trees are used which are applications of binary trees',
          'Priority Queue is another application of binary tree that is used to search maximum or minimum in O(log N) time complexity',
          'Represent hierarchical data',
          'Used in editing software like Microsoft Excel and spreadsheets',
          'Useful for indexing segmented at the database is useful in storing cache in the system',
          'Syntax trees are used for most famous compilers for programming like GCC, and AOCL to perform arithmetic operations',
          'For implementing priority queues',
          'Used to find elements in less time (binary search tree)',
          'Used to enable fast memory allocation in computers',
          'To perform encoding and decoding operations',
          'DOM in HTML',
          'File explorer',
          'Used as the basic data structure in Microsoft Excel and spreadsheets',
          'Routing Algorithms',
          'Evaluate an expression'
     ],
     advantage:[
          'The searching operation in a binary tree is very fast',
          'The representation of a binary tree is simple and easy to understand',
          'Traversing from a parent node to its child node and vice-versa is efficiently done',
          'Simple to implement',
          'Easy to understand',
          'Reflect structural relationships that are present in the data set',
          'Executions are fast',
          'Store an arbitrary number of data values'

     ],
     disadvantage:[
          'In binary tree traversals, there are many pointers that are null and hence useless',
          'The access operation in a Binary Search Tree (BST) is slower than in an array',
          'A basic option is dependent on the height of the tree',
          'Deletion node not easy',
          'A basic option is based on the height of tree'
     ]
}

export const binaryTreeMetaData:DS = {
     defination: Helper.setHeader(binaryTree.defination),
     properties: Helper.setListwithTitleHtml('Properties',binaryTree.properties),
     example: Helper.setExampleImage('Example',binaryTree.example),
     operations: "",
     advantage: Helper.setListwithTitleHtml('Advantage', binaryTree.advantage),
     disadvantage: Helper.setListwithTitleHtml('Disadvantage', binaryTree.disadvantage),
     applications: Helper.setListwithTitleHtml('Applications', binaryTree.applications),
     type: Helper.setListwithTitleHtml('Types of binary tree', binaryTree.type),
}