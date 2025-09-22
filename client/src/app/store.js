import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice.js';
import taskReducer from '../features/tasks/taskSlice.js';

export default configureStore({
   reducer: {
      auth: authReducer,
      task: taskReducer,
   },
});
