import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
   {
      taskName: {
         type: String,
         required: [true, 'Task name is required'],
         trim: true,
         minLength: 3,
         maxLength: 100,
      },
   },
   { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
