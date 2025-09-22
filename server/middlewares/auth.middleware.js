import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import User from '../models/user.model.js';
import { JWT_SECRET } from '../configs/env.js';

const protect = asyncHandler(async (req, res, next) => {
   let token;

   if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
   )
      token = req.headers.authorization.split(' ')[1];

   if (!token)
      return res
         .status(401)
         .json({ message: 'Unauthorized Access, No token provided.' });

   const decoded = jwt.verify(token, JWT_SECRET);

   const user = await User.findById(decoded.userId).select('-password');

   if (!user) res.status(401).json({ message: 'Unauthorized Request' });

   req.user = user;
   next();
});

export default protect;
