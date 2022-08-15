import { Helper } from "src/app/helper/helper"

const sortData = {
    defination: "A sorting algorithm is a method for reorganizing a large number of items into a specific order, such as alphabetical, highest-to-lowest value or shortest-to-longest distance. Sorting algorithms take lists of items as input data, perform specific operations on those lists and deliver ordered arrays as output",
    properties: [
        "<b>Speed (or better: time complexity)</b>:The most important criterion when selecting a sorting method is its speed. The main point of interest here is how the speed changes depending on the number of elements to be sorted.<br> After all, one algorithm can be twice as fast as another at a hundred elements, but at a thousand elements, it can be five times slower",
        "<b>Space complexity</b>:Not only time complexity is relevant for sorting methods, but also space complexity. Space complexity specifies how much additional memory the algorithm requires depending on the number of elements to be sorted. This does not refer to the memory required for the elements themselves, but to the additional memory required for auxiliary variables, loop counters, and temporary arrays",
        "<b>Stability</b>: In stable sorting methods, the relative sequence of elements that have the same sort key is maintained. This is not guaranteed for non-stable sort methods: The relative order can be maintained but does not have to be",
        "<b>Comparison sorts / non-comparison sorts</b>: Most of the well-known sorting methods are based on the comparison of two elements on less, greater or equal. However, there are also non-comparison-based sorting algorithms.<br> You can find out how this can work in the Counting Sort and Radix Sort sections",
        "<b>Recursive / non-recursive</b>: A recursive sorting algorithm requires additional memory on the stack. If the recursion is too deep, the dreaded StackOverflowExecption is imminent"
    ],
    example:"assets/ds-image/sorting.jpg ",
}
export const sortingMetaData = {
    defination: Helper.setHeader(sortData.defination),
    properties: Helper.setListwithTitleHtml("Characteristics of Sorting Algorithms", sortData.properties),
    example: Helper.setExampleImage("Complexity and Stability of Sorting Algorithms", sortData.example),
}