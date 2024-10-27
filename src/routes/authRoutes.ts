// routes/authRoutes.ts
import { Router } from 'express';
import { registerUser, loginUser, verifyToken } from '../controllers/authController';

const router = Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Optional: Protected route example (you can add more later)
router.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'This is a protected route', userId: req.userId });
});

export default router;
