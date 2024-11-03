import { Request, Response } from 'express';
import { Tag } from '../models';

// Create a new tag
export const createTag = async (req: Request, res: Response) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).json(tag);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tags
export const getTags = async (req: Request, res: Response) => {
  try {
    const tags = await Tag.find();
    res.json(tags);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Update a tag
export const updateTag = async (req: Request, res: Response) => {
  try {
    const tag = await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' })
      return
    };
    res.json(tag);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a tag
export const deleteTag = async (req: Request, res: Response) => {
  try {
    const tag = await Tag.findByIdAndDelete(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' })
      return
    };
    res.json({ message: 'Tag deleted successfully' });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
