import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTasks, reset } from '../features/tasks/taskSlice.js';

import Spinner from '../components/Spinner.jsx';
import TaskForm from '../components/TaskForm.jsx';

const Dashboard = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { user } = useSelector((state) => state.auth);
   const { tasks, isLoading, isError, message } = useSelector(
      (state) => state.task
   );

   useEffect(() => {
      if (isError) {
         console.log(message);
      }
      if (!user) {
         navigate('/auth/sign-in');
      }

      dispatch(getTasks());

      return () => {
         dispatch(reset());
      }
   }, [user, navigate, isError, message, dispatch]);

   return isLoading ?  (
      <>
         <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center">
               <h1 className=" mt-8 text-3xl font-bold">
                  Welcome {user ? user.user.name : 'User'}!
               </h1>
            </div>
            <div className="mt-8 flex flex-col justify-center items-center">
               <p className="text-2xl text-gray-600 font-bold">
                  Tasks Dashboard
               </p>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
               <TaskForm />
            </div>
         </section>
      </>
   );
};

export default Dashboard;
