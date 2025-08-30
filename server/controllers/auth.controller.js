import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../models/user.model.js';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../configs/env.js';

// JWT Token Generation
const generateToken = (id) => {
   return jwt.sign({ userId: id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
   });
};

// @des	   SIGN-UP a new User
// @route   POST /api/v1/auth/sign-up
// @access  Public
export const signUp = asyncHandler(async (req, res) => {
   const session = await mongoose.startSession();
   await session.startTransaction();

   const { name, email, password } = req.body;

   if (!name || !email || !password) {
      const error = new Error('Please enter all fields!');
      error.statusCode = 400;
      throw error;
   }

   const isUserExists = await User.findOne({ email });

   if (isUserExists) {
      const error = new Error('User already exists!');
      error.statusCode = 401;
      throw error;
   }
   // Hash the Password
   const salt = await bcrypt.genSalt(10);
   const harshedPassword = await bcrypt.hash(password, salt);

   const newUser = await User.create(
      [
         {
            name,
            email,
            password: harshedPassword,
         },
      ],

      { session }
   );

   const token = generateToken(newUser[0]._id);

   await session.commitTransaction();
   session.endSession();
   res.status(201).json({
      success: true,
      message: 'User created successfully!',
      data: { token, user: newUser },
   });
});

// @des	   SIGN-IN a User
// @route   POST /api/v1/auth/sign-in
// @access  Public
export const signIn = asyncHandler(async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      const error = new Error('Please enter all fields!');
      error.statusCode = 400;
      throw error;
   }

   const user = await User.findOne({ email });

   if (!user) {
      const error = new Error('User does not exists!');
      error.statusCode = 404;
      throw error;
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);

   if (!isPasswordValid) {
      const error = new Error('Invalid Password!');
      error.statusCode = 401;
      throw error;
   }

   const token = generateToken(user._id);

   res.status(200).json({
      success: true,
      message: 'User successfully logged in!',
      data: {
         token,
         user,
      },
   });
});

// @des	   SIGN-OUT a User
// @route   POST /api/v1/auth/sign-out
// @access  Private
export const signOut = asyncHandler(async (req, res) => {
   res.status(200).json({
      success: true,
      data: 'user signed-out successfully',
   });
});
