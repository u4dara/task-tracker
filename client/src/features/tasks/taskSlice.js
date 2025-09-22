import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import taskService from './taskService.js';

export const createTask = createAsyncThunk(
   'task/create',
   async (task, thunkAPI) => {
      try {
         const token = thunkAPI.getState().auth.user.token;
         return await taskService.createTask(task, token);
      } catch (error) {
         const message =
            (error.response &&
               error.response.data &&
               error.response.data.message) ||
            error.message ||
            error.toString();
         return thunkAPI.rejectWithValue(message);
      }
   }
);

export const getTasks = createAsyncThunk('task/getAll', async (_, thunkAPI) => {
   try {
      const token = thunkAPI.getState().auth.user.token;
      return await taskService.getTasks(token);
   } catch (error) {
      const message =
         (error.response &&
            error.response.data &&
            error.response.data.message) ||
         error.message ||
         error.toString();
      return thunkAPI.rejectWithValue(message);
   }
});

const initialState = {
   tasks: [],
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: '',
};

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      reset: (state) => initialState,
   },
   extraReducers: (builder) => {
      builder
         .addCase(createTask.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(createTask.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.tasks.push(action.payload);
         })
         .addCase(createTask.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
         })
         .addCase(getTasks.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getTasks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.tasks = action.payload;
         })
         .addCase(getTasks.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.tasks = action.payload;
         });
   },
});

export const { reset } = taskSlice.actions;

export default taskSlice.reducer;
