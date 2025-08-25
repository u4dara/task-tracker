import asyncHandler from 'express-async-handler';

// @des	   SIGNUP a new User
// @route   POST /api/v1/auth/sign-up
export const signUp = asyncHandler(async (req, res) => {
   res.status(201).json({ success: true, data: 'user created successfully' });
});

// @des	   SIGNIN a User
// @route   POST /api/v1/auth/sign-in
export const signIn = asyncHandler(async (req, res) => {
   res.status(200).json({ success: true, data: 'user signed-in successfully' });
});

// @des	   SIGNOUT a User
// @route   POST /api/v1/auth/sign-out
export const signOut = asyncHandler(async (req, res) => {
   res.status(200).json({
      success: true,
      data: 'user signed-out successfully',
   });
});
