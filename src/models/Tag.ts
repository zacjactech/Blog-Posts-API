import mongoose, { Schema, Document } from 'mongoose';

export interface ITag extends Document {
  name: string;
  createdAt?: Date;
}

const TagSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true }
}, { timestamps: true });

export default mongoose.model<ITag>('Tag', TagSchema);
