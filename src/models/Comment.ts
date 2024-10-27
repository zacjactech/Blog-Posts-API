import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './User';
import { IPost } from './Post';

export interface IComment extends Document {
  postId: IPost['_id'];
  userId: IUser['_id'];
  text: string;
  likes: number;
  replies: {
    userId: IUser['_id'];
    text: string;
    createdAt: Date;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
}

const CommentSchema: Schema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, maxlength: 300 },
  likes: { type: Number, default: 0 },
  replies: [{
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model<IComment>('Comment', CommentSchema);
