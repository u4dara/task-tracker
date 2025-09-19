import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signIn, reset } from '../features/auth/authSlice.js';
import { FaSignInAlt } from 'react-icons/fa';
import Spinner from '../components/Spinner.jsx';

const SignIn = () => {
   const [formData, setFormData] = useState({
      email: '',
      password: '',
   });

   const { email, password } = formData;

   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { user, isLoading, isError, isSuccess, message } = useSelector(
      (state) => state.auth
   );

   useEffect(() => {
      if (isError) {
         toast.error(message);
      }
      if (isSuccess || user) {
         navigate('/');
      }
      dispatch(reset());
   }, [user, isError, isSuccess, message, navigate, dispatch]);

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();

      const userData = {
         email,
         password,
      };

      dispatch(signIn(userData));
   };

   return isLoading ? (
      <>
         <div className="flex justify-center items-center h-screen bg-gray-200">
            <Spinner loading={true} />
         </div>
      </>
   ) : (
      <>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <FaSignInAlt className="text-theme-default mx-auto h-10 w-auto" />
               <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign in
               </h2>
               <p className="text-center mt-5">
                  Enter your credentials to access your account
               </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form onSubmit={onSubmit} method="POST" className="space-y-6">
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                     >
                        Email address
                     </label>
                     <div className="mt-2">
                        <input
                           id="email"
                           name="email"
                           type="email"
                           value={email}
                           onChange={onChange}
                           placeholder="john@gmail.com"
                           required
                           autoComplete="email"
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline sm:text-sm/6"
                        />
                     </div>
                  </div>

                  <div>
                     <div className="flex items-center justify-between">
                        <label
                           htmlFor="password"
                           className="block text-sm/6 font-medium text-gray-900"
                        >
                           Password
                        </label>
                        <div className="text-sm">
                           <NavLink
                              to=""
                              className="font-semibold text-theme-default hover:text-theme-border"
                           >
                              Forgot password?
                           </NavLink>
                        </div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={onChange}
                           placeholder="**********"
                           required
                           autoComplete="current-password"
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline sm:text-sm/6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-theme-dark px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-theme-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-dark"
                     >
                        Sign in
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm/6 text-gray-500">
                  New to Task Tracker?{' '}
                  <NavLink
                     to="/auth/sign-up"
                     className="font-semibold text-theme-default hover:text-theme-border"
                  >
                     Sign up
                  </NavLink>
               </p>
            </div>
         </div>
      </>
   );
};

export default SignIn;
