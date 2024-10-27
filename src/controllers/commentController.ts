import { Request, Response } from 'express';
import { Comment } from '../models';

// Create a new comment
export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get comments for a post
export const getCommentsForPost = async (req: Request, res: Response) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a comment
export const updateComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    res.json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comment
export const deleteComment = async (req: Request, res: Response) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
