// routes/tagRoutes.ts
import { Router } from 'express';
import { createTag, getTags, updateTag, deleteTag } from '../controllers/TagController';

const router = Router();

// Create a new tag
router.post('/', createTag);

// Get all tags
router.get('/', getTags);

// Update a tag
router.put('/:id', updateTag);

// Delete a tag
router.delete('/:id', deleteTag);

export default router;
