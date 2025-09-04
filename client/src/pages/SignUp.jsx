import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const SignUp = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   const { name, email, password, confirmPassword } = formData;

   const onChange = (e) => {
      setFormData((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,
      }));
   };

   const onSubmit = (e) => {
      e.preventDefault();
   };

   return (
      <>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
               <FaUser className="text-theme-default mx-auto h-10 w-auto" />
               <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                  Sign up
               </h2>
               <p className="text-center mt-5">
                  Create your account to continue
               </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
               <form
                  onSubmit={onSubmit}
                  method="POST"
                  className="form space-y-6"
               >
                  <div>
                     <label
                        htmlFor="email"
                        className="block text-sm/6 font-medium text-gray-900"
                     >
                        Name
                     </label>
                     <div className="mt-2">
                        <input
                           id="name"
                           name="name"
                           type="text"
                           value={name}
                           placeholder="John Doe"
                           onChange={onChange}
                           required
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline sm:text-sm/6"
                        />
                     </div>
                  </div>
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
                        <div className="text-sm"></div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="password"
                           name="password"
                           type="password"
                           value={password}
                           onChange={onChange}
                           placeholder="*********"
                           required
                           autoComplete="off"
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline sm:text-sm/6"
                        />
                     </div>
                  </div>
                  <div>
                     <div className="flex items-center justify-between">
                        <label
                           htmlFor="confirm-password"
                           className="block text-sm/6 font-medium text-gray-900"
                        >
                           Confirm Password
                        </label>
                        <div className="text-sm"></div>
                     </div>
                     <div className="mt-2">
                        <input
                           id="confirm-password"
                           name="confirmPassword"
                           type="password"
                           value={confirmPassword}
                           onChange={onChange}
                           placeholder="*********"
                           required
                           autoComplete="off"
                           className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-input-outline sm:text-sm/6"
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-theme-dark px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-theme-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-dark"
                     >
                        Sign up
                     </button>
                  </div>
               </form>

               <p className="mt-10 text-center text-sm/6 text-gray-500">
                  Already have an account?{' '}
                  <NavLink
                     to="/auth/sign-in"
                     className="font-semibold text-theme-default hover:text-theme-border"
                  >
                     Sign in
                  </NavLink>
               </p>
            </div>
         </div>
      </>
   );
};

export default SignUp;
