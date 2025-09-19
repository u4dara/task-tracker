import axios from 'axios';

const SIGNUP_API_URL = 'http://localhost:5500/api/v1/auth/sign-up';
const SIGNIN_API_URL = 'http://localhost:5500/api/v1/auth/sign-in';

// Sign-up user
const signUp = async (user) => {
   const response = await axios.post(SIGNUP_API_URL, user);

   if (response.data)
      localStorage.setItem('user', JSON.stringify(response.data.data));

   return response.data.data;
};

// Sign-in user
const signIn = async (user) => {
   const response = await axios.post(SIGNIN_API_URL, user);

   if (response.data)
      localStorage.setItem('user', JSON.stringify(response.data.data));

   return response.data.data;
};

// Sign-out user
const signOut = () => {
   localStorage.removeItem('user');
};

const authService = {
   signUp,
   signIn,
   signOut,
};

export default authService;
