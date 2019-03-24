const problems = [

  //Set 1 Easy
  {
    name: `Strings`,
    statement: `
        <p>
        Given two string s and t, write a function to check if s contains all characters of t (in the same order as they are in string t).
Return true or false.
</p>`,
    inputPattern: `<p>
    Line 1 :Number of test cases<br>
    Line 2 : String s<br>
    Line 3 : String t<br>
    </p>`,
    outputPattern: `<p>
    true or false </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      `,
    exampleInput: `<pre class="io-content">
    2
    abchjsgsuohhdhyrikkknddg
    coding
    abcde
    aeb
      </pre>`,
    exampleOutput: `<pre class="io-content">
    true
    false
          </pre>`,
    exampleExplaination: `<p>
    In case, there is a word "coding" abstract written in a complex word, you need to extract out the words from the first statement and then write a boolean value .
    </p>`
  },
  {
    name: `Mobile App`,
    statement: `
        <p>
        You have made a smartphone app and want to set its price such that the profit earned is maximised. There are certain buyers who will buy your app only if their budget is greater than or equal to your price.
        You will be provided with a list of size N having budgets of buyers and you need to return the maximum profit that you can earn.
        Lets say you decide that price of your app is Rs. x and there are N number of buyers. So maximum profit you can earn is :
         m * x<br>
        where m is total number of buyers whose budget is greater than or equal to x.
        </p>`,
    inputPattern: `<p>
      Line 1 :NO. of test case<br>
      Line 2 : N (No. of buyers)<br>
      Line 3 : Budget of buyers (separated by space)
    </p>`,
    outputPattern: `<p>
    Maximum profit
    </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      `,
    exampleInput: `<pre class="io-content">
    2
    4
    30 20 53 14
    5
    34 78 90 15 67
          </pre>`,
    exampleOutput: `<pre class="io-content">
    60
    201
          </pre>`,
    exampleExplaination: `<p>
    Sample Output 1 Explanation : Price of your app should be Rs. 20 or Rs. 30. For both prices, you can get the profit Rs. 60.<br>
Sample Output 2 Explanation : Price of your app should be Rs. 67. You can get the profit Rs. 201 (i.e. 3 * 67).
       </p>`
  },
  {
    name: `Split Array`,
    statement: `
        <p>
        Given an integer array A of size N, check if the input array can be splitted in two parts such that -<br>
- Sum of both parts is equal<br>
- All elements in the input, which are divisible by 5 should be in same group.<br>
- All elements in the input, which are divisible by 3 (but not divisible by 5) should be in other group.<br>
- Elements which are neither divisible by 5 nor by 3, can be put in any group.

       </p>`,
    inputPattern: `<p>
    Line 1 : NO. of test cases<br>
    Line 2 : Integer N (size of array)<br>
    Line 3 : Array A elements (separated by space)
    </p>`,
    outputPattern: `<p>
        true or false
         </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      <h6>Small dataset (Test set 1 - Visible)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>5</sup>.<br>
      </p>
      
      <h6>Large dataset (Test set 2 - Hidden)</h6>
      <p>
        1 ≤ <b>N</b> ≤ 10<sup>16</sup>.<br>
      </p>`,
    exampleInput: `<pre class="io-content">
    2
    2
    1 2
    3
    1 4 3
          </pre>`,
    exampleOutput: `<pre class="io-content">
    false
    true
          </pre>`,
    exampleExplaination: `<p>
    Groups can be made with any set of elements, i.e. elements need not to be continuous. And you need to consider each and every element of input array in some group.
    Return true, if array can be split according to the above rules, else return false.
    Note : You will get marks only if all the test cases are passed.</p>`
  },


  //Set 2 Medium
  {
    name: `Maximum Square Matrix`,
    statement: `
        <p>
        Given a n*m matrix which contains only 0s and 1s, find out the size of maximum square sub-matrix with all 0s. You need to return the size of square with all 0s.
      </p>`,
    inputPattern: `<p>
    Line 1 : Number of test caes<br>
    Line 2 : n and m (space separated positive integers)<br>
    Next n lines : m elements of each row (separated by space).</p>`,
    outputPattern: `<p>
    Line 1 : Size of maximum square sub-matrix
      </p>`,
    constraints: `<p>
    Time Complexity: O(m*n) where m is number of rows and n is number of columns in the given matrix.<br>
    Auxiliary Space: O(m*n) where m is number of rows and n is number of columns in the given matrix.<br>
    Algorithmic Paradigm: Dynamic Programming
    </p>`,
    exampleInput: `<pre class="io-content">
      1
      3 3
      1 1 0
      1 1 1
      1 1 1
          </pre>`,
    exampleOutput: `<pre class="io-content">
        1
          </pre>`, exampleExplaination: `<p>
          For the given M[R][C] in above example, constructed S[R][C] would be:<br>
   <pre>
   0  1  1  0  1
   1  1  0  1  0
   0  1  1  1  0
   1  1  2  2  0
   1  2  2  3  1
   0  0  0  0  0
   </pre>
The value of maximum entry in above matrix is 3 and coordinates of the entry are (4, 3). Using the maximum value and its coordinates, we can find out the required sub-matrix.
      </p>`
  },
  {
    name: `Staircase`,
    statement: `
        <p>
        A child is running up a staircase with N steps, and can hop either 1 step, 2 steps or 3 steps at a time. Implement a method to count how many possible ways the child can run up to the stairs. You need to return number of possible ways W. </p>`,
    inputPattern: `<p>
    Line 1 :NO. of test cases<br>
Line 2 : Integer N (No. of steps) <br>
Note:User have to insert multiple test cases as per defined in line 1
        </p>`,
    outputPattern: `<p>
    Integer W i.e. Number of possible ways
    </p>`,
    constraints: `<p>
    (1 <= N <= 30)
    </p>`,
    exampleInput: `<pre class="io-content">
    1
    4
          </pre>`,
    exampleOutput: `<pre class="io-content">
        7
          </pre>`,
    exampleExplaination: `<p>
    Think like a kid who is just enjoying his day ,jumping over stairs while taking steps as per pattern 1->2->3.
    </p>`
  },
  {
    name: `Replace with Sum of greater nodes`,
    statement: `
        <p>
        Given a binary search tree, replace each nodes' data with the sum of all nodes' which are greater or equal than it. You need to include the current node's data also.
That is, if in given BST there is a node with data 5, you need to replace it with sum of its data (i.e. 5) and all nodes whose data is greater than or equal to 5.
You don't need to return or print, just change the data of each node.
        </p>`,
    inputPattern: `<p>
    Line 1 :No. of test cases<br>
Line 2 : Elements in level order form (separated by space)<br>
(If any node does not have left or right child, take -1 in its place)<br>
Line 3 : Integer S<br>
Note:User have to insert multiple test cases as per defined in line 1
</p>`,
    outputPattern: `<p>
    Each pair in different line (pair elements separated by space)
    </p>`,
    constraints: `<p>
    1 <= N <= 1000
    </p>`,
    exampleInput: `<pre class="io-content">
    1
    5 10 6 2 3 -1 -1 -1 -1 -1 9 -1 -1
    15
          </pre>`,
    exampleOutput: `<pre class="io-content">
    5 10
    6 9
          </pre>`,
    exampleExplaination: `<p>
    Given a Balanced Binary Search Tree and a target sum, write a function that returns true if there is a pair with sum equals to target sum, otherwise return false. Expected time complexity is O(n) and only O(Logn) extra space can be used. Any modification to Binary Search Tree is not allowed. Note that height of a Balanced BST is always O(Logn).
    </p>`
  },


  //Set 3 Hard
  {
    name: `Famous wizard`,
    statement: `
        <p>
        Famous wizard Sumar moonji kumaru is stuck in a huge room and has to save Hermione Granger from a monster. Kumaru is at location P1 given by integral coordinates (x1,y1) and Hermione is at location P2 given by integral coordinates (x2,y2). Sadly P1 and P2 are the only points at which floating rocks are present. Rest of the room is without floor and underneath is hot lava. 
Kumaru has to go from P1 to P2 but there are no floating rocks to walk on. Kumaru knows a spell that can make the rocks appear but only on the integral coordinates on the straight line joining P1 and P2.
How many rocks can appear at locations (x,y) on the line segment between P1 and P2 (excluding P1 and P2) which satisfy the condition that both x and y are integers?
        </p>`,
    inputPattern: `<p>
    The first line contains a single integer T, the number of test cases. T lines follow.<br>
Each of the following T lines contains one test case each. <br>
Each test case contains 4 integers x1, y1, x2 and y2 separated by a single space. 
    </p>`,
    outputPattern: `<p>
    A single line containing the number of rocks.
    </p>`,
    constraints: `<p>
    1 <= T <= 105 <br>
    -109 <= x1, y1<br>
    x2, y2 <= 109
      </p>
      `,
    exampleInput: `<pre class="io-content">
    3
    0 2 4 0
    2 2 5 5
    1 9 8 16
          </pre>`,
    exampleOutput: `<pre class="io-content">
    1
    2
    6    
          </pre>`,
    exampleExplaination: `<p>
    Case 1: As shown in the figure, between (0,2) and (4,0) there's only 1 integral point (2,1) hence 1 rock. <br>
    Case 2: Between (2,2) and (5,5) lies (3,3) and (4,4), hence 2 rocks. <br>
    Case 3: Between (1,9) and (8,16) there lies 6 rocks at positions (2,10) (3,11) (4,12) (5,13) (6,14) (7,15). <br>
      </p>`
  },
  {
    name: `Watson asks Sherlock`,
    statement: `
        <p>
        Given a string S of N 0's and M 1's, how many unique permutations of this string start with 1? Help Sherlock by printing the answer modulo ( 1 0 + 7 ).
Input Format First line contains T , the number of test cases. Each test case consists of N and M separated by a space. 
Output Format For each test case, print the answer modulo ( 1 0 + 7 ). 
        </p>`,
    inputPattern: `<p>
        The first line of the input gives the number of test cases, <b>T</b>.
        <b>T</b> test cases follow. Each begins with one line containing an integer
        <b>N</b>: the integer initially displayed on Supervin's calculator.
      </p>`,
    outputPattern: `<p>
        For each test case, output one line containing <code>Case #x: y</code>, where
        <code>x</code> is the test case number (starting from 1) and <code>y</code>
        is the minimum number of button presses, as described above.
      </p>`,
    constraints: `<p>
        1 ≤ <b>T</b> ≤ 100.<br>
        Time limit: 20 seconds per test set.<br>
        Memory limit: 1GB.<br>
      </p>
      
      `,
    exampleInput: `<pre class="io-content">
    2 
    1 1
    2 3
          </pre>`,
    exampleOutput: `<pre class="io-content">
    1 
    6
          </pre>`,

    exampleExplaination: `<p>
          Test1: Out of all unique permutations ie. 01 and 10, only second permutation satisfies. 
          Hence, output is 1. <br>
          Test2: Out of all unique permutations ie. 00111 01011 01101 01110 10011 10101 10110 11001 11010 11100, only 10011 10101 10110 11001 11010 11100 satisfy. 
          Hence, output is 6.</p>`
  },
  {
    name: `Twins`,
    statement: `
        <p>
        Twins Lia is fascinated by anything she considers to be a twin . She calls a pairs of positive integers, i and j , twins if: <br>
They are both prime. A prime number is an integer greater than  1 that has no positive divisors other than 1  and itself. <br>
Their absolute difference is exactly equal to  2(i.e |j-i|=2)<br>
Given an inclusive interval of integers from n to m, can you help Lia find the number of pairs of twins there are in the interval (i.e.,[n,m] )? 
<br>Note that pairs  (i,j)and (j,i) are considered to be the same pair.  </p>`,
    inputPattern: `<p>
    Line 1 : number of test cases.
    Line 2 : Two space-separated integers describing the respective values of n and m .</p>`,
    outputPattern: `<p>
    single integer denoting the number of pairs of twins. 
</p>`,
    constraints: `<p>
    1<=n<=m<=10^9<br>
    m-n<=10^6

      </p>
      `,
    exampleInput: `<pre class="io-content">
    1
3 13
</pre>`,
    exampleOutput: `<pre class="io-content">
    3
     </pre>`, 
    exampleExplaination: `<p>
    There are three pairs of twins: (3,5) ,(5,7) and (11,13).
      </p>`
  }

]

module.exports = problems;