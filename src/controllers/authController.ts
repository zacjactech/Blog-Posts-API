import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models';

// Register a new user
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
       res.status(400).json({ message: 'User already exists' });
       return
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user: IUser = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

    res.status(201).json({ token });
  } catch (error:unknown) {
    if (error instanceof Error) {
      // Here, you can access error.message safely
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'Unknown error' });
    }
  }
};

// User login
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
       res.status(401).json({ message: 'Invalid email or password' });
       return
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
       res.status(401).json({ message: 'Invalid email or password' });
       return
    }

    // Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (error:unknown) {
    if (error instanceof Error) {
      // Here, you can access error.message safely
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
    } else {
      res.status(500).json({ message: 'Internal Server Error', error: 'Unknown error' });
    }
  }
};

// Optional: Token verification middleware can be added here or in a separate file
export const verifyToken = (req: Request, res: Response, next: Function) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) { 
    res.status(403).json({ message: 'No token provided' })
    return
  };

  jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Unauthorized' });
     // Type guard for decoded
     
     if (typeof decoded === 'object' && decoded !== null) {
      req.userId = decoded.id; // Assuming the payload contains an 'id' field
      next();
    } else {
      return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
    next();
  });
};
