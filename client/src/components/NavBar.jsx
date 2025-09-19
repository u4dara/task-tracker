import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { LuListTodo } from 'react-icons/lu';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';

import { signOut, reset } from '../features/auth/authSlice.js';

const NavBar = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { user } = useSelector((state) => state.auth);

   const onSignOut = () => {
      dispatch(signOut());
      dispatch(reset());
      navigate('/auth/sign-in');
   };

   const linkClass = ({ isActive }) =>
      isActive
         ? 'border-b-2 border-black text-white py-2 text-md'
         : 'text-white py-2 hover:border-b-2 hover:border-gray-600';

   return (
      <nav className="bg-theme-default border-b border-theme-border">
         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex h-18 items-center justify-between gap-x-8">
               <div className="flex shrink-0 items-center mr-4">
                  <LuListTodo className="h-8 w-auto" />
                  <span className="hidden md:block text-white text-2xl font-bold ml-2">
                     Task Tracker
                  </span>
               </div>
               <div className="flex justify-center space-x-4">
                  <NavLink to="/" className={linkClass}>
                     Dashboard
                  </NavLink>
                  <NavLink to="/jobs" className={linkClass}>
                     Tasks
                  </NavLink>
                  <NavLink to="/add-job" className={linkClass}>
                     Profile
                  </NavLink>
               </div>

               <div className="flex justify-center items-center">
                  {user ? (
                     <button
                        className="flex justify-center items-center gap-1.5 bg-black text-white py-2 px-3 rounded-md hover:bg-gray-700"
                        onClick={onSignOut}
                     >
                        <FaSignOutAlt />
                        Sign out
                     </button>
                  ) : (
                     <NavLink
                        to="/auth/sign-in"
                        className="flex justify-center items-center gap-1.5 bg-black text-white py-2 px-3 rounded-md hover:bg-gray-700"
                     >
                        <FaSignInAlt />
                        Sign in
                     </NavLink>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavBar;
