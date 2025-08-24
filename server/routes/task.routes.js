import { Router } from 'express';

import {
   getAllTasks,
   getTask,
   createTask,
   updateTask,
   deleteTask,
} from '../controllers/task.controller.js';

const taskRouter = Router();
taskRouter.route('/').get(getAllTasks).post(createTask);
taskRouter.route('/:id').get(getTask).put(updateTask).delete(deleteTask);

export default taskRouter;
