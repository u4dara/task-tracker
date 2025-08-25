import asyncHandler from 'express-async-handler';

import User from '../models/user.model.js';

// @des	   GET all users
// @route   GET /api/v1/users
export const getAllUsers = asyncHandler(async (req, res) => {
   const users = await User.find();
   res.status(200).json({ success: true, data: users });
});

// @des	   GET a user
// @route   GET /api/v1/users/:id
export const getUser = asyncHandler(async (req, res) => {
   const user = await User.findById(req.params.id);
   if (!user) {
      res.status(404);
      throw new Error('No user found with id ' + req.params.id);
   }
   res.status(200).json({ success: true, data: user });
});
