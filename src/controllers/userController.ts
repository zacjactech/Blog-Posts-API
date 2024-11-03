import { Request, Response } from 'express';
import { User } from '../models';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get a user by ID
export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    };
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    };
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: 'User not found' })
      return
    };
    res.json({ message: 'User deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
