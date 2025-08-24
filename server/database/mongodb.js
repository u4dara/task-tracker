import mongoose from 'mongoose';
import colors from 'colors';
import asyncHandler from 'express-async-handler';

import { NODE_ENV, MONGODB_URI } from '../configs/env.js';

if (!MONGODB_URI) {
   throw new Error(
      'Please define the MONGODB_URI environment variable inside the .env.<development/production>.local'
   );
}

const connectToDatabase = async () => {
   try {
      await mongoose.connect(MONGODB_URI);
      console.log(
         `Successfully connected to Database in ${colors.magenta(`${NODE_ENV}`)}`
            .yellow
      );
   } catch (error) {
      console.error('Error connecting to Database'.red, error);
      process.exit(1);
   }
};

export default connectToDatabase;
