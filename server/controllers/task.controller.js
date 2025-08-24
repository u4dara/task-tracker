// @des		GET all tasks
// @route   GET /api/v1/tasks
export const getAllTasks = async (req, res) => {
   res.status(200).json({ message: 'All tasks' });
};

// @des		GET a task by id
// @route   GET /api/v1/tasks/:id
export const getTask = async (req, res) => {
   res.status(200).json({ message: 'Task with id ' + req.params.id });
};

// @des	   CREATE a new task
// @route   POST /api/v1/tasks
export const createTask = async (req, res) => {
   if (!req.body) {
      res.status(400);
      throw new Error('Please enter a new task');
   }
   res.status(200).json({ message: 'Task created successfully' });
};

// @des		UPDATE a task by id
// @route   PUT /api/v1/tasks/:id
export const updateTask = async (req, res) => {
   res.status(200).json({ message: 'Task updated successfully' });
};

// @des		DELETE a task by id
// @route   DELETE /api/v1/tasks/:id
export const deleteTask = async (req, res) => {
   res.status(200).json({ message: 'Task deleted successfully' });
};
