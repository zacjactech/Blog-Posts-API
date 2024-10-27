import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';

export interface IPost extends Document {
  title: string;
  content: string;
  author: IUser['_id'];
  categories: string[];
  tags: string[];
  likes: number;
  comments: {
    user: IUser['_id'];
    commentText: string;
    createdAt: Date;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true, maxlength: 100 },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  categories: [{ type: String }],
  tags: [{ type: String, index: true }],
  likes: { type: Number, default: 0 },
  comments: [{
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    commentText: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

// Create an index for the title to improve search performance
PostSchema.index({ title: 'text', tags: 'text' });

export default mongoose.model<IPost>('Post', PostSchema);
