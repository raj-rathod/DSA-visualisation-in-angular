import { Helper } from "src/app/helper/helper"

const greedyData = {
   defination: `A greedy algorithm is an approach for solving a problem by selecting the best option available at the moment. 
   It doesn't worry whether the current best result will bring the overall optimal result. <br>
   The algorithm never reverses the earlier decision even if the choice is wrong. It works in a top-down approach.
   <br>
   This algorithm may not produce the best result for all the problems. It's because it always goes for the local best 
   choice to produce the global best result.
   `,
   example: 'assets/ds-image/DSA1.jpg',
   properties:[
    `<b>Greedy Choice Property:</b> If an optimal solution to the problem can be found by choosing the best choice at 
    each step without reconsidering the previous steps once chosen, the problem can be solved using a greedy approach. 
    This property is called greedy choice property.`,
    `<b>Optimal Substructure:</b> If the optimal overall solution to the problem corresponds to the optimal solution to 
    its subproblems, then the problem can be solved using a greedy approach. This property is called optimal substructure.`
   ],
   components:[
    `<b>Candidate set:</b> A solution that is created from the set is known as a candidate set.`,
    `<b>Selection function:</b> This function is used to choose the candidate or subset which can be added in the solution.`,
    `<b>Feasibility function:</b> A function that is used to determine whether the candidate or subset can be used to contribute 
      to the solution or not.`,
    `<b>Objective function:</b> A function is used to assign the value to the solution or the partial solution.`,
    `<b>Solution function:</b> This function is used to intimate whether the complete function has been reached or not.`,
   ],
   algorithm:[
    `To begin with, the solution set (containing answers) is empty.`,
    `At each step, an item is added to the solution set until a solution is reached.`,
    `If the solution set is feasible, the current item is kept.`,
    `Else, the item is rejected and never considered again.`
   ],
   applications:[
    `Selection Sort`,
    `Fractional knapsack Problem`,
    `Minimum Spanning Tree(Prim's, Kruskal's,)`,
    `Single-Source Shortest Path Problem`,
    `Job Scheduling Problem`,
    `Huffman Coding`,
    `Ford-Fulkerson Algorithm`
   ],
   advantages: [
    `The algorithm is easier to describe.`,
    `This algorithm can perform better than other algorithms (but, not in all cases).`
   ],
   disadvantage: [
    `As mentioned earlier, the greedy algorithm doesn't always produce the optimal solution. 
    This is the major disadvantage of the algorithm`
   ]
}

export const greedyMetaData = {
    defination: Helper.setHeader(greedyData.defination),
    example: Helper.setExampleImage('Greedy Approach', greedyData.example),
    properties: Helper.setListwithTitleHtml('Properties of Greedy Algorithm', greedyData.properties),
    components: Helper.setListwithTitleHtml('Components of Greedy Algorithm', greedyData.components),
    algorithm: Helper.setListwithTitleHtml('Greedy Algorithm', greedyData.algorithm),
    applications: Helper.setListwithTitleHtml('Applications of Greedy Algorithm', greedyData.applications),
    advantage: Helper.setListwithTitleHtml('Advantages of Greedy Algorithm', greedyData.advantages),
    disadvantage: Helper.setListwithTitleHtml('Disadvantages of Greedy Algorithm', greedyData.disadvantage),
    
}
