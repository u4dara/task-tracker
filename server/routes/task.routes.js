import { Router } from 'express';

import protect from '../middlewares/auth.middleware.js';
import {
   getAllTasks,
   getTask,
   createTask,
   updateTask,
   deleteTask,
} from '../controllers/task.controller.js';

const taskRouter = Router();
taskRouter.route('/').get(protect, getAllTasks).post(protect, createTask);
taskRouter
   .route('/:id')
   .get(getTask)
   .put(protect, updateTask)
   .delete(protect, deleteTask);

export default taskRouter;
