// @des		SignIn User
// @route   POST /api/v1/auth/sign-in
export const signIn = async (req, res) => {
   res.status(200).json({ message: 'User logged in successfully' });
};
