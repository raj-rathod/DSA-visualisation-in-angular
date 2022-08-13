import { Helper } from "src/app/helper/helper"

const dataStructure = {
    defination:"<b>Data Structure</b>: A data structure is a specialized format to oraganizing, processing, retrieving and storing data.<br> Data structures make it easy for users to access and work with data the need in appropriate ways. <br> Most importantly, data structure frame the organization of information so that machines and humans can better understand it",
    terminologies: [
        "Data structures are the buliding blocks for more sophisticated applications. They are designed by compossing data elements into logical unit representing an abstract data type that has relevance to the algorithm or application",
        "It is not only important to use data structures, but it is also important to choose the proper type of data structure for eack task. Choosing an ill-suited data structure could result in slow runtimes or unresponsive code",
    ],
    choosing:[
        "What kind of information will be stored",
        "How will that information be used",
        "Where should data presist, or be kept, after it is created",
        "What is the best way to organize the data",
        "What aspects of memory and storage reservation management sholud be considered"
    ],
    operation:[
        "Storing data",
        "Ordering and storing data",
        "Indexing data",
        "Searching data",
        "Data exchange",
        "Managing resources and services",
        "Scalability"
    ],
    properties:[
        "<b>Primitive data structure</b>: Primitive data structure are the fundamental data structures. They are also called basic data structures<br> Primitive data structures are the defined by the programming languages, or we can say that it is built-in",
        "<b>Non-primitive data structure</b>: Non-primitive data structure are the data structures that are created using the primitive data structures",
        "<b>Linear or Non-linear</b>: Whether the data itmes are arranged in sequential order, such as array, or in an unordered sequence, such as with a graph",
        "<b>Homogeneous or Heterogeneous</b>: Whether all data items in a given repository are of the same type, such as array, or of various types, such as an abstract data type defined as a structure or a class",
        "<b>Static or Dynamic</b>: Static data structures have fixed sizes, structures and memory locations at compile time.<br> Dynamic data structures have sizes, structures and memory locations that can shrink or expand, depending on the use"
    ]
}
export const dataStructureMetaData = {
    defination: Helper.setHeader(dataStructure.defination),
    terminologies: Helper.setListwithTitleHtml("Why are data structure important", dataStructure.terminologies),
    choosing: Helper.setListwithTitleHtml("Five features to consider when choosing a data structure", dataStructure.choosing),
    operations: Helper.setListwithTitleHtml("How data structure are used", dataStructure.operation),
    properties: Helper.setListwithTitleHtml("Types of data structure", dataStructure.properties)
}