import asyncHandler from 'express-async-handler';

import User from '../models/user.model.js';

// @des	   GET the signed in user
// @route   GET /api/v1/users/me
// @access  Private
export const getUser = asyncHandler(async (req, res) => {
   res.status(200).json({ success: true, message: 'User Details' });
});
