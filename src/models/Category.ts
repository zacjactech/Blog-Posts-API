import mongoose, { Schema, Document } from 'mongoose';

interface ICategory extends Document {
  name: string;
  slug: string;
  description?: string;
  createdAt?: Date;
}

const CategorySchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String }
}, { timestamps: true });

// Automatically generate a slug from the name
CategorySchema.pre<ICategory>('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name.toLowerCase().replace(/ /g, '-');
  }
  next();
});

const Category = mongoose.model<ICategory>('Category', CategorySchema);

export{ICategory}
export default Category;
