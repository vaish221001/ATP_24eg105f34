# Week-1 JavaScript Assignments

Welcome to the **Week-1** repository! This folder contains foundational JavaScript programming assignments divided into two main parts: Day 1 and Day 2. The primary focus of this week is getting comfortable with basic logic, loops, functions, array operations, and manipulating arrays of objects.

---

##  Folder Structure

### Day 1 Assignments (`Day1.js/`)
This folder contains various scripts designed to reinforce basic programming constructs in JavaScript, such as conditionals, loops, functions, and array traversal.

*   **`Day1AssignmentQ1(BiggestOfTwoNumbers).js`**
    *   *Description:* Compares two numbers and outputs the larger one. Great for understanding basic `if-else` conditionals.
*   **`Day1AssignmentQ2(BiggestOfThreeNumbers).js`**
    *   *Description:* Expands on Q1 by comparing three numbers to find the largest, utilizing nested conditionals or logical operators.
*   **`Day1AssignmentQ3(SumOfMarksArray).js`**
    *   *Description:* Iterates through an array of numbers (marks) and calculates their total sum using a loop.
*   **`Day1AssignmentQ4(SmallestElementInArray).js`**
    *   *Description:* Scans an array to find and output the minimum value. Introduces basic algorithms for finding extrema.
*   **`Day1AssignmentQ5(FunctionReturnBiggestNumber).js`**
    *   *Description:* A reusable function that takes parameters and returns the largest number among them.
*   **`Day1AssignmentQ6(FunctionReturnArraySum).js`**
    *   *Description:* Encapsulates the logic from Q3 into a reusable function that takes an array as an argument and returns its sum.
*   **`Day1AssignmentQ7(SearchElementIndexInArray).js`**
    *   *Description:* Searches for a specific element within an array and returns its index. Introduces the concept of linear search.

### Day 2 Assignments (`Day2.js/`)
This folder focuses on more complex data structures, specifically arrays of objects, and how to perform CRUD (Create, Read, Update, Delete) operations on them using built-in array methods like `splice`.

*   **`Day2AssignmentQ1(Array_Object_Operations).js`**
    *   *Description:* Works with an array of employee objects, each containing an employee number (`eno`), `name`, and an array of `marks`.
    *   *Operations Performed:*
        1.  **Insertion:** Inserts a new employee ("Hari") at the 2nd position in the array.
        2.  **Deletion:** Finds and removes the employee with the name "Kiran".
        3.  **Modification:** Updates the marks of the employee "Sneha" by replacing a specific mark value.

---

##  How to Run the Code

Make sure you have [Node.js](https://nodejs.org/) installed on your machine. You can run any of the assignment files directly from your terminal using the `node` command.

1.  Open your terminal or command prompt.
2.  Navigate to the `Week-1` directory.
3.  Run a specific file:

```bash
# Example for a Day 1 script
node Day1.js/Day1AssignmentQ1(BiggestOfTwoNumbers).js

# Example for the Day 2 script
node Day2.js/Day2AssignmentQ1(Array_Object_Operations).js
```

