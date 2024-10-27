import {config} from 'dotenv';

config();

export const PORT = process.env.PORT || 5000;
export const MONGO_URI = process.env.MONGO_URI as string;
export const JWT_SECRET = process.env.JWT_SECRET as string;
