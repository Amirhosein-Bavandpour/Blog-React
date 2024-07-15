# My Blog Project

## Overview
This project is a full-stack blog application built with React and Node.js. It uses MongoDB for the database and integrates various npm packages such as context, express, path, and axios. Postman is used for testing the APIs.

## Features
- User authentication 
- User update and delete
- Create, read, update, and delete (CRUD) blog posts
- Responsive design

## Technologies Used
- Frontend: React, Context API, Axios
- Backend: Node.js, Express
- Database: MongoDB
- Testing: Postman
- Other: npm, path

## Installation


### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/)


### Setup Instructions


1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

3. **Install dependencies:**

- For the backend:
  
   ```sh
   cd api
   npm install
   ```
- For the frontend:

   ```sh
   cd client
   npm install
   ```

3. **Setup environment variables:**

   Create a `.env` file in the `api` directory and add the following:

   ```sh
   MONGO_URI=your_mongo_connection_string
   PORT=your_preferred_port
   ```

4. **Run the application:**

- Start the api server:
  
   ```sh
   cd api
   npm start

- Start the client server:

   ```sh
   cd client
   npm start
   ```

5. **Access the application:**
   
   
- Open your browser and go to `http://localhost:3000`


## API Endpoints
Here are the main API endpoints.

### Auth Routes
```
POST /api/auth/register - Register a new user
POST /api/auth/login - Login a user
```

### User Routes
```
PUT /api/users/ - Update a user
DEL /api/users/ - Delete user and posts of that user
GET /api/users/ - Get user
```

### Post Routes
```
GET /api/posts - Get all blog posts
GET /api/posts/:id - Get a single blog post by ID
POST /api/posts/ - Create a new blog post
PUT /api/posts/:id - Update a blog post by ID
DELETE /api/posts/:id - Delete a blog post by ID
```

### Category Routes
```
GET /api/categories- Get all blog Categories
POST /api/categories - Create a new Category
```

### Upload Route
```
POST /api/upload - Upload Photo
```

## My Blog Project Folder Structure 

   ```
   blog/
   │
   ├── api/
   │   ├── images/
   │   ├── models/
   │   ├── node_modules/
   │   ├── routes/
   │   ├── .env
   │   ├── index.js
   │   ├── package-lock.json
   │   ├── package.json
   │   └── yarn.lock
   │
   ├── client/
   │   ├── node_modules/
   │   ├── pics/
   │   ├── public/
   │   ├── src/
   │   │   ├── components/
   │   │   ├── context/
   │   │   ├── pages/
   │   │   ├── App.js
   │   │   └── index.js
   │   ├── .gitignore
   │   ├── package-lock.json
   │   ├── package.json
   │   └── yarn.lock
   │
   └── README.md
   ```
#### Make sure to replace placeholders like `yourusername`, `your-repo-name`, `your_mongo_connection_string`, and `your-email@example.com` with your actual information.
