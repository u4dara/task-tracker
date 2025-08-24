import { Router } from 'express';

import { signIn } from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/sign-in', signIn);

export default authRouter;
