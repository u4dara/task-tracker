import asyncHandler from 'express-async-handler';

import Task from '../models/task.model.js';
import User from '../models/user.model.js';

// @des		GET all tasks
// @route   GET /api/v1/tasks
export const getAllTasks = asyncHandler(async (req, res) => {
   const tasks = await Task.find({ user: req.user.id });
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
   if (!req.body.name) {
      res.status(400);
      throw new Error('Please enter a new task name');
   }
   const newTask = await Task.create({
      user: req.user.id,
      name: req.body.name,
   });
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

   const user = await User.findById(req.user.id);
   if (!user) {
      res.status(401);
      throw new Error('User not found');
   }

   if (String(task.user) !== user.id) {
      res.status(401);
      throw new Error('User not authorized');
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

   const user = await User.findById(req.user.id);
   if (!user) {
      res.status(401);
      throw new Error('User not found');
   }

   if (String(task.user) !== user.id) {
      res.status(401);
      throw new Error('User not authorized');
   }

   const deletedTask = await Task.findByIdAndDelete(req.params.id);
   res.status(200).json({ success: true, data: deletedTask });
});
