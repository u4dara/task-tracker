import asyncHandler from 'express-async-handler';

import Task from '../models/task.model.js';

// @des		GET all tasks
// @route   GET /api/v1/tasks
export const getAllTasks = asyncHandler(async (req, res) => {
   const tasks = await Task.find();
   res.status(200).json({ success: true, data: tasks });
});

// @des		GET a task by id
// @route   GET /api/v1/tasks/:id
export const getTask = asyncHandler(async (req, res) => {
   const task = await Task.findById(req.params.id);
   if (!task) {
      res.status(404);
      throw new Error(`Task with id ${req.params.id} not found`);
   }
   res.status(200).json({ success: true, data: task });
});

// @des	   CREATE a new task
// @route   POST /api/v1/tasks
export const createTask = asyncHandler(async (req, res) => {
   if (!req.body.taskName) {
      res.status(400);
      throw new Error('Please enter a new task name');
   }
   const newTask = await Task.create({ taskName: req.body.taskName });
   res.status(201).json({
      success: true,
      data: newTask,
   });
});

// @des		UPDATE a task by id
// @route   PUT /api/v1/tasks/:id
export const updateTask = asyncHandler(async (req, res) => {
   const task = await Task.findById(req.params.id);
   if (!task) {
      res.status(404);
      throw new Error(`Task with id ${req.params.id} not found`);
   }
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
   });
   res.status(200).json({ success: true, data: updatedTask });
});

// @des		DELETE a task by id
// @route   DELETE /api/v1/tasks/:id
export const deleteTask = asyncHandler(async (req, res) => {
   const task = await Task.findById(req.params.id);
   if (!task) {
      res.status(404);
      throw new Error(`Task with id ${req.params.id} not found`);
   }
   const deletedTask = await Task.findByIdAndDelete(req.params.id);
   res.status(200).json({ success: true, data: deletedTask });
});
