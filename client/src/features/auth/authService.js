import axios from 'axios';

const API_URL = 'http://localhost:5500/api/v1/auth/sign-up';

// Sign-in user
const signIn = async (user) => {
   const response = await axios.post(API_URL, user);

   if (response.data)
      localStorage.setItem('user', JSON.stringify(response.data.data));

   return response.data.data;
};

const signOut = () => {
   localStorage.removeItem('user');
};

const authService = {
   signIn,
   signOut,
};

export default authService;
