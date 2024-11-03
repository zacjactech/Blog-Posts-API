import { Request, Response } from 'express';
import { Post } from '../models';

// Create a new post
export const createPost = async (req: Request, res: Response) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get a post by ID
export const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    if (!post) {
      res.status(404).json({ message: 'Post not found' })
      return
    };
    res.json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update a post
export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!post) {
      res.status(404).json({ message: 'Post not found' })
      return
    };
    res.json(post);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a post
export const deletePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Post not found' })
      return
    };
    res.json({ message: 'Post deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
