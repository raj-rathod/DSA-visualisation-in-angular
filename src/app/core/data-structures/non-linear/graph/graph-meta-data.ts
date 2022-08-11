import { Helper } from 'src/app/helper/helper';
import { DS } from 'src/app/shared/interfaces/data-structure.interface';

const graph = {
    defination: "A graph is a non-linear kind of data structure made up of nodes or vertices and edges. The edges connect any two nodes in the graph, and the nodes are also known as vertices",
    example:'assets/ds-image/graph.jpg',
    type:[
        "<b>Finite Graph</b>: The graph G=(V, E) is called a finite graph if the number of vertices and edges in the graph is limited in number",
        "<b>Infinite Graph</b>: The graph G=(V, E) is called a finite graph if the number of vertices and edges in the graph is interminable",
        "<b>Trivial Graph</b>:A graph G= (V, E) is trivial if it contains only a single vertex and no edges",
        "<b>Simple Graph</b>:If each pair of nodes or vertices in a graph G=(V, E) has only one edge, it is a simple graph. As a result, there is just one edge linking two vertices, depicting one-to-one interactions between two elements",
        "<b>Multi Graph</b>:If there are numerous edges between a pair of vertices in a graph G= (V, E), the graph is referred to as a multigraph. There are no self-loops in a Multigraph",
        "<b>Null Graph</b>:It's a reworked version of a trivial graph. If several vertices but no edges connect them, a graph G= (V, E) is a null graph",
        "<b>Complete Graph</b>: If a graph G= (V, E) is also a simple graph, it is complete. Using the edges, with n number of vertices must be connected. It's also known as a full graph because each vertex's degree must be n-1",
        "<b>Pseudo Graph</b>: If a graph G= (V, E) contains a self-loop besides other edges, it is a pseudograph",
        "<b>Regular Graph</b>:If a graph G= (V, E) is a simple graph with the same degree at each vertex, it is a regular graph. As a result, every whole graph is a regular graph",
        "<b>Weighted Graph</b>: A graph G= (V, E) is called a labeled or weighted graph because each edge has a value or weight representing the cost of traversing that edge",
        "<b>Directed Graph</b>: A directed graph also referred to as a digraph, is a set of nodes connected by edges, each with a direction",
        "<b>Undirected Graph</b>:An undirected graph comprises a set of nodes and links connecting them. The order of the two connected vertices is irrelevant and has no direction. You can form an undirected graph with a finite number of vertices and edges",
        "<b>Connected Graph</b>:If there is a path between one vertex of a graph data structure and any other vertex, the graph is connected",
        "<b>Disconnected Graph</b>: When there is no edge linking the vertices, you refer to the null graph as a disconnected graph",
        "<b>Cyclic Graph</b>:If a graph contains at least one graph cycle, it is considered to be cyclic",
        "<b>Acyclic Graph</b>:When there are no cycles in a graph, it is called an acyclic graph",
        "<b>Directed Acyclic Graph</b>:It's also known as a directed acyclic graph (DAG), and it's a graph with directed edges but no cycle. It represents the edges using an ordered pair of vertices since it directs the vertices and stores some data",
        "<b>Subgraph</b>:The vertices and edges of a graph that are subsets of another graph are known as a subgraph",
    ],
    terminologies: [
        "An edge is one of the two primary units used to form graphs. Each edge has two ends, which are vertices to which it is attached",
        "If two vertices are endpoints of the same edge, they are adjacent",
        "A vertex's outgoing edges are directed edges that point to the origin",
        "A vertex's incoming edges are directed edges that point to the vertex's destination",
        "The total number of edges occurring to a vertex in a graph is its degree",
        "The out-degree of a vertex in a directed graph is the total number of outgoing edges, whereas the in-degree is the total number of incoming edges",
        "A vertex with an in-degree of zero is referred to as a source vertex, while one with an out-degree of zero is known as sink vertex",
        "An isolated vertex is a zero-degree vertex that is not an edge's endpoint",
        "A path is a set of alternating vertices and edges, with each vertex connected by an edge",
        "The path that starts and finishes at the same vertex is known as a cycle",
        "A path with unique vertices is called a simple path",
        "For each pair of vertices x, y, a graph is strongly connected if it contains a directed path from x to y and a directed path from y to x",
        "A directed graph is weakly connected if all of its directed edges are replaced with undirected edges, resulting in a connected graph. A weakly linked graph's vertices have at least one out-degree or in-degree",
        "A tree is a connected forest. The primary form of the tree is called a rooted tree, which is a free tree",
        "A spanning subgraph that is also a tree is known as a spanning tree",
        "A connected component is the unconnected graph's most connected subgraph",
        "A bridge, which is an edge of removal, would sever the graph",
        "Forest is a graph without a cycle",  
    ],
    operations:[
        'Creating graphs',
        'Insert vertex',
        'Delete vertex',
        'Insert edge',
        'Delete edge'
    ],
    properties:[
        "<b>Adjacency Matrix</b>: The adjacency matrix of a simple labeled graph, also known as the connection matrix, is a matrix with rows and columns labeled by graph vertices and a 1 or 0 in position depending on whether they are adjacent or not",
        "<b>Adjacency List</b>: A finite graph is represented by an adjacency list, which is a collection of unordered lists. Each unordered list describes the set of neighbors of a particular vertex in the graph within an adjacency list"
    ],
    applications:[
        "Graphs are used to represent flow of control in computers",
        "Graphs are used in social networking sites where users act as nodes and connection between them acts as edges",
        "In an operating system, graphs are used as resource allocation graphs",
        "Graphs are used in Google maps to find the shortest route",
        "Graphs are also used in airlines system for effective route optimization",
        "In-state transition diagrams, the graph is used to represent their states and their transition",
        "In transportation, graphs are used to find the shortest path",
        "In circuits, graphs can be used to represent circuit points as nodes and wires as edges",
        "Graphs are used in solving puzzles with only one solution, such as mazes",
        "Graphs are used in computer networks for Peer to peer (P2P) applications",
        "Graphs basically in the form of DAG(Directed acyclic graph) are used as alternative to blockchain for cryptocurrency. For example crypto like  IOTA, Nano are mainly based on DAG"
    ],
    advantages:[
      "By using graphs we can easily find the shortest path, neighbors of the nodes, and many more",
      "Graphs are used to implement algorithms like DFS and BFS",
      "It is used to find minimum spanning tree which has many practical applications",
      "It helps in organizing data",
      "Because of its non-linear structure, helps in understanding complex problems and their visualization"
    ],
    disadvantages:[
        "Graphs use lots of pointers which can be complex to handle",
        "It can have large memory complexity",
        "If the graph is represented with an adjacency matrix then it does not allow parallel edges and multiplication of the graph is also difficult"
    ]
}

export const graphMetaData: DS = {
    defination: Helper.setHeader(graph.defination),
    properties: Helper.setListwithTitleHtml('Properties', graph.properties),
    example: Helper.setExampleImage("Example", graph.example),
    operations: Helper.setListwithTitleHtml('Operations', graph.operations),
    advantage: Helper.setListwithTitleHtml("Advantages", graph.advantages),
    disadvantage: Helper.setListwithTitleHtml("Disadvantages", graph.disadvantages),
    applications: Helper.setListwithTitleHtml("Applications", graph.applications),
    terminologies: Helper.setListwithTitleHtml("Terminologies", graph.terminologies),
    type: Helper.setListwithTitleHtml("Type", graph.type),
}