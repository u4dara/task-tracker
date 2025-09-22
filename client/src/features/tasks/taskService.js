import axios from 'axios';

const TASK_API_URL = 'http://localhost:5500/api/v1/tasks/';

// Create a new task
const createTask = async (task, token) => {
   const config = {
      headers: {
         authorization: `Bearer ${token}`,
      },
   };
   const response = await axios.post(TASK_API_URL, task, config);
   return response.data.data;
};

// Get all tasks
const getTasks = async (token) => {
   const config = {
      headers: {
         authorization: `Bearer ${token}`,
      },
   };
   const response = await axios.get(TASK_API_URL, config);
   return response.data.data;
};

const taskService = {
   createTask,
   getTasks,
};

export default taskService;
