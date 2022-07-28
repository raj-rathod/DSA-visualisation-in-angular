import { Helper } from "src/app/helper/helper"
import { DS } from "src/app/shared/interfaces/data-structure.interface"

const treeData = {
     defination:"A tree is a non-linear type of data structure that organizes data hierarchically. It consists of nodes connected by edges. Each node contains a value and may or may not have a child node",
     example:"assets/ds-image/tree.jpg",
     type: [
          'Binary tree','Binary search tree','AVL Tree','B-tree'
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
}

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
}