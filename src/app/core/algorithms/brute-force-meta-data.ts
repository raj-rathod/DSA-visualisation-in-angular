import { Helper } from "src/app/helper/helper"

const bruteForce = {
    defination: "Brute force algorithm is a technique that guarantees solutions for problems of any domain helps in solving the simpler problems and also provides a solution that can serve as a benchmark for evaluating other design techniques, but takes a lot of run time and inefficient",
    advantages:[
        "The brute force approach is a guaranteed way to find the correct solution by listing all the possible candidate solutions for the problem",
        "It is a generic method and not limited to any specific domain of problems",
        "The brute force method is ideal for solving small and simpler problems",
        "It is known for its simplicity and can serve as a comparison benchmark"
    ],
    disadvantages:[
        "The brute force approach is inefficient. For real-time problems, algorithm analysis often goes above the O(N!) order of growth",
        "This method relies more on compromising the power of a computer system for solving a problem than on a good algorithm design",
        "Brute force algorithms are slow",
        "Brute force algorithms are not constructive or creative compared to algorithms that are constructed using some other design paradigms"
    ]
}

export const bruteForceMetaData = {
    defination: Helper.setHeader(bruteForce.defination),
    advantages: Helper.setListwithTitleHtml("Advantages", bruteForce.advantages),
    disadvantages: Helper.setListwithTitleHtml("Disadvantages", bruteForce.disadvantages)
}