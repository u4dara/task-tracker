import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import authService from './authService.js';

// Get user from local storage
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
   user: user ? user : null,
   isError: false,
   isSuccess: false,
   isLoading: false,
   message: '',
};

// Sign-in new User
export const signIn = createAsyncThunk(
   'auth/sign-in',
   async (user, thunkAPI) => {
      try {
         return await authService.signIn(user);
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

// Sign-out User
export const signOut = createAsyncThunk('auth/sign-out', async () => {
   await authService.signOut();
});

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      reset: (state) => {
         state.isLoading = false;
         state.isSuccess = false;
         state.isError = false;
         state.message = '';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(signIn.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(signIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;
         })
         .addCase(signIn.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
         })
         .addCase(signOut.fulfilled, (state) => {
            state.user = null;
         });
   },
});

export default authSlice.reducer;

export const { reset } = authSlice.actions;
