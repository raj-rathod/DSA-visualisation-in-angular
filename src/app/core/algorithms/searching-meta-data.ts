import { Helper } from "src/app/helper/helper"

const searchingData = {
    defination: "The searching algorithms are used to search or find one or more than one element from a dataset. These type of algorithms are used to find elements from a specific data structures.<br> Searching may be sequential or not. If the data in the dataset are random, then we need to use sequential searching. Otherwise we can use other different techniques to reduce the complexity.<br> Search algorithms can be classified based on their mechanism of searching into three types of algorithms: linear, binary, and hashing",
    terminologies: [
        "<b>Sequential Search</b>:  In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search",
        "<b>Interval Search</b>: These algorithms are specifically designed for searching in sorted data-structures. These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search",
    ]
}

export const searchingMetaData = {
    defination: Helper.setHeader(searchingData.defination),
    terminologies: Helper.setListwithTitleHtml('Types of Searchs', searchingData.terminologies),
}