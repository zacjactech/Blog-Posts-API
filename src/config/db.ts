import mongoose from 'mongoose';

import dotenv from 'dotenv';
import { MONGO_URI } from './env';

dotenv.config()


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const clientOptions : object = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
  await mongoose.connect( MONGO_URI, clientOptions);
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
   
    await mongoose.connection.db?.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}



export default connectDB;
