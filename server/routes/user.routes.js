import { Router } from 'express';

import { getUser } from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/me', authMiddleware, getUser);

export default userRouter;
