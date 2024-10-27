// routes/commentRoutes.ts
import { Router } from 'express';
import { createComment, getCommentsForPost, updateComment, deleteComment } from '../controllers/CommentController';

const router = Router();

// Create a new comment
router.post('/', createComment);

// Get comments for a specific post
router.get('/post/:postId', getCommentsForPost);

// Update a comment
router.put('/:id', updateComment);

// Delete a comment
router.delete('/:id', deleteComment);

export default router;
