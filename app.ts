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
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/tags', tagRoutes);

connectDB().then( () => {
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

}
)