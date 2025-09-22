import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTasks, reset } from '../features/tasks/taskSlice.js';

import Spinner from '../components/Spinner.jsx';
import TaskForm from '../components/TaskForm.jsx';
import TaskItem from '../components/TaskItem.jsx';

const Dashboard = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const { user } = useSelector((state) => state.auth);
   const { tasks, isLoading, isError, message } = useSelector(
      (state) => state.task
   );

   useEffect(() => {
      if (!user) {
         navigate('/auth/sign-in');
      } else {
         dispatch(getTasks());
      }

      return () => {
         dispatch(reset());
      };
   }, [user, navigate, dispatch]);

   useEffect(() => {
      if (isError) {
         console.error(message);
      }
   }, [isError, message]);

   return (
      <>
         <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-center items-center">
               <h1 className=" mt-8 text-3xl font-bold">
                  Welcome{' '}
                  {user && user.user && user.user.name
                     ? user.user.name
                     : 'User'}
                  !
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
         <section className="mb-5">
            {isLoading ? (
               <>
                  <div className="flex justify-center items-center h-screen bg-gray-200">
                     <Spinner loading={true} />
                  </div>
               </>
            ) : tasks.length > 0 ? (
               <div className="mt-8 mx-auto max-w-7xl sm:px-6 lg:px-8 flex flex-col gap-3 justify-center items-center">
                  {tasks.map((task) => (
                     <TaskItem key={task._id} task={task} />
                  ))}
               </div>
            ) : (
               <h3>You have not set any tasks</h3>
            )}
         </section>
      </>
   );
};

export default Dashboard;
