import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const {
   NODE_ENV,
   PORT,
   MONGODB_URI,
   JWT_SECRET,
   JWT_EXPIRES_IN,
   ARCJET_KEY,
   ARCJET_ENV,
} = process.env;
