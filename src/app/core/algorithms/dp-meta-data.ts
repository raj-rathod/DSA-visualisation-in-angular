import { Helper } from "src/app/helper/helper"

const dpData = {
    defination:"Dynamic Programming is a technique in computer programming that helps to efficiently solve a class of problems that have overlapping subproblems and optimal substructure property",
    characteristics:[
        "<b>Optimal Substructure</b>:  A given problem has Optimal Substructure Property if the optimal solution of the given problem can be obtained by using optimal solutions of its subproblems<br> For example, the Shortest Path problem has the following optimal substructure property: <br> If a node x lies in the shortest path from a source node u to destination node v then the shortest path from u to v is a combination of the shortest path from u to x and the shortest path from x to v. The standard All Pair Shortest Path algorithm like Floyd–Warshall and Single Source Shortest path algorithm for negative weight edges like Bellman–Ford are typical examples of Dynamic Programming",
        "<b>Overlapping Subproblems</b>:  Like Divide and Conquer, Dynamic Programming combines solutions to sub-problems. Dynamic Programming is mainly used when solutions to the same subproblems are needed again and again. In dynamic programming, computed solutions to subproblems are stored in a table so that these don’t have to be recomputed. So Dynamic Programming is not useful when there are no common (overlapping) subproblems because there is no point in storing the solutions if they are not needed again",
    ],
    terminologies:[
       "<b>Tabulation Method – Bottom Up Dynamic Programming</b>: As the name itself suggests starting from the bottom and accumulating answers to the top. Let’s discuss in terms of state transition.<br>Let’s describe a state for our DP problem to be dp[x] with dp[0] as base state and dp[n] as our destination state. So,  we need to find the value of destination state i.e dp[n]. If we start our transition from our base state i.e dp[0] and follow our state transition relation to reach our destination state dp[n], we call it the Bottom-Up approach as it is quite clear that we started our transition from the bottom base state and reached the topmost desired state",
       "<b>Memoization Method – Top-Down Dynamic Programming</b>: Once, again let’s describe it in terms of state transition. If we need to find the value for some state say dp[n] and instead of starting from the base state that i.e dp[0] we ask our answer from the states that can reach the destination state dp[n] following the state transition relation, then it is the top-down fashion of DP.<br> Here, we start our journey from the top most destination state and compute its answer by taking in count the values of states that can reach the destination state, till we reach the bottom-most base state"
    ],
    step1: "Typically, all the problems that require maximizing or minimize certain quantities or counting problems that say to count the arrangements under certain conditions or certain probability problems can be solved by using Dynamic Programming.<br> All dynamic programming problems satisfy the overlapping subproblems property and most of the classic dynamic problems also satisfy the optimal substructure property. Once, we observe these properties in a given problem, be sure that it can be solved using DP",
    step2: "DP problems are all about state and their transition. This is the most basic step which must be done very carefully because the state transition depends on the choice of state definition you make. So, let’s see what do we mean by the term “state”.<br> State A state can be defined as the set of parameters that can uniquely identify a certain position or standing in the given problem. This set of parameters should be as small as possible to reduce state space.<br> For example: In our famous Knapsack problem, we define our state by two parameters index and weight i.e DP[index][weight]. Here DP[index][weight] tells us the maximum profit it can make by taking items from range 0 to index having the capacity of sack to be weight. Therefore, here the parameters index and weight together can uniquely identify a subproblem for the knapsack problem<br>So, our first step will be deciding a state for the problem after identifying that the problem is a DP problem <br> As we know DP is all about using calculated results to formulate the final result. So, our next step will be to find a relation between previous states to reach the current state",
    step3: "This part is the hardest part of solving a DP problem and requires a lot of intuition, observation, and practice",
    step4: "This is the easiest part of a dynamic programming solution. We just need to store the state answer so that next time that state is required, we can directly use it from our memory"

}

export const dpMetaData = {
    defination: Helper.setHeader(dpData.defination),
    characteristics: Helper.setListwithTitleHtml("Characteristics of Dynamic Programming",dpData.characteristics),
    terminologies: Helper.setListwithTitleHtml("Tabulation and Memoization", dpData.terminologies),
    step1: Helper.setTitleDescription("Step 1: How to classify a problem as a Dynamic Programming Problem?", dpData.step1),
    step2: Helper.setTitleDescription("Step 2: Deciding the state", dpData.step2),
    step3: Helper.setTitleDescription("Step 3: Formulating a relation among the states", dpData.step3),
    step4: Helper.setTitleDescription("Step 4: Adding memoization or tabulation for the state", dpData.step4),
}