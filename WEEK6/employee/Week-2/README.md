# Week-2 JavaScript & Express Backend Assignments

Welcome to the **Week-2** repository! This week marks a transition from basic JavaScript to advanced ES6 features and full-stack backend development using Node.js and Express.

Below is a detailed breakdown of the assignments and projects completed during Day 3, Day 4, and Day 5.

---

##  Folder Structure & Details

###  Day 3: Advanced Array Methods & ES6 Modules (`Day3.js/`)
Day 3 focuses heavily on higher-order array functions (`map`, `filter`, `reduce`, `forEach`) and organizing code into multiple files using ES6 Module syntax (`import` / `export`).

**Key Assignments:**
*   **Array Operations (Q1, Q2, Q3):** Scripts dedicated to mastering how to manipulate arrays without mutating the original data using higher-order functions.
*   **`Day3AssignmentQ4(Shopping-Cart-Summary).js`**: Uses `reduce` to calculate the total price of items in a shopping cart object array.
*   **`Day3AssignmentQ5(Student-Performance-Dashboard).js`**: Combines `filter` and `map` to find students who passed and formats their data for a dashboard.
*   **`Day3AssignmentQ6(Employee-Payroll-Processor).js`**: Calculates taxes and net salaries across an array of employee objects.
*   **`Day3AssignmentQ7(Movie-Streaming-Platform).js`**: Filters movies by genre and ratings using chained array methods.
*   **`Day3AssignmentQ8(Bank-Transaction-Analyzer).js`**: Analyzes a sequence of deposits and withdrawals to calculate the final bank balance.
*   **`e-commerce system/` & `app.js`**: Demonstrates the use of ES6 modules (`import`/`export`) by splitting validation, tasks, and core logic into multiple files (`module1.js`, `module2.js`, `validator.js`).

###  Day 4: Modern ES6 Syntax, Copying & Asynchronous JS (`Day4.js/`)
Day 4 tackles some of the trickiest concepts in JavaScript: Spread/Rest operators, object copying (Shallow vs. Deep copy), and timing events (`setTimeout`, `setInterval`).

**Key Assignments:**
*   **`Day4AssignmentQ1(Library-Book-Management-System).js`**: A comprehensive system applying object manipulation.
*   **`Day4AssignmentQ2(Array-Copy-And-Extend).js`**: Uses the **Spread Operator** (`...`) to copy an existing array and append new elements without mutating the original.
*   **`Day4AssignmentQ3(Update-User-Object).js`**: Uses the Spread Operator to safely update properties in an object.
*   **`Day4AssignmentQ4(Rest-Parameter-Sum-Function).js`**: Utilizes the **Rest Operator** (`...args`) to allow a function to accept an indefinite number of arguments and sum them.
*   **`Day4AssignmentQ5 & Q6 (Shallow vs Deep Copy)`**: Demonstrates the difference between shallow copies (where nested objects are passed by reference) and deep copies (using techniques like `JSON.parse(JSON.stringify())` or `structuredClone`) to ensure complete isolation.
*   **`Day4AssignmentQ7(Exam-Portal-Simulator).js`**: Uses `setTimeout` to simulate an exam portal that auto-submits after a specific duration.
*   **`Day4AssignmentQ8(OTP-Countdown-Simulator).js`**: Uses `setInterval` to create a countdown timer for an OTP, clearing the interval when it reaches zero.

###  Day 5: Introduction to Node.js & Express.js (`Day5.js/`)
Day 5 is a massive leap into building RESTful APIs using **Express.js**. It establishes a modular backend architecture.

**Key Concepts & Files:**
*   **`package.json`**: Generated using `npm init -y`, tracking all dependencies (like Express and Nodemon).
*   **`server.js`**: The main entry point of the backend application.
    *   Initializes the Express HTTP server on port 3000.
    *   Implements built-in middleware: `app.use(express.json())` to parse incoming JSON payloads.
    *   Implements Custom Middleware (`middleware1`, `middleware2`) to intercept requests and log data before passing them to the routes using `next()`.
*   **`APIs/` Directory**: Demonstrates modular routing using `express.Router()`.
    *   **`userAPI.js`**: Handles all routes starting with `/user-api` (e.g., creating users, fetching users).
    *   **`productAPI.js`**: Handles all routes starting with `/product-api`.
*   **`req.http`**: Uses the REST Client extension to test the backend API endpoints directly from VS Code without needing Postman.

---

##  How to Run the Code

### Running Day 3 & Day 4 Scripts
You can run any JavaScript file via the terminal using Node.js:
```bash
node Day3.js/Day3AssignmentQ4(Shopping-Cart-Summary).js
```

### Running the Day 5 Backend Server
To start the Express server and test the APIs:
1. Navigate into the `Day5.js` directory:
   ```bash
   cd Day5.js
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node server.js
   # Or if you have nodemon installed:
   nodemon server.js
   ```
4. Use the `req.http` file or tools like Postman to send requests to `http://localhost:3000`.
