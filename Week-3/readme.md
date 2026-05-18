# E-Commerce Backend API (Week-3)

A backend RESTful API built with Node.js, Express.js, and MongoDB. This project provides foundational features for an e-commerce platform, including user authentication, product management, and a shopping cart system.

## Project Structure

This repository is organized into a standard Model-View-Controller (MVC) like structure for clarity and maintainability.

### 📁 Root Directory
- **`server.js`**: The main entry point of the Express application. It configures middlewares (like `express.json` and `cookie-parser`), establishes a connection to the MongoDB database, sets up routes for users and products, and includes global error handling.
- **`package.json`** & **`package-lock.json`**: Defines project dependencies (Express, Mongoose, bcryptjs, jsonwebtoken, cookie-parser) and metadata.
- **`req.http`**: A helpful file containing example HTTP requests. Use it with the "REST Client" extension in VS Code to test API endpoints manually (similar to using Postman).

### 📁 APIs
- **`userAPI.js`**: Contains the routes and controllers for user-related operations:
  - User registration (hashing passwords with `bcryptjs`).
  - User login (authenticating and generating JWT tokens).
  - CRUD operations for users (Create, Read, Update, Delete).
  - Cart management (adding a product to a user's cart).
- **`productAPI.js`**: Contains the routes and controllers for product-related operations:
  - CRUD operations for products (Create, Read all, Read by ID, Update, Delete).
  - All routes (except read all products depending on requirements) are protected by a JWT verification middleware.

### 📁 Models
- **`userModel.js`**: Defines the Mongoose schema for the User resource, detailing fields like email, password, and the shopping cart array.
- **`productModel.js`**: Defines the Mongoose schema for the Product resource, including `productId`, `productName`, `price`, and `brand`.

### 📁 Middlewares
- **`verifyToken.js`**: A custom security middleware that protects private routes. It intercepts requests, extracts the JWT from the cookies (or headers), and verifies it. If valid, the request proceeds; otherwise, it returns an unauthorized error.

### 📁 Auth
- **`auth.js`**: Directory containing utility functions and configuration related to authentication mechanisms.

## Tech Stack
- **Node.js** & **Express.js**: For creating the server and RESTful APIs.
- **MongoDB** & **Mongoose**: For data storage and Object Data Modeling (ODM).
- **JWT (JSON Web Tokens)**: For secure, stateless user authentication.
- **Bcrypt.js**: For hashing user passwords before storing them in the database.
- **Cookie-Parser**: For handling JWT tokens stored in HTTP-only cookies.

## How to Run

1. Make sure you have **Node.js** and **MongoDB** installed.
2. Clone this repository.
3. Install dependencies by running:
   ```bash
   npm install
   ```
4. Start your local MongoDB server (usually running on `mongodb://localhost:27017`).
5. Run the application:
   ```bash
   node server.js
   ```
6. The server will start on port `4000`. You can test the endpoints using the provided `req.http` file or Postman.
