// routes/postRoutes.ts
import { Router } from 'express';
import { createPost, getPost, updatePost, deletePost } from '../controllers/PostController';

const router = Router();

// Create a new post
router.post('/', createPost);

// Get a post by ID
router.get('/:id', getPost);

// Update a post
router.put('/:id', updatePost);

// Delete a post
router.delete('/:id', deletePost);

export default router;
