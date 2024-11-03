import express from 'express';
import connectDB from './src/config/db'
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes';
import userRoutes from './src/routes/userRoutes';
import postRoutes from './src/routes/postRoutes';
import commentRoutes from './src/routes/commentRoutes';
import categoryRoutes from './src/routes/categoryRoutes';
import tagRoutes from './src/routes/tagRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/comments', commentRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/tags', tagRoutes);

connectDB().then( () => {
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

}
)