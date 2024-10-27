// routes/userRoutes.ts
import { Router } from 'express';
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userController';

const router = Router();

// Create a new user
router.post('/', createUser);

// Get a user by ID
router.get('/:id', getUser);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;
