# Coders Blog 👩‍💻

<br />

<div style="display:flex;flex-direction:row;gap:0.5rem;">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node">

  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">

  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgre">

  <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" alt="Sequelize">

  <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink" alt="JWT">

</div>

<br />

<div style="display:flex;flex-direction:row;gap:0.5rem;">

  <img src="https://img.shields.io/badge/mocha.js-323330?style=for-the-badge&logo=mocha&logoColor=Brown" alt="Mocha">

  <img src="https://img.shields.io/badge/chai.js-323330?style=for-the-badge&logo=chai&logoColor=red" alt="Chai">

  <img src="https://img.shields.io/badge/sinon.js-323330?style=for-the-badge&logo=sinon" alt="Sinon">

  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">

</div>

<br />

<div style="display:flex;flex-direction:row;gap:0.5rem;">

  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAF" alt="React">

  <img src="https://img.shields.io/badge/testing%20library-323330?style=for-the-badge&logo=testing-library&logoColor=red" alt="Testing Library">

  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router">

  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="Styled Components">

</div>

<br /><br />

<img width="800" src="screenshots/home.png">

<br />

## ➡️ Project Description

This project involves developing a Node.js API using the Sequelize package to perform CRUD operations on blog posts. The application also includes implementing user authentication and associating users, posts, and categories.

Deploy: [Coders Blog!](https://deploy-bloggs.vercel.app/)

<br />

## ➡️ Features

### ▶️ RESTful Endpoints:

Implementation of endpoints to perform CRUD operations on posts.

### ▶️ User Authentication:

Creation of posts requires user authentication.

### ▶️ User-Post Relationship:

Establishment of a relationship between users and posts, ensuring each post is associated with a specific user.

### ▶️ Post-Category Relationship:

Use of categories to classify posts, establishing a relationship between posts and categories. Each post can belong to one or more categories.

<br />

## ➡️ Project Setup

### ▶️ Dependency Installation:

1. npm run install:apps to install necessary dependencies.
2. npm run compose:up to start the backend container and database.
3. npm run dev to start the frontend

### ▶️ Database Configuration:

- Configure the database connection information in the config/database.js file.

<br />

## ➡️ Endpoints

### ▶️ User

- POST /user - Create a new user
- GET /user - Get all users
- GET /user/:id - Get user by ID
- PUT /user/:id - Update user
- DELETE /user:id - Delete user

### ▶️ Post

- POST /post: Creates a new post (requires authentication).
- GET /post: Retrieves the list of all posts. (requires authentication)
- GET /post/:id: Retrieves details of a specific post. (requires authentication)
- GET /post/search: search for a post using a string
- PUT /post/:id: Updates an existing post (requires authentication).
- DELETE /post/:id: Deletes an existing post (requires authentication).

### ▶️ Categories

- POST /categories - Create a new category
- GET /categories - Get all categories
- PUT /categories/:id - Update category
- DELETE /categories/:id - Delete category 

### ▶️ Authentication

- POST /login: Performs user login.
- GET /login/role: Get the user role

<br />

## ➡️ ScreenShots

### ▶️ Home Page

<img width="800" src="screenshots/home.png">

<br />

### ▶️ Login Page

<img width="800" src="screenshots/login.png">

<br />

### ▶️ Register Page

<img width="800" src="screenshots/register.png">

<br />

### ▶️ Dashboard Page

<img width="800" src="screenshots/dashboard.png">

<br />

### ▶️ Single Post Page

<img width="800" src="screenshots/singlePost.png">

<br />

### ▶️ Create Post Page

<img width="800" src="screenshots/createPost.png">


<br />

### ▶️ Edit Post Page

<img width="800" src="screenshots/editPost.png">


<br />

### ▶️ User Posts Page

<img width="800" src="screenshots/myPosts.png">

<br />

### ▶️ Profile Page

<img width="800" src="screenshots/profile.png">

<br />

## ➡️ ScreenShots - Version Mobile

<br />

### ▶️ Home Page

<img width="400" src="screenshots/homeMobile.png">

<br />

### ▶️ Login Page

<img width="400" src="screenshots/loginMobile.png">

<br />

### ▶️ Register Page

<img width="400" src="screenshots/registerMobile.png">

<br />

### ▶️ Dashboard Page

<img width="400" src="screenshots/dashboardMobile.png">





