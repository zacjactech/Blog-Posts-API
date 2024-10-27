# Blog-Posts-API
A simple RESTful API built with Node.js, Express, and MongoDB for managing blog posts. This API allows users to create, read, update, and delete blog posts with CRUD operations.

Here's a sample GitHub repository description for your Blog Posts API project:

---

# Features

- Create Blog Post: Add new blog posts with title, content, and author fields.
- Read Blog Posts: Retrieve all blog posts or a single post by ID.
- Update Blog Post: Edit an existing post by ID.
- Delete Blog Post: Remove a post by ID.
- MongoDB Integration: Data is stored in MongoDB using Mongoose for easy data modeling.
- Express.js Framework: Provides a simple, organized structure for handling HTTP requests and routing.

---

# Technologies Used

- Node.js: Backend runtime environment
- Express: Lightweight web framework for building APIs
- MongoDB Atlas: Cloud-based database
- Mongoose: ODM for MongoDB and Node.js

---

# Getting Started

1. Clone the Repository
   ```bash
   git clone https://github.com/zacjactech/Blog-Posts-API.git
   cd Blog-Posts-API
   ```

2. Install Dependencies
   ```bash
   npm install
   ```

3. Add Environment Variables
   - Create a `.env` file and add your MongoDB URI:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

4. Run the Server
   ```bash
   npm start
   ```

5. Test Endpoints  
   Use Postman or curl to interact with the API endpoints (default: `http://localhost:3000/api/posts`).

---

# Endpoints

| Method | Endpoint           | Description               |
|--------|---------------------|---------------------------|
| POST   | `/api/posts`       | Create a new blog post    |
| GET    | `/api/posts`       | Get all blog posts        |
| GET    | `/api/posts/:id`   | Get a specific blog post  |
| PUT    | `/api/posts/:id`   | Update a blog post        |
| DELETE | `/api/posts/:id`   | Delete a blog post        |

---

# License

This project is open-source and available under the MIT License.

--- 

Feel free to adapt it to your project as needed!
