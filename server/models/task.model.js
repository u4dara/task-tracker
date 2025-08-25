import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: [true, 'Task name is required'],
         trim: true,
         minLength: 3,
         maxLength: 100,
      },
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
         index: true,
      },
   },
   { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
