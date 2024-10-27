// routes/categoryRoutes.ts
import { Router } from 'express';
import { createCategory, getCategories, updateCategory, deleteCategory } from '../controllers/CategoryController';

const router = Router();

// Create a new category
router.post('/', createCategory);

// Get all categories
router.get('/', getCategories);

// Update a category
router.put('/:id', updateCategory);

// Delete a category
router.delete('/:id', deleteCategory);

export default router;
